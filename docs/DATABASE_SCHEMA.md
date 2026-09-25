# Database Schema

## Platform

PostgreSQL is the target relational database; Prisma is the ORM. The schema is implemented at `prisma/schema.prisma`, validated with the Prisma CLI, and the client can be generated. It remains a logical schema until a PostgreSQL instance is configured and reviewed migrations are applied.

## Core model groups

### Identity and governance

- `User`, `Role`, `Permission`, and role/permission join records.
- `Session`, `AuthToken`, and `LoginThrottle` records for hashed opaque sessions, expiring single-use auth tokens, and short-lived login throttling.
- `AuditLog`: actor, action, entity type/ID, timestamp, request metadata where appropriate, and carefully scoped before/after values.

### Content

- `Page` → ordered `PageBlock` records.
- `Service`, `Industry`, `Operation`, `Certification`, `TeamMember`, `Leadership`, `Job`, `Article`, `Category`, `Tag`, `Partner`, `Testimonial`.
- Each translatable entity has related translation rows keyed uniquely by `(entityId, locale)`, with translation and publication status.
- `Media` stores a private storage key, original name, MIME, byte size, dimensions, alt text, caption, credit, and folder/category; binary files are not stored as public DB blobs.
- `SEO` fields are attached to the relevant page/content record or represented as a reusable relation.
- `Navigation`, `SiteSetting`, and `Redirect` are configurable and audited.

### Private submissions

- `ContactSubmission`: company, PIC, business email, phone, industry/service request, message, consent record, status, assignee, timestamps, spam metadata.
- `Application`: candidate details, position relation, consent, workflow status, and private media/document relation for CV/cover letter.
- Retention and deletion rules must be defined before production collection.

## Shared fields and integrity

Content records use UUID/CUID primary keys, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`, and where appropriate `publishedAt`, `scheduledAt`, `deletedAt`, status, and slug. Enforce unique locale/slug constraints and foreign keys. Index slug, status, publishedAt, createdAt, email, category, locale, and common admin filters. Use transactions for multi-record publish/workflow updates.

## Content safety

Use separate verified/approval metadata for factual claims and certifications. Public repository queries filter by publication and verification. Never seed production with fictional clients, people, numbers, awards, certifications, vacancies, or submissions.

## Migration plan

The schema currently includes identity/RBAC/session tokens/login throttles, pages and structured blocks, bilingual services/industries/operations/compliance/team/jobs/articles, media, partners/testimonials, submissions, navigation, settings, redirects and audit records. The initial SQL migration is generated at `prisma/migrations/20260925190000_initial_cms/migration.sql` and has not been applied. A safe seed script creates system roles and permissions only; it creates no account, password, company claim, demo article or public business content. A separate one-time CLI creates the first admin only when the users table is empty. Apply the reviewed migration after a project PostgreSQL instance is configured. Back up database and media together; see [Deployment](DEPLOYMENT.md).
