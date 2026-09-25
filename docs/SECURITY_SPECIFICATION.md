# Security Specification

## Required controls

- Validate all inputs server-side; encode output and sanitize rich content according to a strict allowlist.
- Use parameterized ORM queries, secure headers, restrictive CSP where practical, and CSRF protection for cookie-authenticated mutations.
- Store secrets only in environment/secret management. Never expose database, auth, SMTP, or storage credentials to the browser or commit them.
- Admin authentication requires password hashing, secure session lifecycle/cookies, expiry, reset controls, rate limiting/brute-force protections, and optional MFA where available.
- Enforce granular authorization on the server, not just in UI. Record significant content, account, settings, media, and publication actions in audit logs.
- Public forms require validation, rate limits, spam controls, consent, privacy notice, secure persistence and safe notification handling.
- File uploads require extension/MIME/content checks, size limits, generated storage keys, private storage, malware scanning where supported, and sanitized SVG or disabled SVG uploads. CV files must never be publicly addressable.

## Data handling

Minimize personal data; define purpose, access, retention, deletion, backup and incident procedures before production collection. Mask sensitive data in logs. IP capture is optional and only where lawful/necessary. Contact and application details are never included in public APIs or analytics payloads.

## Release gates

No production admin or personal-data form may be activated until authentication, authorization, storage, rate limiting, retention, privacy wording, and security tests are implemented. No real secrets are available in this greenfield workspace.

## Current implementation

Baseline response headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, restrictive `Permissions-Policy`, and HSTS at the Nginx edge) are configured. The public preview collects no personal data. The admin foundation has scrypt password hashes, 12-hour opaque DB sessions (only the token hash is stored), HttpOnly/SameSite=Strict cookies, noindex admin pages, generic login errors, a hashed-email throttle (five failures per 15-minute window; throttle rows expire after 24 hours), server-side dashboard permission checks, and login/logout audit records. `AUTH_SECRET` must be at least 32 bytes for the throttle key. No admin content modules or public forms are enabled. Password reset, MFA, CSP review, project DB connection, proxy/IP-level abuse controls, upload handling, full module authorization tests, and retention procedures remain pending.
