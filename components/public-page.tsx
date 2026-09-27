import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import {
  isLegalInformationSlug,
  LegalInformationPage,
} from "@/components/legal-information-page";
import {
  CompanyProfilePage,
  isCompanyProfileSlug,
} from "@/components/company-profile-page";
import {
  copy,
  routeFor,
  type Locale,
  type PageSlug,
} from "@/lib/site-content";

export function PublicPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: PageSlug;
}) {
  if (isCompanyProfileSlug(slug)) {
    return <CompanyProfilePage locale={locale} slug={slug} />;
  }
  if (isLegalInformationSlug(slug)) {
    return <LegalInformationPage locale={locale} slug={slug} />;
  }

  const text = copy[locale];
  const page = text.pages[slug];

  return (
    <SiteShell locale={locale} currentSlug={slug}>
      <section className="page-hero">
        <div className="content-width page-hero__inner">
          <p className="eyebrow"><span className="eyebrow__line" />{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="page-hero__description">{page.description}</p>
          <div className="breadcrumb" aria-label={locale === "id" ? "Lokasi" : "Breadcrumb"}>
            <Link href={routeFor(locale, "home")}>{locale === "id" ? "Beranda" : "Home"}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.navLabel}</span>
          </div>
        </div>
      </section>

      <section className="page-content section-pad content-width">
        <div className="page-content__main">
          <p className="eyebrow">{locale === "id" ? "PEMBARUAN KONTEN" : "CONTENT UPDATE"}</p>
          <h2>{page.statusTitle}</h2>
          <p className="page-content__lead">{page.statusBody}</p>
        </div>
        <div className="pending-list" aria-label={locale === "id" ? "Informasi yang akan dilengkapi" : "Information to be completed"}>
          <div className="pending-list__heading">
            <span>{locale === "id" ? "DALAM PERSIAPAN" : "IN PREPARATION"}</span>
            <span className="pending-list__status"><i aria-hidden="true" />{locale === "id" ? "MENUNGGU DATA" : "AWAITING INPUT"}</span>
          </div>
          {page.pendingItems.map((item, index) => (
            <div className="pending-list__item" key={item}>
              <span className="pending-list__number">0{index + 1}</span>
              <span>{item}</span>
              <span className="pending-list__dash" aria-hidden="true">—</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-next-step">
        <div className="content-width page-next-step__inner">
          <p>{locale === "id" ? "Informasi diperbarui setelah sumber resminya ditinjau." : "Information will be updated after its official source has been reviewed."}</p>
          <Link className="text-link" href={routeFor(locale, "home")}>
            {text.backHome}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
