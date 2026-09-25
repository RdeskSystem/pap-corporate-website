# ADR-002: Bilingual Structured Content

- **Status:** Accepted
- **Date:** 2026-09-25

## Context

The public site requires Indonesian as default and English under `/en`. Editors must manage translations manually, see missing translations, and publish language variants independently.

## Decision

Use shared content entities with separate locale-specific translation records and structured, versioned page blocks. Keep UI strings in typed locale dictionaries. Use root-level Indonesian URLs and `/en/...` English URLs. Track translation workflow independently from overall entity workflow.

## Consequences

- Shared entities avoid duplicated business records, while translations remain editable and auditable.
- Public route/query logic must handle missing or unpublished translations without silently displaying machine-generated or misleading text.
- Canonical and `hreflang` metadata must reflect actually published variants.
