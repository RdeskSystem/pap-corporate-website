# PT Pelita Anugrah Perkasa — Corporate Website

Indonesian/English Next.js corporate website for PT Pelita Anugrah Perkasa. Requirements and architecture decisions are documented in [`docs/`](docs/).

## Run locally

Requirements: Node.js 22 or later and npm.

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3103
```

Open `http://127.0.0.1:3103`. Indonesian is served at `/`; English at `/en`. The explicit dev port avoids the server's existing services on ports 3000 and 3001.

## Public company content

[`company_profile_detail.md`](company_profile_detail.md) is the approved 2026 company profile and canonical source for the public company facts and copy. Its approved contents are presented across the Indonesian and English home, company, services, clients, operations, certification, and contact pages.

The site is available at [https://papcorp.services](https://papcorp.services). Bilingual privacy, terms, and cookie pages are published. Careers and news remain unpublished, unlinked, and excluded from the sitemap. The contact form prepares a message in the visitor's browser and passes it to WhatsApp only when the visitor chooses to continue; PAP's site does not store its contents. The approved production deployment is indexable.

## Project map

- `app/` — localized public routes, metadata, sitemap and robots.
- `components/` — shared navigation, footer and page templates; the client-name marquee pauses on hover and keyboard focus.
- `app/visual-refresh.css` — responsive PAP-branded editorial styling, motion, and reduced-motion support.
- `lib/site-content.ts` — localized routes, metadata copy, and approved company contact fields.
- `lib/company-profile.ts` — localized company profile content used by the public pages.
- `company_profile_detail.md` — approved source company profile for public content.
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

The first admin cannot sign in until a PostgreSQL instance is configured, migrations are applied, system roles are seeded, and a bootstrap admin is created. Set an `AUTH_SECRET` of at least 32 bytes and provide `INITIAL_ADMIN_EMAIL`, `INITIAL_ADMIN_NAME`, and `INITIAL_ADMIN_PASSWORD` only to the one-time `npm run cms:create-admin` command. The command only runs when the users table is empty; no default account or password exists. Password reset, MFA, content CRUD modules, admin APIs, server-side contact persistence, email and private file storage remain pending. See [`docs/ADMIN_GUIDE.md`](docs/ADMIN_GUIDE.md) and [`docs/PROGRESS.md`](docs/PROGRESS.md).

After configuring PostgreSQL, run `npm run db:migrate` for development (or `npm run db:deploy` in a deployment environment), then `npm run db:seed`. Supply the initial administrator values through your secret manager for `npm run cms:create-admin`. Do not put bootstrap values in source control or leave the password in the environment afterward.
