# Content Model

## Common content envelope

Content entities share `id`, `slug` where relevant, `status`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`, optional `publishedAt`, `scheduledAt`, and `deletedAt`. Each locale-specific record stores `locale` (`id` or `en`), translation status, localized fields, and optional review metadata. Untranslated fields are explicitly missing; translations are human-editable.

## Entities

- **Page:** slug, template, page status, ordered structured blocks, SEO relation.
- **PageBlock:** type, order, data/schema version; supported types include Hero, Rich Text, Image, Image + Text, Feature Grid, Service Grid, Stats, Timeline, Process, Logo Grid, Testimonial, FAQ, CTA, Contact Form, News Grid, Career Grid, Video, Accordion, Quote, Gallery.
- **Service:** short/long copy, benefits, capabilities, process, related industries, FAQ, hero/OG media, enabled flag, SEO.
- **Industry / Operation:** overview, challenges/capabilities or operating steps, CTA, SEO; industry association is not proof of client coverage.
- **Certification:** name, issuer, number, issue/expiry dates, private document, verification status and evidence/reviewer.
- **TeamMember / Leadership:** approved name, role, biography, portrait and display order.
- **Job / Application:** position, department, location, employment type, description, responsibilities, requirements, benefits, deadline/status; candidate details, consent and private CV reference.
- **Article:** title, slug, excerpt/body, author relation, category/tags, cover media, publish time, status, reading time and SEO.
- **Media / Partner / Testimonial / ContactSubmission / Navigation / SiteSetting / SEO / Redirect / AuditLog.** Each has permissions, ownership and retention appropriate to its sensitivity.

## Publication and verification

Publication state and factual verification are separate concerns. Public projections expose approved/published fields only. Items that are pending company review are drafts and never public, even when a page itself is published. Demo records carry an explicit demo flag and are excluded from production seeds.
