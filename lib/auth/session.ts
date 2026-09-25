import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { hasPermission, type PermissionCode } from "@/lib/auth/permissions";

const SESSION_COOKIE =
  process.env.NODE_ENV === "production" ? "__Host-pap_admin_session" : "pap_admin_session";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000;

export interface AdminPrincipal {
  id: string;
  email: string;
  fullName: string;
  roleKeys: string[];
  permissions: string[];
}

function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function createAdminSession(userId: string): Promise<void> {
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashSessionToken(token);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_TTL_MS);

  await prisma.$transaction([
    prisma.session.deleteMany({ where: { expiresAt: { lt: now } } }),
    prisma.session.create({ data: { tokenHash, userId, expiresAt } }),
    prisma.user.update({ where: { id: userId }, data: { lastLoginAt: now } }),
    prisma.auditLog.create({
      data: {
        actorId: userId,
        action: "LOGIN",
        entityType: "User",
        entityId: userId,
      },
    }),
  ]);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: expiresAt,
  });
}

export async function getAdminPrincipal(): Promise<AdminPrincipal | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const tokenHash = hashSessionToken(token);
  const session = await prisma.session.findUnique({
    where: { tokenHash },
    include: {
      user: {
        include: {
          roles: {
            include: {
              role: {
                include: {
                  permissions: { include: { permission: true } },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!session || session.expiresAt <= new Date() || session.user.status !== "ACTIVE") {
    return null;
  }

  const roleKeys = session.user.roles.map(({ role }) => role.key);
  const permissions = Array.from(
    new Set(
      session.user.roles.flatMap(({ role }) =>
        role.permissions.map(({ permission }) => permission.code),
      ),
    ),
  );

  return {
    id: session.user.id,
    email: session.user.email,
    fullName: session.user.fullName,
    roleKeys,
    permissions,
  };
}

export async function requireAdmin(): Promise<AdminPrincipal> {
  const principal = await getAdminPrincipal();
  if (!principal) redirect("/admin/login");
  return principal;
}

export async function requirePermission(permission: PermissionCode): Promise<AdminPrincipal> {
  const principal = await requireAdmin();
  if (!hasPermission(principal.permissions, permission)) redirect("/admin/forbidden");
  return principal;
}

export async function revokeCurrentAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  cookieStore.delete(SESSION_COOKIE);
  if (token) {
    await prisma.session.deleteMany({ where: { tokenHash: hashSessionToken(token) } });
  }
}
