# API Specification

## Conventions

- JSON APIs use stable, versionable contracts, schema validation, consistent errors, and appropriate HTTP status codes.
- Public reads expose only published content and safe fields. Admin endpoints require a valid server session and permission check on every request.
- Public POSTs require server-side validation, abuse controls, consent handling, and private persistence. Do not acknowledge successful receipt until durable storage succeeds.

## Planned public endpoints

| Method / route | Purpose | Status |
|---|---|---|
| `GET /api/services` | Published, verified services by locale | Planned |
| `GET /api/services/:slug` | Service detail | Planned |
| `GET /api/articles` | Published articles/search/pagination | Planned |
| `GET /api/articles/:slug` | Article detail | Planned |
| `GET /api/careers` | Open, verified jobs | Planned |
| `GET /api/careers/:slug` | Job detail | Planned |
| `POST /api/contact` | Validated B2B inquiry | Blocked on approved contact workflow, DB, email and privacy text |
| `POST /api/career/applications` | Private, validated application and CV | Blocked on HR workflow, private storage, DB and privacy text |

## Planned admin endpoint groups

`/api/admin/pages`, `services`, `articles`, `jobs`, `media`, `users`, `settings`, `contacts`, `applications`, and `audit-logs`; CRUD methods are permission-scoped. List routes support pagination, search, filters, and deterministic sorting. Publish routes record actor, timestamp, and audit event.

## Response shape

Success: `{ "data": ..., "meta": ... }` where pagination applies. Error: `{ "error": { "code": "...", "message": "...", "fields": ... } }`. Never return stack traces, private CV URLs, secrets, internal identifiers not required by the client, or raw database errors.

## Validation/security

Use typed request schemas, output encoding, size limits, rate limits for public mutations/login, honeypot or equivalent spam controls, CSRF protection where cookie-authenticated mutations require it, and server authorization. APIs are specified but not yet implemented.
