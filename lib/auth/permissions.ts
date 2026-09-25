export const permissionCodes = [
  "dashboard.read",
  "content.read",
  "content.create",
  "content.update",
  "content.delete",
  "content.publish",
  "translation.manage",
  "media.upload",
  "media.delete",
  "career.manage",
  "application.read",
  "contact.read",
  "seo.manage",
  "navigation.manage",
  "settings.manage",
  "users.manage",
  "roles.manage",
  "audit.read",
] as const;

export type PermissionCode = (typeof permissionCodes)[number];

export function hasPermission(grants: readonly string[], permission: PermissionCode): boolean {
  return grants.includes(permission);
}
