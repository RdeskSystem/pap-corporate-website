# ADR-004: Prisma Toolchain Security Pin

- **Status:** Accepted provisionally; review before production
- **Date:** 2026-09-25

## Context

The initial Prisma 7.10.0 and Prisma 6.19.3 toolchain selections both produced high-severity dependency findings in `npm audit`, involving the Prisma configuration/deep-merge dependency chain. Prisma 6.12.0 validated the schema and generated a client with zero reported vulnerabilities in the lockfile at implementation time.

## Decision

Pin both `prisma` and `@prisma/client` to 6.12.0 for this foundation and record the audit result. Do not apply a forced major downgrade automatically. Reassess the supported Prisma release line and security advisories before production; upgrade once the dependency chain is patched and schema/client compatibility has been tested.

## Consequences

- The current lockfile passes `npm audit` and the Prisma schema validates.
- This is a provisional security/tooling choice, not a statement that this version should be used indefinitely.
- Any upgrade must run schema validation, client generation, typecheck, migration review, tests, and a fresh dependency audit.
