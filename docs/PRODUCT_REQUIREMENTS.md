# Product Requirements

## Product

A credible, responsive corporate website and managed-content platform for PT Pelita Anugrah Perkasa (PAP), serving Indonesian and English-speaking B2B visitors. The first release must communicate the company's verified identity and provide a clear path to partnership inquiries without inventing company claims.

## Audiences

- Prospective business partners evaluating operational fit.
- Candidates exploring verified vacancies.
- Editors maintaining corporate content in Indonesian and English.
- Administrators managing users, inquiries, media, and publication workflows.

## Outcomes

1. Explain PAP's verified organization, services, approach, and contact options.
2. Make partnership inquiry the primary conversion path.
3. Provide maintainable bilingual public content and safe editorial workflows.
4. Meet responsive, accessibility, SEO, privacy, and security requirements.

## Public-site requirements

- Navigation: Home, About, Services, Industries, Operations, Compliance, Careers, News, Contact; primary CTA: Partner With Us.
- Homepage sections: hero, company introduction, services, operational capability, process, technology/reporting, responsible operations, industries, people/careers, news, partnership CTA, and footer.
- Public pages: `/`, `/about`, `/services`, `/industries`, `/operations`, `/compliance`, `/careers`, `/news`, `/contact`, and legal pages. English equivalents are under `/en`.
- Job and article listings must be CMS-driven. Empty states are preferable to fictional/demo content on public pages.
- Contact and application forms require server-side validation and private persistence before accepting real personal data.

## CMS requirements

Protected admin workspace with dashboard, content CRUD, drafts/review/publish scheduling, bilingual translation status, media metadata, leads, applications, site settings, granular RBAC, and audit history. Demo records must be clearly marked and never publish by default.

## Non-functional requirements

- WCAG 2.2 AA target; keyboard access, semantic markup, visible focus, reduced motion, and labeled forms.
- Secure server-side authorization, validated inputs, safe file handling, secret management, and auditability.
- Fast server-rendered public pages; responsive from 320 px; no horizontal overflow.
- SEO metadata, canonical URLs, sitemap, robots policy, and only truthful structured data.

## Known data dependencies

Awaiting the company document: official company profile and approved positioning; verified service/industry scope; contact person, email, phone/WhatsApp, address, business hours and map; approved leadership/team; actual vacancies/news; privacy/legal wording; certifications and supporting evidence; social links and official domain. Until received, these items remain unpublished or visibly identified as pending review.

## Acceptance gate

No public factual claim, contact endpoint, certificate, client/partner reference, statistic, company location, team biography, vacancy, or business-sector coverage may be published without an approved source. Production acceptance additionally requires backend, security, accessibility, responsive, SEO, and cross-browser checks.
