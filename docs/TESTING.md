# Testing Strategy

## Required coverage

- Unit tests for domain rules, content projections, locale resolution and validation.
- API tests for public reads, contact/application validation, consistent errors, abuse limits and persistence.
- Authentication and authorization tests for every role/permission boundary.
- CMS CRUD, publication, schedule, audit, media and translation workflow tests.
- E2E critical flows: admin login; create/edit/publish page; create service/article/job; contact inquiry; career application; language switching.
- Responsive and accessibility checks for navigation, forms, key content routes and admin tasks.

## Quality checks

Typecheck and production build are required on every meaningful change. Test at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 px. Review Chrome and Firefox; Edge/Safari where available. Check broken links/images, console/API errors, SEO metadata, keyboard/focus, reduced motion, and form behavior.

## Data and safety

Use isolated test DB/storage and synthetic records. Never use real candidate/contact data in tests. Mark demo records and keep them unpublished. Security tests must verify server-side authorization rather than UI visibility alone.

## Current status

The initial application passes TypeScript checking, seven unit checks for locale coverage, route mapping, contact placeholders, password hashing, malformed hashes and permission checks, plus a production build. Smoke checks verified the HTTPS domain vhost/TLS, HTTP-to-HTTPS redirect, `/admin_console` alias, public assets, unauthenticated admin redirect, noindex preview gate, and security headers. Prisma schema validation and client generation passed; `npm audit` reports zero vulnerabilities with the current lockfile. Auth/database integration tests, API/RBAC/CMS/E2E tests and manual accessibility/browser/responsive reviews remain pending.
