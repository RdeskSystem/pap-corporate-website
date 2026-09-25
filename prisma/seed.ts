import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const permissions = [
  ["dashboard.read", "View the admin dashboard"],
  ["content.read", "View managed content"],
  ["content.create", "Create content"],
  ["content.update", "Update content"],
  ["content.delete", "Delete or archive content"],
  ["content.publish", "Approve and publish content"],
  ["translation.manage", "Manage localized translations"],
  ["media.upload", "Upload and replace media"],
  ["media.delete", "Delete media"],
  ["career.manage", "Manage job vacancies"],
  ["application.read", "Review career applications"],
  ["contact.read", "Review business inquiries"],
  ["seo.manage", "Manage SEO metadata and redirects"],
  ["navigation.manage", "Manage site navigation"],
  ["settings.manage", "Manage site settings"],
  ["users.manage", "Manage user accounts"],
  ["roles.manage", "Manage roles and permissions"],
  ["audit.read", "View audit history"],
] as const;

const allPermissionCodes = permissions.map(([code]) => code);

const roles = [
  {
    key: "SUPER_ADMIN",
    name: "Super Admin",
    description: "Full platform administration",
    isSystem: true,
    grants: allPermissionCodes,
  },
  {
    key: "ADMIN",
    name: "Admin",
    description: "Site and content administration",
    isSystem: true,
    grants: allPermissionCodes.filter((code) => code !== "roles.manage"),
  },
  {
    key: "EDITOR",
    name: "Editor",
    description: "Edit and review assigned content",
    isSystem: true,
    grants: ["dashboard.read", "content.read", "content.create", "content.update", "translation.manage", "media.upload"],
  },
  {
    key: "AUTHOR",
    name: "Author",
    description: "Create and update drafts",
    isSystem: true,
    grants: ["dashboard.read", "content.read", "content.create", "content.update", "media.upload"],
  },
  {
    key: "HR_MANAGER",
    name: "HR Manager",
    description: "Manage vacancies and review applications",
    isSystem: true,
    grants: ["dashboard.read", "career.manage", "application.read", "media.upload"],
  },
  {
    key: "MARKETING",
    name: "Marketing",
    description: "Manage approved marketing content and metadata",
    isSystem: true,
    grants: ["dashboard.read", "content.read", "content.create", "content.update", "translation.manage", "media.upload", "seo.manage", "navigation.manage"],
  },
  {
    key: "SEO_MANAGER",
    name: "SEO Manager",
    description: "Manage search metadata and redirects",
    isSystem: true,
    grants: ["dashboard.read", "content.read", "seo.manage", "translation.manage"],
  },
  {
    key: "VIEWER",
    name: "Viewer",
    description: "Read-only access to permitted content",
    isSystem: true,
    grants: ["dashboard.read", "content.read"],
  },
] as const;

async function main() {
  await prisma.$transaction(async (transaction) => {
    const permissionIds = new Map<string, string>();

    for (const [code, description] of permissions) {
      const permission = await transaction.permission.upsert({
        where: { code },
        create: { code, description },
        update: { description },
      });
      permissionIds.set(code, permission.id);
    }

    for (const definition of roles) {
      const role = await transaction.role.upsert({
        where: { key: definition.key },
        create: {
          key: definition.key,
          name: definition.name,
          description: definition.description,
          isSystem: definition.isSystem,
        },
        update: {
          name: definition.name,
          description: definition.description,
          isSystem: definition.isSystem,
        },
      });

      const roleGrants = definition.grants.map((code) => {
        const permissionId = permissionIds.get(code);
        if (!permissionId) throw new Error(`Permission seed missing: ${code}`);
        return { roleId: role.id, permissionId };
      });

      await transaction.rolePermission.deleteMany({ where: { roleId: role.id } });
      if (roleGrants.length > 0) {
        await transaction.rolePermission.createMany({ data: roleGrants });
      }
    }
  }, { timeout: 15000 });
}

main()
  .catch((error: unknown) => {
    console.error("CMS role/permission seed failed", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
