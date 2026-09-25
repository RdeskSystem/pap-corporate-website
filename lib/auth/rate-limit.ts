import "server-only";
import { createHmac } from "node:crypto";
import { prisma } from "@/lib/prisma";

const WINDOW_MS = 15 * 60 * 1000;
const LOCK_MS = 15 * 60 * 1000;
const RETENTION_MS = 24 * 60 * 60 * 1000;
const MAX_FAILURES = 5;

export function loginThrottleKey(normalizedEmail: string): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret || Buffer.byteLength(secret) < 32) {
    throw new Error("AUTH_SECRET must contain at least 32 bytes before admin login is enabled.");
  }

  return createHmac("sha256", secret)
    .update(normalizedEmail.trim().toLowerCase())
    .digest("hex");
}

export async function isLoginLocked(key: string, now = new Date()): Promise<boolean> {
  await prisma.loginThrottle.deleteMany({ where: { expiresAt: { lt: now } } });
  const throttle = await prisma.loginThrottle.findUnique({ where: { key } });
  return Boolean(throttle?.lockedUntil && throttle.lockedUntil > now);
}

export async function recordFailedLogin(key: string, now = new Date()): Promise<void> {
  const windowCutoff = new Date(now.getTime() - WINDOW_MS);
  const lockedUntil = new Date(now.getTime() + LOCK_MS);
  const expiresAt = new Date(now.getTime() + RETENTION_MS);

  await prisma.$executeRaw`
    INSERT INTO "login_throttles" ("key", "failedAttempts", "windowStartedAt", "lockedUntil", "expiresAt", "updatedAt")
    VALUES (${key}, 1, ${now}, NULL, ${expiresAt}, ${now})
    ON CONFLICT ("key") DO UPDATE SET
      "failedAttempts" = CASE
        WHEN "login_throttles"."windowStartedAt" <= ${windowCutoff} THEN 1
        ELSE "login_throttles"."failedAttempts" + 1
      END,
      "windowStartedAt" = CASE
        WHEN "login_throttles"."windowStartedAt" <= ${windowCutoff} THEN ${now}
        ELSE "login_throttles"."windowStartedAt"
      END,
      "lockedUntil" = CASE
        WHEN "login_throttles"."windowStartedAt" <= ${windowCutoff} THEN NULL
        WHEN "login_throttles"."failedAttempts" + 1 >= ${MAX_FAILURES} THEN ${lockedUntil}
        ELSE "login_throttles"."lockedUntil"
      END,
      "expiresAt" = ${expiresAt},
      "updatedAt" = ${now}
  `;
}

export async function clearLoginFailures(key: string): Promise<void> {
  await prisma.loginThrottle.deleteMany({ where: { key } });
}
