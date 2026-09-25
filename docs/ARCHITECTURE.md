# Architecture

## Discovery snapshot

- The workspace was greenfield: no application source, package manifest, database, authentication, deployment configuration, or existing design system was present.
- Available project inputs at discovery were the original source brief (kept local, not published) and the supplied symbol logo at `assets/logo_pap.png` (3375 × 3375 PNG with transparency). The supplied image is the canonical mark and must not be redesigned.
- Company contact details, verified service descriptions, leadership, locations, certifications, and other corporate facts are pending a separate company document.

## Target architecture

Adopt a modular Next.js App Router application using React and TypeScript. Use server-rendered public pages, reusable React components, and CSS design tokens. Keep content access behind server-side repositories so that the first site can use safe seed content and the CMS can later use PostgreSQL without coupling page components to storage details.

The current application foundation uses Next.js 16.3.6, React 19.3.0, TypeScript, and PostgreSQL schema tooling with Prisma. Prisma CLI/client versions are pinned to 6.12.0 after the dependency audit; see [ADR-004](DECISIONS/ADR-004-prisma-toolchain.md) and re-evaluate before a production upgrade.

```text
Browser
  └── Next.js public routes (ID at /, EN at /en)
       ├── shared components and typed content contracts
       ├── public read services (published, verified content only)
       └── admin routes and server actions/API (authenticated, RBAC checked)
            ├── content / media / inquiry services
            ├── audit logging
            └── Prisma → PostgreSQL

Private object storage ← validated media and application documents
Email provider       ← transactional notifications
```

## Boundaries

- **Public web:** Indonesian is the default. English pages use `/en/...`. Public queries return published content only; factual items additionally require editorial verification.
- **CMS:** `/admin` is a protected workspace. Authentication and authorization must be enforced on the server for every read or mutation. Public forms must not be treated as CMS APIs.
- **Content:** bilingual fields are related translation records with explicit translation and publication status. Structured blocks are preferred over arbitrary HTML/page-builder code.
- **Data:** PostgreSQL with Prisma. Contact submissions and job applications are private records; CVs live in private object storage and are never exposed as public URLs.
- **Integrations:** CRM, internal operational platforms, WhatsApp, telephony, analytics, and BI remain behind adapters and are not directly connected to public routes.

## Implementation status

The public bilingual route shell, responsive design system, metadata foundations, generated brand icons/social artwork, Prisma data schema and initial SQL migration, generated client, role/permission seed, and initial admin login/session/RBAC foundation now exist. The database migration has not been applied and no admin account has been created. Content CRUD, password recovery, MFA, media storage, inquiry APIs, and integrations remain unimplemented. Public pages contain explicit pending states; production publishing is gated on company review and backend/security configuration.

## Related decisions

- [ADR-001 — Greenfield stack](DECISIONS/ADR-001-greenfield-stack.md)
- [ADR-002 — Bilingual structured content](DECISIONS/ADR-002-bilingual-content.md)
- [ADR-003 — Verification before publication](DECISIONS/ADR-003-content-verification.md)
- [ADR-004 — Prisma toolchain security pin](DECISIONS/ADR-004-prisma-toolchain.md)
