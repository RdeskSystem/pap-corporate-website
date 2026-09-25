import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import {
  copy,
  routeFor,
  siteConfig,
  type Locale,
} from "@/lib/site-content";

export function HomePage({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const home = text.home;

  return (
    <SiteShell locale={locale} currentSlug="home">
      <section className="hero-section">
        <div className="hero-grid content-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow__line" />{home.eyebrow}</p>
            <h1>{home.title}</h1>
            <p className="hero-copy__lead">{home.description}</p>
            <div className="hero-actions">
              <Link className="button button--primary" href={routeFor(locale, "about")}>
                {home.primaryCta}<span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href={routeFor(locale, "contact")}>
                {home.secondaryCta}<span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-assurance">
              <span className="hero-assurance__mark" aria-hidden="true">✓</span>
              <span>{locale === "id" ? "Mengutamakan informasi yang akurat dan terverifikasi" : "Committed to accurate, verified information"}</span>
            </div>
          </div>

          <div className="hero-art" role="group" aria-label={home.visualLabel}>
            <div className="hero-art__orbit hero-art__orbit--one" />
            <div className="hero-art__orbit hero-art__orbit--two" />
            <div className="hero-art__corner-label">PAP <span> / </span> {locale === "id" ? "KOLABORASI" : "COLLABORATION"}</div>
            <div className="hero-art__mark-card">
              <span className="hero-art__mark-caption">{home.visualLabel}</span>
              <Image src={siteConfig.logoPath} width={84} height={84} alt="" priority />
              <strong>{home.visualTitle}</strong>
            </div>
            <div className="hero-art__steps">
              {home.visualSteps.map((step, index) => (
                <div className="hero-art__step" key={step}>
                  <span className="hero-art__step-number">0{index + 1}</span>
                  <span>{step}</span>
                  {index < home.visualSteps.length - 1 && <span className="hero-art__step-rule" aria-hidden="true" />}
                </div>
              ))}
            </div>
            <span className="hero-art__footnote">{locale === "id" ? "GAMBARAN KONSEPTUAL" : "CONCEPTUAL OVERVIEW"}</span>
          </div>
        </div>
        <div className="hero-bottom content-width">
          <span>{locale === "id" ? "INFORMASI RESMI SEDANG DISIAPKAN" : "OFFICIAL INFORMATION IN PREPARATION"}</span>
          <span className="hero-bottom__rule" />
          <span>01 — 04</span>
        </div>
      </section>

      <section className="intro-section section-pad content-width">
        <div className="section-index"><span>01</span><span className="section-index__line" /></div>
        <div className="intro-section__copy">
          <p className="eyebrow">{home.introEyebrow}</p>
          <h2>{home.introTitle}</h2>
        </div>
        <div className="intro-section__aside">
          <p>{home.introBody}</p>
          <Link className="text-link" href={routeFor(locale, "about")}>
            {locale === "id" ? "Tentang perusahaan" : "About the company"}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="explore-section section-pad">
        <div className="content-width">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">{home.exploreEyebrow}</p>
              <h2>{home.exploreTitle}</h2>
            </div>
            <p>{home.exploreBody}</p>
          </div>
          <div className="service-status-panel">
            <span className="service-status-panel__number">01</span>
            <div>
              <p className="service-status-panel__state"><i aria-hidden="true" />{locale === "id" ? "MENUNGGU KONFIRMASI" : "AWAITING CONFIRMATION"}</p>
              <h3>{text.pages.services.statusTitle}</h3>
              <p>{text.pages.services.statusBody}</p>
            </div>
            <Link className="button button--outline" href={routeFor(locale, "services")}>
              {text.pages.services.navLabel}<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="content-width">
          <div className="process-section__heading">
            <p className="eyebrow eyebrow--light">{home.processEyebrow}</p>
            <h2>{home.processTitle}</h2>
            <p>{home.processBody}</p>
          </div>
          <ol className="process-flow">
            {home.processSteps.map((step, index) => (
              <li className="process-flow__step" key={step}>
                <span className="process-flow__number">0{index + 1}</span>
                <strong>{step}</strong>
                {index < home.processSteps.length - 1 && <span className="process-flow__connector" aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
          <p className="process-note"><span aria-hidden="true">i</span>{home.processNote}</p>
        </div>
      </section>

      <section className="technology-section section-pad">
        <div className="technology-section__inner content-width">
          <div className="technology-section__copy">
            <p className="eyebrow">{home.technologyEyebrow}</p>
            <h2>{home.technologyTitle}</h2>
            <p>{home.technologyBody}</p>
            <Link className="text-link" href={routeFor(locale, "operations")}>
              {home.technologyCta}<span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="reporting-mock" role="group" aria-label={home.technologyLabel}>
            <div className="reporting-mock__topbar">
              <span className="reporting-mock__lights" aria-hidden="true"><i /><i /><i /></span>
              <span>{home.technologyLabel}</span>
              <span className="reporting-mock__mark" aria-hidden="true">P</span>
            </div>
            <div className="reporting-mock__body">
              <div className="reporting-mock__title">
                <span>{locale === "id" ? "GAMBARAN LAPORAN" : "REPORT OVERVIEW"}</span>
                <span>{locale === "id" ? "KONSEP" : "CONCEPT"}</span>
              </div>
              {[0, 1, 2].map((row) => (
                <div className="reporting-mock__row" key={row}>
                  <span className="reporting-mock__row-mark" aria-hidden="true" />
                  <span className="reporting-mock__row-line" aria-hidden="true" />
                  <span className="reporting-mock__row-value" aria-hidden="true">—</span>
                </div>
              ))}
              <div className="reporting-mock__empty">{home.technologyFootnote}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="assurance-section section-pad content-width">
        <div className="assurance-section__symbol" aria-hidden="true">P</div>
        <div className="assurance-section__copy">
          <p className="eyebrow">{text.pages.compliance.eyebrow}</p>
          <h2>{text.pages.compliance.title}</h2>
          <p>{text.pages.compliance.statusBody}</p>
        </div>
        <Link className="button button--outline" href={routeFor(locale, "compliance")}>
          {locale === "id" ? "Pelajari pendekatan" : "Explore our approach"}<span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="discovery-section section-pad">
        <div className="content-width">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">{home.discoveryEyebrow}</p>
              <h2>{home.discoveryTitle}</h2>
            </div>
            <p>{home.discoveryBody}</p>
          </div>
          <div className="discovery-grid">
            {(["industries", "careers", "news"] as const).map((slug, index) => {
              const page = text.pages[slug];
              return (
                <article className="discovery-card" key={slug}>
                  <div className="discovery-card__meta">
                    <span>0{index + 1}</span>
                    <span className="discovery-card__status"><i aria-hidden="true" />{locale === "id" ? "SEGERA DIPERBARUI" : "UPDATES TO FOLLOW"}</span>
                  </div>
                  <p className="eyebrow">{page.eyebrow}</p>
                  <h3>{page.title}</h3>
                  <p className="discovery-card__body">{page.statusBody}</p>
                  <Link className="text-link" href={routeFor(locale, slug)}>
                    {page.navLabel}<span aria-hidden="true">→</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-section__inner content-width">
          <div>
            <p className="eyebrow eyebrow--light">{home.closingEyebrow}</p>
            <h2>{home.closingTitle}</h2>
            <p>{home.closingBody}</p>
          </div>
          <Link className="button button--light" href={routeFor(locale, "contact")}>
            {home.closingCta}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
