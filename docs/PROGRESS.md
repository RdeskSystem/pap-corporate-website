# Project Progress

## Current status

The workspace has a bilingual public website, responsive PAP-branded design, logo-derived assets, approved 2026 company profile, published bilingual legal pages, and an inquiry form that prepares a WhatsApp message without storing form data on the site. The site runs at `https://papcorp.services` through a dedicated systemd service and Nginx TLS vhost and is indexable; unpublished careers/news routes remain noindex and out of the sitemap. There is no project database connection or admin account, and CMS content CRUD modules are not ready yet.

**Current phase:** Public website finalization and protected CMS foundation.
**Current task:** Continue database-backed CMS modules and complete release accessibility, responsive, and browser checks.
**Current blockers:** Project database, private storage, transactional email, and server-side contact workflows are not configured.

## Phase 1 — Discovery

- [x] Repository inspected (no application source or framework existed)
- [x] Existing technology stack identified (none; greenfield)
- [x] Architecture baseline documented
- [x] Existing assets reviewed (`assets/logo_pap.png`, 3375 × 3375 RGBA symbol)
- [x] Missing company inputs recorded

## Phase 2 — Architecture and documentation

- [x] Information architecture documented
- [x] CMS requirements and RBAC model documented
- [x] Logical database schema documented
- [x] API contracts documented
- [x] Design system and brand guidance documented
- [x] Content model and bilingual approach documented
- [x] Security, SEO, accessibility, performance and testing requirements documented
- [x] Deployment/recovery strategy documented
- [x] Roadmap and architecture decisions recorded

## Phase 3 — Brand and assets

- [x] Canonical logo source reviewed and retained unchanged
- [x] Favicon, Apple touch and PWA/maskable icons generated
- [x] Indonesian/English OG images and social previews generated
- [x] Brand colors, locally served typeface and design tokens implemented
- [x] Abstract process/reporting artwork implemented and labeled illustrative
- [ ] Company-approved photography / licensed imagery

## Phase 4 — Public website

- [x] Homepage foundation with the required section structure
- [x] Responsive primary navigation and ID/EN route switching
- [x] Approved company profile, services, client list, operations, certification and contact content in Indonesian and English
- [x] WhatsApp inquiry contact flow and bilingual privacy, terms, and cookie pages
- [x] Metadata, robots, sitemap, and language alternates; careers/news stay unpublished and noindex
- [x] 404, 500 and loading states
- [ ] Vacancies, articles and certification evidence asset
- [ ] Structured data after verified company/domain details are available

## Phase 5 — CMS and backend

- [x] Prisma schema for content, translations, RBAC, sessions, throttling, submissions, media and audit records
- [x] Prisma schema validation, client generation and initial migration generation (not applied)
- [x] Safe system role/permission seed script (no account or demo content)
- [x] Scrypt password hashing, generic login responses and email-keyed login throttling
- [x] Opaque DB sessions, secure cookie settings, login/logout audit events
- [x] Server-side permission helper and protected dashboard permission check
- [x] Admin login, protected empty dashboard, and one-time first-admin bootstrap CLI
- [ ] Project PostgreSQL connection and initial migration applied
- [ ] Password recovery/invitations, MFA and trusted-edge/IP-level abuse controls
- [ ] CRUD modules and per-module/API authorization
- [ ] Translation workflow, content previews and publication controls
- [ ] Media library and private file handling
- [ ] Contact/application persistence, notifications and retention policy

## Phase 6 — QA and release

- [x] TypeScript check
- [x] Eight unit checks covering locale/routes, approved profile/contact data, password hashing and permission checks
- [x] Production build
- [x] Public/admin route and asset smoke checks, production indexing rules, HTTPS vhost, and security headers
- [x] Isolated `papcorp-web` service, domain vhost, TLS certificate, and graceful Nginx reload
- [x] Prisma schema validation and client generation
- [x] Dependency audit (0 reported vulnerabilities with the current lockfile)
- [ ] Database-backed login/session/RBAC integration tests
- [ ] API/CMS/E2E tests
- [ ] Accessibility and responsive manual verification
- [ ] Security/privacy review and performance/browser/mobile review
- [ ] Staging/production deployment, backup and restore drill
- [ ] Company content verification and final design review

## Blockers / pending inputs

- The approved Company Profile 2026 provides profile/positioning, services, operating methodology, clients, ISO certificate details, director phone/WhatsApp, and office addresses. Office photography, social links, active vacancies/news, and additional certification evidence are not included.
- Project infrastructure: PostgreSQL connection, private object storage, transactional email, secret management, analytics choice, data-retention approval, and CMS owner/admin identities.
- The contact form opens WhatsApp with a prepared message and does not persist information on the site. Application forms remain inactive until a verified destination, secure persistence, privacy notice, file storage and notification workflow are configured.
- Prisma is pinned to 6.12.0 because newer tested Prisma CLI dependency chains reported high-severity advisories. Re-evaluate and upgrade when a patched release can be validated; see ADR-004.

## Next tasks

1. Configure project PostgreSQL, apply the reviewed migration, seed roles, and create the first admin through the guarded bootstrap command.
2. Continue CMS CRUD modules, module-level permissions, reset/MFA flows, content preview/publish workflow, and private media handling.
3. Supply approved careers/news content and real office/certification imagery before publishing those sections.
4. Complete database-backed auth/API/CMS tests and security, accessibility, responsive, SEO, and end-to-end verification before production release.
