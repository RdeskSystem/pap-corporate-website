import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { ContactIcons } from "@/components/contact-icons";
import { companyProfile } from "@/lib/company-profile";
import { WhatsAppInquiryForm } from "@/components/whatsapp-inquiry-form";
import {
  copy,
  routeFor,
  type Locale,
  type PageSlug,
} from "@/lib/site-content";

export type CompanyProfileSlug =
  | "about"
  | "services"
  | "industries"
  | "operations"
  | "compliance"
  | "contact";

export function isCompanyProfileSlug(slug: PageSlug): slug is CompanyProfileSlug {
  return ["about", "services", "industries", "operations", "compliance", "contact"].includes(slug);
}

export function CompanyProfilePage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: CompanyProfileSlug;
}) {
  const text = copy[locale];
  const page = text.pages[slug];
  const profile = companyProfile[locale];

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

      <div className="profile-content content-width">
        {slug === "about" && (
          <>
            <section className="profile-section profile-section--intro">
              <p className="eyebrow">{profile.aboutEyebrow}</p>
              <h2>{profile.aboutTitle}</h2>
              <p>{profile.aboutBody}</p>
              <p>{profile.aboutBodySecondary}</p>
            </section>
            <section className="profile-section profile-grid profile-grid--two">
              <article className="profile-card profile-card--blue">
                <p className="eyebrow">{profile.visionTitle}</p>
                <p>{profile.vision}</p>
              </article>
              <article className="profile-card">
                <p className="eyebrow">{profile.missionTitle}</p>
                <ul className="profile-list">
                  {profile.missions.map((mission) => <li key={mission}>{mission}</li>)}
                </ul>
              </article>
            </section>
            <section className="profile-section">
              <div className="profile-section__heading">
                <p className="eyebrow">{profile.valuesTitle}</p>
                <h2>{profile.valuesTitle}</h2>
              </div>
              <div className="profile-grid profile-grid--values">
                {profile.values.map((value, index) => (
                  <article className="profile-card profile-card--value" key={value.name}>
                    <span className="profile-card__index">0{index + 1}</span>
                    <h3>{value.name}</h3>
                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {slug === "services" && (
          <section className="profile-section profile-section--services">
            <div className="profile-section__heading">
              <p className="eyebrow">{page.eyebrow}</p>
              <h2>{profile.servicesTitle}</h2>
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
          </section>
        )}

        {slug === "industries" && (
          <section className="profile-section">
            <div className="profile-section__heading">
              <p className="eyebrow">{profile.clientsTitle}</p>
              <h2>{profile.clientsTitle}</h2>
            </div>
            <ul className="client-list">
              {profile.clients.map((client, index) => (
                <li key={client}><span>0{index + 1}</span><strong>{client}</strong></li>
              ))}
            </ul>
          </section>
        )}

        {slug === "operations" && (
          <>
            <section className="profile-section">
              <div className="profile-section__heading">
                <p className="eyebrow">{profile.processTitle}</p>
                <h2>{profile.processTitle}</h2>
                <p>{profile.processIntro}</p>
              </div>
              <div className="workflow-assignment">
                <span>{locale === "id" ? "ALUR UTAMA" : "PRIMARY FLOW"}</span>
                <strong>{profile.assignmentTitle}</strong>
                <p>{profile.deskCollectionTarget}</p>
              </div>
              <div className="profile-grid profile-grid--two workflow-branches">
                {[profile.farmerTitle, profile.hunterTitle].map((role) => {
                  const isFarmer = role === profile.farmerTitle;
                  return (
                    <article className="profile-card" key={role}>
                      <p className="eyebrow">{isFarmer ? "01" : "02"}</p>
                      <h3>{role}</h3>
                      <p>{isFarmer ? profile.farmerCriteria : profile.hunterCriteria}</p>
                      <h4>{profile.negotiation}</h4>
                      <ul className="profile-list">
                        <li>{profile.prospect}</li>
                        <li>{profile.notProspect}</li>
                      </ul>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="profile-section profile-section--soft">
              <div className="profile-section__heading">
                <p className="eyebrow">{profile.segmentedTitle}</p>
                <h2>{profile.segmentedTitle}</h2>
                <p>{profile.segmentedCriteria}</p>
              </div>
              <div className="profile-grid profile-grid--two">
                <article className="profile-card">
                  <h3>{profile.lowRisk}</h3>
                </article>
                <article className="profile-card">
                  <h3>High Risk</h3>
                  <p>{profile.highRisk}</p>
                  <p><strong>{profile.skipTracer}:</strong> {profile.skipMethods}</p>
                </article>
              </div>
              <div className="profile-grid profile-grid--two workflow-outcomes">
                <article className="profile-card profile-card--blue">
                  <h3>{locale === "id" ? "Valid / Contact" : "Valid / Contact"}</h3>
                  <p>{profile.validContact}</p>
                </article>
                <article className="profile-card">
                  <h3>{locale === "id" ? "Tidak valid / Tidak terhubung" : "Not valid / Not contacted"}</h3>
                  <p>{profile.invalidContact}</p>
                </article>
              </div>
              <p className="profile-note">{profile.fieldEscalation}</p>
              <article className="field-collection-card">
                <p className="eyebrow">{profile.internalField}</p>
                <h3>{profile.internalField}</h3>
                <ul className="profile-list profile-list--columns">
                  {profile.fieldMetrics.map((metric) => <li key={metric}>{metric}</li>)}
                </ul>
              </article>
            </section>

            <section className="profile-section">
              <div className="profile-section__heading">
                <p className="eyebrow">{profile.systemsTitle}</p>
                <h2>{profile.systemsTitle}</h2>
                <p>{profile.systemsIntro}</p>
              </div>
              <div className="profile-grid profile-grid--two">
                {profile.systems.map((system, index) => (
                  <article className="profile-card" key={system.name}>
                    <span className="profile-card__index">0{index + 1}</span>
                    <h3>{system.name}</h3>
                    <p>{system.description}</p>
                  </article>
                ))}
              </div>
              <p className="profile-note">{profile.systemsClosing}</p>
            </section>
          </>
        )}

        {slug === "compliance" && (
          <section className="profile-section">
            <div className="certificate-card">
              <p className="eyebrow">{profile.certificationEyebrow}</p>
              <h2>{profile.certificationTitle}</h2>
              <p>{profile.certificationSummary}</p>
              <div className="certificate-card__scope">
                <strong>{locale === "id" ? "Ruang lingkup" : "Scope"}</strong>
                <p>{profile.certificationScope}</p>
              </div>
              <p className="certificate-card__commitment">{profile.certificationCommitment}</p>
              <dl className="profile-facts">
                <div><dt>{locale === "id" ? "Nomor sertifikat" : "Certificate number"}</dt><dd>{profile.certificateNumber}</dd></div>
                <div><dt>{locale === "id" ? "Penilaian awal" : "Initial assessment"}</dt><dd>{profile.initialAssessment}</dd></div>
                <div><dt>{locale === "id" ? "Tanggal registrasi" : "Registration date"}</dt><dd>{profile.registrationDate}</dd></div>
                <div><dt>{locale === "id" ? "Surveillance 1 paling lambat" : "Surveillance 1 on or before"}</dt><dd>{profile.surveillanceOne}</dd></div>
                <div><dt>{locale === "id" ? "Surveillance 2 paling lambat" : "Surveillance 2 on or before"}</dt><dd>{profile.surveillanceTwo}</dd></div>
                <div><dt>{locale === "id" ? "Sertifikasi ulang paling lambat" : "Recertification on or before"}</dt><dd>{profile.recertification}</dd></div>
                <div><dt>{locale === "id" ? "Tanggal kedaluwarsa" : "Expiry date"}</dt><dd>{profile.expiryDate}</dd></div>
                <div><dt>{locale === "id" ? "Alamat pada sertifikat" : "Address on certificate"}</dt><dd>{profile.certificationAddress}</dd></div>
              </dl>
            </div>
          </section>
        )}

        {slug === "contact" && (
          <>
            <section className="profile-section profile-contact-intro">
              <p className="eyebrow">{profile.contactTitle}</p>
              <h2>{profile.contactBody}</h2>
              <div className="profile-contact-links">
                <a className="button button--primary" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
                  <ContactIcons type="phone" />
                  {locale === "id" ? "Telepon Direktur" : "Call the Director"}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="profile-contact-person">{profile.contactPerson}</p>
            </section>
            <section className="profile-section profile-section--contact-form">
              <div className="profile-section__heading">
                <p className="eyebrow">{locale === "id" ? "KIRIM PERTANYAAN" : "SEND AN INQUIRY"}</p>
                <h2>{locale === "id" ? "Ceritakan kebutuhan bisnis Anda." : "Tell us about your business needs."}</h2>
                <p>{locale === "id"
                  ? "Isi formulir singkat. WhatsApp akan terbuka dengan pesan yang sudah disiapkan untuk Anda periksa dan kirim."
                  : "Complete this short form. WhatsApp will open with a prepared message for you to review and send."}</p>
              </div>
              <WhatsAppInquiryForm
                locale={locale}
                whatsappPhone={profile.whatsappPhone}
                services={profile.services.map((service) => service.name)}
              />
            </section>
            <section className="profile-section">
              <div className="profile-section__heading">
                <p className="eyebrow">{profile.officesTitle}</p>
                <h2>{profile.officesTitle}</h2>
              </div>
              <div className="profile-grid profile-grid--two">
                {profile.offices.map((office) => (
                  <article className="profile-card" key={office.name}>
                    <h3>{office.name}</h3>
                    <p>{office.address}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        <p className="profile-source-note">{profile.sourceFootnote}</p>
      </div>

      <section className="page-next-step">
        <div className="content-width page-next-step__inner">
          <p>{profile.contactBody}</p>
          <Link className="text-link" href={routeFor(locale, "contact")}>
            {profile.contactCta}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
