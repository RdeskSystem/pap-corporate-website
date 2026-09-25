# ADR-001: Greenfield Stack

- **Status:** Accepted as the project baseline
- **Date:** 2026-09-25

## Context

Repository inspection found no application or framework to preserve. The product needs bilingual server-rendered public pages plus a protected CMS, APIs, relational content storage, and future integration boundaries.

## Decision

Use Next.js App Router with React and TypeScript for the application. Use reusable CSS tokens/components rather than adopting a large UI framework before the design is established. Target PostgreSQL with Prisma for relational persistence. Keep auth, storage and email behind replaceable adapters; select providers when deployment requirements are supplied.

## Consequences

- One codebase can serve public routes, protected admin routes and APIs while preserving server-side authorization boundaries.
- Static/server-rendered public routes can be developed before the database and external services are available.
- No data/backend capability is implied by the selection; PostgreSQL, Prisma migrations, authentication, storage, mail and tests remain implementation work.
- Revisit versions and providers during bootstrap/deployment if compatibility or security requirements change.
