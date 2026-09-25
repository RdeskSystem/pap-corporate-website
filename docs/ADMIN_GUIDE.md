# Admin Guide

## Current availability

An initial `/admin/login` and protected empty dashboard shell are implemented. The shortcut is `/admin_console`. Content CRUD modules are not ready. No PostgreSQL connection or administrator account is configured in this workspace, so sign-in is not yet available. The seed script creates roles/permissions only and never creates a default account.

## One-time local setup

1. Configure a project PostgreSQL database in `DATABASE_URL`.
2. Apply the initial schema with `npm run db:migrate` (development) or `npm run db:deploy` (deployment).
3. Seed system roles/permissions with `npm run db:seed`.
4. Generate a strong `AUTH_SECRET` of at least 32 bytes.
5. Provide `INITIAL_ADMIN_EMAIL`, `INITIAL_ADMIN_NAME`, and a unique 16–128 character `INITIAL_ADMIN_PASSWORD` through a secret manager for `npm run cms:create-admin`.
6. Remove the bootstrap password from the environment, then sign in at `/admin/login`.

The bootstrap command refuses to run if any user already exists and records a one-time marker. It creates one active `SUPER_ADMIN`, verifies it has a password hash, and does not print the password. Do not commit real environment values.

## Implemented safeguards

- Passwords use salted scrypt hashes; no plaintext passwords are stored.
- Login errors do not reveal whether an email is registered.
- Five failed attempts for a normalized email are throttled for 15 minutes using an HMAC-keyed database record; stale throttle records expire after 24 hours.
- Sessions store a SHA-256 token hash, expire after 12 hours, and use HttpOnly, SameSite=Strict cookies (Secure in production).
- The dashboard checks `dashboard.read` server-side; roles/permissions are loaded from the database on each request.
- Login/logout create audit records. The dashboard contains no fabricated counts or demo company content.

## Pending before editorial use

Password reset/invitation email, MFA, trusted-proxy/IP-level abuse controls, admin content CRUD modules, full permission checks for each module/API, preview/publish workflow, media handling, inquiry/application workflows, and auth integration/E2E tests are not implemented. Do not use the dashboard as a production CMS until these items are delivered and verified.
