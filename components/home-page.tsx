import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { ClientMarquee } from "@/components/client-marquee";
import { companyProfile } from "@/lib/company-profile";
import { routeFor, siteConfig, type Locale } from "@/lib/site-content";

export function HomePage({ locale }: { locale: Locale }) {
  const profile = companyProfile[locale];

  return (
    <SiteShell locale={locale} currentSlug="home">
      <section className="hero-section profile-home-hero">
        <div className="hero-grid content-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow__line" />{profile.heroEyebrow}</p>
            <h1>{profile.heroTitle}</h1>
            <p className="hero-copy__lead">{profile.heroDescription}</p>
            <div className="hero-actions">
              <Link className="button button--primary" href={routeFor(locale, "about")}>
                {locale === "id" ? "Tentang PAP" : "About PAP"}<span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href={routeFor(locale, "contact")}>
                {locale === "id" ? "Hubungi kami" : "Contact us"}<span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-assurance">
              <span className="hero-assurance__mark" aria-hidden="true">✓</span>
              <span>{locale === "id" ? "Profesionalisme · Integritas · Inovasi" : "Professionalism · Integrity · Innovation"}</span>
            </div>
          </div>

          <div className="hero-art profile-home-art" role="group" aria-label={profile.heroVisualLabel}>
            <div className="hero-art__orbit hero-art__orbit--one" />
            <div className="hero-art__orbit hero-art__orbit--two" />
            <div className="hero-art__corner-label">PAP <span> / </span> {locale === "id" ? "PROFIL 2026" : "PROFILE 2026"}</div>
            <div className="hero-art__mark-card">
              <span className="hero-art__mark-caption">{profile.heroVisualLabel}</span>
              <Image src={siteConfig.logoPath} width={84} height={84} alt={`${siteConfig.companyName} logo`} priority />
              <strong>{profile.heroVisualTitle}</strong>
            </div>
            <div className="hero-art__steps">
              {profile.heroVisualSteps.map((step, index) => (
                <div className="hero-art__step" key={step}>
                  <span className="hero-art__step-number">0{index + 1}</span>
                  <span>{step}</span>
                  {index < profile.heroVisualSteps.length - 1 && <span className="hero-art__step-rule" aria-hidden="true" />}
                </div>
              ))}
            </div>
            <span className="hero-art__footnote">{siteConfig.companyName}</span>
          </div>
        </div>
        <div className="hero-bottom content-width">
          <span>{locale === "id" ? "LAYANAN OPERASIONAL & COLLECTION" : "OPERATIONAL & COLLECTION SERVICES"}</span>
          <span className="hero-bottom__rule" />
          <span>2026</span>
        </div>
        <div
          className="profile-stat-strip content-width"
          role="group"
          aria-label={locale === "id" ? "Fakta perusahaan" : "Company facts"}
        >
          <article>
            <strong>{profile.employeeStat}</strong>
            <span>{locale === "id" ? "Karyawan bersertifikasi SPPI & AFPI" : "Employees certified by SPPI & AFPI"}</span>
          </article>
          <article>
            <strong>{String(profile.services.length).padStart(2, "0")}</strong>
            <span>{locale === "id" ? "Layanan utama" : "Core services"}</span>
          </article>
          <article>
            <strong>{String(profile.clients.length).padStart(2, "0")}</strong>
            <span>{locale === "id" ? "Klien tercantum di profil" : "Clients listed in the profile"}</span>
          </article>
          <article>
            <strong>ISO/IEC 27001:2022</strong>
            <span>{locale === "id" ? "Keamanan informasi" : "Information security"}</span>
          </article>
        </div>
      </section>

      <section className="intro-section section-pad content-width profile-home-intro">
        <div className="section-index"><span>01</span><span className="section-index__line" /></div>
        <div className="intro-section__copy">
          <p className="eyebrow">{profile.aboutEyebrow}</p>
          <h2>{profile.aboutTitle}</h2>
        </div>
        <div className="intro-section__aside">
          <p>{profile.aboutBody}</p>
          <Link className="text-link" href={routeFor(locale, "about")}>
            {profile.learnMore}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="explore-section section-pad profile-home-services">
        <div className="content-width">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">{locale === "id" ? "LAYANAN" : "SERVICES"}</p>
              <h2>{profile.servicesTitle}</h2>
            </div>
            <p>{profile.aboutBodySecondary}</p>
          </div>
          <div className="profile-grid profile-grid--services">
            {profile.services.map((service, index) => (
              <article className="profile-card profile-card--service" key={service.name}>
                <span className="profile-card__index">0{index + 1}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <Link className="text-link profile-home-link" href={routeFor(locale, "services")}>
            {profile.learnMore}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="process-section section-pad profile-home-process">
        <div className="content-width profile-home-process__inner">
          <div className="process-section__heading">
            <p className="eyebrow eyebrow--light">{profile.processTitle}</p>
            <h2>{profile.systemsTitle}</h2>
            <p>{profile.systemsIntro} {profile.systemsClosing}</p>
          </div>
          <div className="profile-grid profile-grid--two profile-home-system-grid">
            {profile.systems.map((system) => (
              <article className="profile-home-system" key={system.name}>
                <h3>{system.name}</h3>
                <p>{system.description}</p>
              </article>
            ))}
          </div>
          <Link className="button button--outline" href={routeFor(locale, "operations")}>
            {locale === "id" ? "Lihat alur collection" : "View collection workflow"}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <ClientMarquee clients={profile.clients} locale={locale} />

      <section className="assurance-section section-pad content-width profile-home-certificate">
        <div className="assurance-section__symbol" aria-hidden="true">ISO</div>
        <div className="assurance-section__copy">
          <p className="eyebrow">{profile.certificationEyebrow}</p>
          <h2>{profile.certificationTitle}</h2>
          <p>{profile.certificationSummary}</p>
        </div>
        <Link className="button button--outline" href={routeFor(locale, "compliance")}>
          {profile.learnMore}<span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="closing-section profile-home-closing">
        <div className="closing-section__inner content-width">
          <div>
            <p className="eyebrow eyebrow--light">{profile.officesTitle}</p>
            <h2>{profile.contactTitle}</h2>
            <p>{profile.contactBody}</p>
            <p className="profile-home-contact">{profile.phone} · {profile.email}</p>
          </div>
          <Link className="button button--light" href={routeFor(locale, "contact")}>
            {profile.contactCta}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
