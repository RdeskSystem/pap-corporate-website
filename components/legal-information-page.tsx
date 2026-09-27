import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { legalCopy, type LegalSlug } from "@/lib/legal-copy";
import { copy, routeFor, type Locale, type PageSlug } from "@/lib/site-content";

export function isLegalInformationSlug(slug: PageSlug): slug is LegalSlug {
  return ["privacy-policy", "terms", "cookie-policy"].includes(slug);
}

export function LegalInformationPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: LegalSlug;
}) {
  const page = copy[locale].pages[slug];
  const document = legalCopy[locale][slug];
  const isIndonesian = locale === "id";

  return (
    <SiteShell locale={locale} currentSlug={slug}>
      <section className="page-hero">
        <div className="content-width page-hero__inner">
          <p className="eyebrow"><span className="eyebrow__line" />{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="page-hero__description">{document.summary}</p>
          <div className="breadcrumb" aria-label={isIndonesian ? "Lokasi" : "Breadcrumb"}>
            <Link href={routeFor(locale, "home")}>{isIndonesian ? "Beranda" : "Home"}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.navLabel}</span>
          </div>
        </div>
      </section>

      <article className="legal-content content-width">
        <p className="legal-content__effective-date">{document.effectiveDate}</p>
        {document.sections.map((section, index) => (
          <section className="legal-content__section" key={section.heading}>
            <span className="legal-content__number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && (
                <ul>
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          </section>
        ))}
      </article>

      <section className="page-next-step">
        <div className="content-width page-next-step__inner">
          <p>{isIndonesian ? "Untuk pertanyaan mengenai privasi atau penggunaan situs, hubungi PAP." : "For questions about privacy or website use, contact PAP."}</p>
          <Link className="text-link" href={routeFor(locale, "contact")}>
            {copy[locale].pages.contact.navLabel}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
