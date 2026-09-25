# PT Pelita Anugrah Perkasa — Corporate Website

Initial bilingual (Indonesian/English) Next.js foundation for the PAP corporate website. The workspace was greenfield; requirements and architecture decisions are documented in [`docs/`](docs/).

## Run locally

Requirements: Node.js 22 or later and npm.

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3103
```

Open `http://127.0.0.1:3103`. Indonesian is served at `/`; English at `/en`. The explicit dev port avoids the server's existing services on ports 3000 and 3001.

## Current content status

This is an early preview at [https://papcorp.services](https://papcorp.services). Company facts, service scope, operating claims, contact details, vacancies, articles, certifications, and legal text are not yet supplied or verified. Pages show explicit pending states; no public form collects personal data. The site is noindex until company approval. Do not treat this preview as final corporate content.

The current build uses `NEXT_PUBLIC_SITE_URL=https://papcorp.services`. Keep `PUBLICATION_APPROVED=false` until company facts, legal text, contact channels and the final public copy have been approved. The preview is noindex and excluded from the sitemap by default.

## Project map

- `app/` — localized public routes, metadata, sitemap and robots.
- `components/` — shared navigation, footer and page templates.
- `lib/site-content.ts` — centralized ID/EN copy and safe placeholder contact fields.
- `prisma/schema.prisma` — CMS data model; `prisma/seed.ts` seeds system roles/permissions only.
- `lib/auth/` — password hashing, opaque sessions, email-keyed login throttling, and permission checks.
- `app/admin/` — protected login/dashboard foundation; CMS CRUD modules are pending.
- `/admin_console` — convenience redirect to `/admin/login`.
- `assets/logo_pap.png` — untouched canonical logo source.
- `public/assets/` — web-served brand derivatives.
- `docs/` — architecture, product requirements, specifications, decisions and progress.

## Checks

```bash
npm run typecheck
npm run test:unit
npm run build
npm run db:validate
npm audit
```

The first admin cannot sign in until a PostgreSQL instance is configured, migrations are applied, system roles are seeded, and a bootstrap admin is created. Set an `AUTH_SECRET` of at least 32 bytes and provide `INITIAL_ADMIN_EMAIL`, `INITIAL_ADMIN_NAME`, and `INITIAL_ADMIN_PASSWORD` only to the one-time `npm run cms:create-admin` command. The command only runs when the users table is empty; no default account or password exists. Password reset, MFA, content CRUD modules, admin APIs, contact/application persistence, email and private file storage remain pending. See [`docs/ADMIN_GUIDE.md`](docs/ADMIN_GUIDE.md) and [`docs/PROGRESS.md`](docs/PROGRESS.md).

After configuring PostgreSQL, run `npm run db:migrate` for development (or `npm run db:deploy` in a deployment environment), then `npm run db:seed`. Supply the initial administrator values through your secret manager for `npm run cms:create-admin`. Do not put bootstrap values in source control or leave the password in the environment afterward.
