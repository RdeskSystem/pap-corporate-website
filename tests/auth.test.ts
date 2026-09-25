import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { hasPermission } from "@/lib/auth/permissions";
import { DUMMY_PASSWORD_HASH, hashPassword, verifyPassword } from "@/lib/auth/password";

describe("admin authentication primitives", () => {
  it("stores a salted scrypt hash and verifies only the matching password", async () => {
    const password = "correct horse battery staple";
    const passwordHash = await hashPassword(password);

    assert.notEqual(passwordHash, password);
    assert.match(passwordHash, /^scrypt\$/);
    assert.equal(await verifyPassword(password, passwordHash), true);
    assert.equal(await verifyPassword("different password", passwordHash), false);
  });

  it("rejects short passwords and malformed stored hashes", async () => {
    await assert.rejects(() => hashPassword("short"));
    assert.equal(await verifyPassword("anything", "not-a-password-hash"), false);
  });

  it("keeps permission checks explicit and deny-by-default", () => {
    const grants = ["dashboard.read", "content.read"];
    assert.equal(hasPermission(grants, "dashboard.read"), true);
    assert.equal(hasPermission(grants, "users.manage"), false);
  });

  it("uses a real-cost dummy hash for unknown-account timing parity", async () => {
    assert.equal(await verifyPassword("not-a-real-password", DUMMY_PASSWORD_HASH), true);
    assert.equal(await verifyPassword("not-the-dummy-password", DUMMY_PASSWORD_HASH), false);
  });
});
