import Image from "next/image";
import Link from "next/link";
import { ContactIcons } from "@/components/contact-icons";
import {
  copy,
  navigationSlugs,
  routeFor,
  siteConfig,
  type Locale,
} from "@/lib/site-content";

export function SiteFooter({ locale, showPreviewNote }: { locale: Locale; showPreviewNote: boolean }) {
  const text = copy[locale];
  const legalSlugs = ["privacy-policy", "terms", "cookie-policy"] as const;

  return (
    <footer className="site-footer">
      <div className="site-footer__main content-width">
        <div className="site-footer__identity">
          <Link className="brand-lockup brand-lockup--footer" href={routeFor(locale, "home")}>
            <Image src={siteConfig.logoPath} width={52} height={52} alt="" />
            <span className="brand-lockup__text">
              <strong>{siteConfig.companyName}</strong>
              <small>{locale === "id" ? "PROFIL PERUSAHAAN" : "CORPORATE PROFILE"}</small>
            </span>
          </Link>
          <p>{text.footerDescription}</p>
        </div>

        <div className="site-footer__column">
          <h2>{text.footerCompany}</h2>
          <Link href={routeFor(locale, "about")}>{text.pages.about.navLabel}</Link>
          <Link href={routeFor(locale, "contact")}>{text.pages.contact.navLabel}</Link>
        </div>

        <div className="site-footer__column">
          <h2>{text.footerExplore}</h2>
          {navigationSlugs.slice(1, 5).map((slug) => (
            <Link key={slug} href={routeFor(locale, slug)}>
              {text.pages[slug].navLabel}
            </Link>
          ))}
        </div>

        <div className="site-footer__column">
          <h2>{text.footerLegal}</h2>
          {legalSlugs.map((slug) => (
            <Link key={slug} href={routeFor(locale, slug)}>
              {text.pages[slug].navLabel}
            </Link>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom content-width">
        <span>© {new Date().getFullYear()} {siteConfig.companyName}. {text.copyright}</span>
        <a
          className="site-footer__creator"
          href="https://wa.me/628211406001?text=Halo%20RULIMENA_PROJECT"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={locale === "id" ? "Hubungi RULIMENA_PROJECT melalui WhatsApp" : "Contact RULIMENA_PROJECT on WhatsApp"}
        >
          <ContactIcons type="whatsapp" />
          <span>{locale === "id" ? "Dibuat oleh" : "Created by"} <strong>RULIMENA_PROJECT</strong></span>
        </a>
        {showPreviewNote && (
          <span className="site-footer__preview">{locale === "id" ? "Pratinjau situs" : "Website preview"}</span>
        )}
      </div>
    </footer>
  );
}
