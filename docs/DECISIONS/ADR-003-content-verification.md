# ADR-003: Verification Before Publication

- **Status:** Accepted
- **Date:** 2026-09-25

## Context

The site represents a real company, while verified corporate details have not yet been supplied. The project brief explicitly warns against invented services, client claims, team information, figures, certificates, legal status, and contact details.

## Decision

Treat the project brief as product/design direction, not evidence that a service, client, certification, location, statistic, or operational capability exists. Keep unconfirmed content unpublished; require a recorded source/reviewer for factual claims and certificates. Do not create fake public demo content. Keep contact/application collection disabled until storage, notification, consent and privacy requirements are configured.

## Consequences

- Layout, localization, design system, content schema and empty states can be prepared before company data arrives.
- Some public sections may remain neutral/empty pending review.
- Content verification is a release criterion and must be reflected in CMS workflow and QA.
