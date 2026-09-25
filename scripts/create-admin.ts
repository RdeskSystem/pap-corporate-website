import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { hashPassword } from "@/lib/auth/password";

const prisma = new PrismaClient();

const bootstrapSchema = z.object({
  email: z.string().trim().email().max(254),
  fullName: z.string().trim().min(2).max(120),
  password: z.string().min(16).max(128),
});

async function main() {
  const bootstrap = bootstrapSchema.safeParse({
    email: process.env.INITIAL_ADMIN_EMAIL,
    fullName: process.env.INITIAL_ADMIN_NAME,
    password: process.env.INITIAL_ADMIN_PASSWORD,
  });

  if (!bootstrap.success) {
    throw new Error("Set valid INITIAL_ADMIN_EMAIL, INITIAL_ADMIN_NAME, and a 16–128 character INITIAL_ADMIN_PASSWORD for this one-time command.");
  }

  const email = bootstrap.data.email.toLowerCase();
  const passwordHash = await hashPassword(bootstrap.data.password);

  await prisma.$transaction(async (transaction) => {
    if ((await transaction.user.count()) !== 0) {
      throw new Error("Bootstrap is allowed only while the users table is empty.");
    }

    const superAdmin = await transaction.role.findUnique({ where: { key: "SUPER_ADMIN" } });
    if (!superAdmin) throw new Error("Run the role/permission seed before creating the first admin.");

    await transaction.siteSetting.create({
      data: {
        key: "auth.bootstrap.completed",
        value: { completedAt: new Date().toISOString() },
        isPublic: false,
      },
    });

    const user = await transaction.user.create({
      data: {
        email,
        fullName: bootstrap.data.fullName,
        passwordHash,
        status: "ACTIVE",
        emailVerifiedAt: new Date(),
      },
    });

    await transaction.userRole.create({
      data: {
        userId: user.id,
        roleId: superAdmin.id,
      },
    });
  });

  console.log("Initial administrator created. Remove bootstrap credentials from the environment immediately.");
}

main()
  .catch(() => {
    console.error("Initial administrator setup failed. Check the database, role seed, and bootstrap environment variables.");
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
