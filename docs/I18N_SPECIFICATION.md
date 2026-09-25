# Internationalization Specification

- Supported locales: `id` (default) and `en`.
- Indonesian routes are canonical at `/...`; English uses `/en/...`. The root route is Indonesian, not a locale redirect.
- Navigation, UI labels, validation messages, email templates and content have human-reviewed ID and EN versions.
- Every translatable entity has separate locale records and status: `MISSING`, `DRAFT`, `REVIEW`, `PUBLISHED`. A language switcher must not silently route to an unpublished/missing translation; direct the visitor to the corresponding available page or show a clear fallback.
- Preserve the translated route's canonical URL, `hreflang` alternates, locale metadata, date/number formatting, and localized SEO/OG text.
- Store locale in content records, not in duplicated entity tables. UI strings live in typed dictionaries; editorial copy lives in managed content.
- Do not publish machine translation without editor review. Translation preview is available for desktop/tablet/mobile and ID/EN.
