# Deployment and Recovery

## Environments

- **Development:** local Next.js app and isolated local/dev PostgreSQL; use sample content only, clearly marked and unpublished.
- **Staging:** separate database, storage bucket and secrets; restricted access/noindex; test email sink and sanitized data.
- **Production:** managed runtime, PostgreSQL, private object storage, transactional email, TLS, monitoring, backups and CDN. Enable only approved public content.

## Environment variables

Expected names (values belong in secret management, never in source control): `DATABASE_URL`, `AUTH_SECRET`, SMTP host/user/password, storage bucket/access key/secret, `NEXT_PUBLIC_SITE_URL`, `PUBLICATION_APPROVED`, and optional analytics IDs. Keep `PUBLICATION_APPROVED=false` until the company approves public copy/legal/contact details; set the canonical origin and approval flag in the build environment because public routes and metadata are statically generated. Provide a checked-in `.env.example` with blank/non-secret placeholders only.

## Release process

Review diff and schema migrations; run typecheck, tests, production build, dependency/security checks, accessibility/SEO checks, and responsive smoke tests. Apply backward-compatible migrations before deploy where needed. Verify health, forms, language routing and logs after release. Keep rollback artifact and migration recovery plan.

## Initial admin bootstrap

After the project database is configured, apply migrations and seed system roles/permissions. Generate a strong `AUTH_SECRET` (at least 32 bytes), then provide `INITIAL_ADMIN_EMAIL`, `INITIAL_ADMIN_NAME`, and a unique 16–128 character `INITIAL_ADMIN_PASSWORD` through a secret manager for `npm run cms:create-admin`. The command refuses to run if any user already exists and records a one-time bootstrap marker. Remove the bootstrap password from the environment immediately; no default admin is seeded.

## Backups and recovery

- Automated encrypted PostgreSQL backups with documented RPO/RTO and periodic restore drills.
- Versioned/private media backups; test restore of database references and files together.
- Maintain a known-good deployment and documented rollback procedure. Do not roll back irreversible data migrations without a recovery plan.
- Store recovery credentials separately with restricted access; audit restore actions.

## Current status

The company-profile site is running at `https://papcorp.services` through `/etc/nginx/sites-available/papcorp.services.conf` and the `papcorp-web.service` systemd unit. Next.js listens only on `127.0.0.1:3102` as the dedicated `papcorp-web` user. A Let's Encrypt certificate is installed with automatic renewal. The approved 2026 company profile supplies the published bilingual company, service, operations, certification, client, and contact content. The site remains noindex with `PUBLICATION_APPROVED=false` while legal-policy pages are pending; personal-data forms remain disabled. The existing SOPI/DUX services are separate.

Project PostgreSQL, private media storage, transactional email, and admin bootstrap credentials have not been configured. CMS publishing and public legal policies remain pending.
