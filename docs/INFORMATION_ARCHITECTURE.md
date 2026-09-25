# Information Architecture

## Public routes

| Indonesian (default) | English | Purpose |
|---|---|---|
| `/` | `/en` | Overview and primary partnership CTA |
| `/about` | `/en/about` | Company profile, purpose, values, people, timeline |
| `/services` | `/en/services` | Verified service catalogue and service detail pages |
| `/industries` | `/en/industries` | Editorial industry pages; no implied client coverage |
| `/operations` | `/en/operations` | Approved operating methodology and reporting |
| `/compliance` | `/en/compliance` | Responsible operations, privacy, governance, verified certificates |
| `/careers` | `/en/careers` | Verified vacancies, details, applications |
| `/news` and `/news/[slug]` | `/en/news` and `/en/news/[slug]` | Published insights and articles |
| `/contact` | `/en/contact` | Verified contact channels and business inquiry |
| `/privacy-policy` | `/en/privacy-policy` | Approved privacy notice |
| `/terms` | `/en/terms` | Approved terms |
| `/cookie-policy` | `/en/cookie-policy` | Cookie information where applicable |

## Navigation

Primary navigation follows the supplied brief: Home, About, Services, Industries, Operations, Compliance, Career, News, Contact. Header CTA is “Partner With Us” / “Jadilah Mitra Kami”. Mobile navigation must be keyboard-operable, dismissible, and announce its expanded state.

## Homepage hierarchy

1. Hero and primary/secondary CTA
2. Company introduction
3. Core services
4. Operational capability
5. How we work
6. Technology and reporting
7. Compliance and responsible operations
8. Industries
9. People and careers
10. News / insights
11. Partner CTA
12. Footer with company, navigation, contact, social and legal links

## Conversion paths

- B2B visitor → service/operations information → Contact/Partner inquiry.
- Candidate → Careers listing → job detail → secure application.
- Editor → `/admin` login → assigned module → draft/review/publish.

## Admin routes

- `/admin/login` — sign-in for provisioned accounts.
- `/admin_console` — convenience redirect to `/admin/login`.
- `/admin` — protected dashboard, currently an empty foundation shell.
- `/admin/forbidden` — authenticated account without the required permission.
- Content modules remain disabled until database migrations, module APIs, and per-module authorization are implemented.

## Editorial rule

Routes and page structure can be prepared now. Corporate facts, detailed service pages, actual industry coverage, named people, news, vacancies, contacts, and legal text are content dependencies and must remain pending until approved source information is provided.
