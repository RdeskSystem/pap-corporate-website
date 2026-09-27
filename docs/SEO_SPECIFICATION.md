# SEO Specification

## Per-page metadata

Support title, meta description, canonical URL, OpenGraph title/description/image, Twitter/X card, robots directives, locale alternates, and optional sitemap priority. Metadata should derive from approved content with safe defaults; no duplicate or invented claims.

## Technical outputs

Generate `/sitemap.xml` from canonical published pages/content and `/robots.txt` from environment-aware policy. Admin and preview routes are noindex. Add redirect management with source, destination, 301/302, and loop validation.

The app has metadata, locale alternates, manifest, robots and sitemap route foundations. Sitemap/absolute social metadata require the approved `NEXT_PUBLIC_SITE_URL`. `PUBLICATION_APPROVED=true` is also required before robots allow indexing or the sitemap lists routes; otherwise the site is noindex and disallowed. The approved company profile is published in the site copy, while legal pages remain pending and the indexing gate stays closed. Structured data and redirect management remain pending.

## Structured data

Use only supported, verified `Organization`, `WebSite`, `BreadcrumbList`, `Article`, and `JobPosting` markup. `LocalBusiness` requires a verified public address and approved details. Never invent ratings, aggregate counts, clients, locations, vacancies, or certifications.

## Content

Use clean localized URLs and natural Indonesian/English language. Target relevant themes from the project brief only after service scope is verified; avoid keyword stuffing. Images require useful alt text and appropriate dimensions. No fake content is seeded into public listings.

## Current dependency

The company domain, contact/location, service scope, and company description are supplied by the approved Company Profile 2026. Legal policy copy, articles, job content, structured data, and final indexing approval remain pending.
