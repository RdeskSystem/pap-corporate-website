# CMS Specification

## Admin workspace

Target route: `/admin`. An initial `/admin/login` and protected empty dashboard shell exist; content modules are not yet implemented. The completed CMS must have a sidebar, top bar, breadcrumbs, global search, notifications, user menu, responsive layouts, helpful empty/loading/error states, and accessible forms/tables.

## Modules

Dashboard; Pages and structured blocks; Services; Industries; Operations; Compliance and Certifications; Leadership and Team; Careers and Job Vacancies; News, Categories and Tags; Media Library; Testimonials; Partners; Contact Messages; Career Applications; SEO; Translations; Navigation; Site Settings; Users and Roles; Audit Logs.

## Content workflow

`DRAFT → REVIEW → APPROVED → PUBLISHED`; optional `SCHEDULED` and `ARCHIVED`. Editors cannot publish unless their server-checked permission allows it. ID and EN translation states are independently tracked as `MISSING`, `DRAFT`, `REVIEW`, or `PUBLISHED`.

## Roles and authorization

Roles: `SUPER_ADMIN`, `ADMIN`, `EDITOR`, `AUTHOR`, `HR_MANAGER`, `MARKETING`, `SEO_MANAGER`, `VIEWER`. Permissions are granular (for example `content.read`, `content.create`, `content.update`, `content.publish`, `media.upload`, `application.read`, `contact.read`, `users.manage`, `settings.manage`, `audit.read`). Frontend hiding is not authorization; every server action/API verifies the active session and permission.

## UX requirements

- Tables: search, filters, sorting, pagination, and appropriate bulk actions.
- Editing: clear labels, schema validation, save draft, preview in desktop/tablet/mobile and ID/EN, publish/schedule controls, and confirmation for destructive actions.
- Media: search/filter, folders, alt text, caption, credit, dimensions, MIME, size, and safe replacement/deletion.
- Leads/applications: private access, assignment, statuses, archive, and audit trail. CV access uses authorized private download, never a public URL.

## Security and release gate

Use secure session cookies, password hashing, rate limits/brute-force controls, server-side RBAC, CSRF protections where applicable, audit events, and safe upload validation. The current foundation uses scrypt password hashes, opaque database-backed sessions, strict HttpOnly cookies, an email-keyed HMAC login throttle, server-side permission checks for the dashboard, and a one-time bootstrap CLI. It is not production-ready until a project database is configured, auth flows are integration-tested, password recovery/MFA and trusted-edge abuse controls are addressed, and module APIs enforce permissions. No admin user or company content is committed.
