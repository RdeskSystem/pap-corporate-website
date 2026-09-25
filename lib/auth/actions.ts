"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { clearLoginFailures, isLoginLocked, loginThrottleKey, recordFailedLogin } from "@/lib/auth/rate-limit";
import { createAdminSession, getAdminPrincipal, revokeCurrentAdminSession } from "@/lib/auth/session";
import { DUMMY_PASSWORD_HASH, verifyPassword } from "@/lib/auth/password";
import { prisma } from "@/lib/prisma";
import type { Locale } from "@/lib/site-content";

const loginSchema = z.object({
  email: z.string().trim().email().max(254),
  password: z.string().min(1).max(128),
  locale: z.enum(["id", "en"]).default("id"),
});

function failureMessage(locale: Locale, unavailable = false): string {
  if (unavailable) {
    return locale === "id"
      ? "Login sementara tidak tersedia. Silakan coba kembali nanti."
      : "Sign-in is temporarily unavailable. Please try again later.";
  }
  return locale === "id"
    ? "Email atau kata sandi tidak sesuai."
    : "The email or password is incorrect.";
}

export async function signIn(
  _previousState: { message: string | null },
  formData: FormData,
): Promise<{ message: string | null }> {
  const locale: Locale = formData.get("locale") === "en" ? "en" : "id";
  const credentials = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    locale,
  });

  if (!credentials.success) return { message: failureMessage(locale) };

  const email = credentials.data.email.toLowerCase();
  let throttleKey: string;
  try {
    throttleKey = loginThrottleKey(email);
    if (await isLoginLocked(throttleKey)) return { message: failureMessage(locale) };
  } catch {
    return { message: failureMessage(locale, true) };
  }

  let user;
  try {
    user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, status: true, passwordHash: true },
    });
  } catch {
    return { message: failureMessage(locale, true) };
  }

  let passwordMatches = false;
  try {
    passwordMatches = await verifyPassword(
      credentials.data.password,
      user?.passwordHash ?? DUMMY_PASSWORD_HASH,
    );
  } catch {
    return { message: failureMessage(locale, true) };
  }

  if (!user || user.status !== "ACTIVE" || !user.passwordHash || !passwordMatches) {
    try {
      await recordFailedLogin(throttleKey);
    } catch {
      return { message: failureMessage(locale, true) };
    }
    return { message: failureMessage(locale) };
  }

  try {
    await clearLoginFailures(throttleKey);
    await createAdminSession(user.id);
  } catch {
    return { message: failureMessage(locale, true) };
  }

  redirect("/admin");
}

export async function signOut(): Promise<void> {
  let principal = null;
  try {
    principal = await getAdminPrincipal();
  } catch {
    // Clearing the browser cookie still signs the administrator out locally.
  }
  try {
    await revokeCurrentAdminSession();
  } catch {
    // The cookie is cleared before database cleanup is attempted.
  }
  if (principal) {
    try {
      await prisma.auditLog.create({
        data: {
          actorId: principal.id,
          action: "LOGOUT",
          entityType: "User",
          entityId: principal.id,
        },
      });
    } catch {
      // Do not block logout if the audit store is temporarily unavailable.
    }
  }
  redirect("/admin/login");
}
