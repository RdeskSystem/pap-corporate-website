"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  copy,
  navigationSlugs,
  routeFor,
  siteConfig,
  type Locale,
  type RouteSlug,
} from "@/lib/site-content";

interface SiteHeaderProps {
  locale: Locale;
  currentSlug: RouteSlug;
  showPreviewNote: boolean;
}

export function SiteHeader({ locale, currentSlug, showPreviewNote }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[locale];
  const navigation = [
    { slug: "home" as const, label: text.homeLabel },
    ...navigationSlugs.map((slug) => ({ slug, label: text.pages[slug].navLabel })),
  ];

  return (
    <>
      {showPreviewNote && (
        <div className="preview-note">
          <span className="preview-note__dot" aria-hidden="true" />
          <p>{text.previewNotice}</p>
        </div>
      )}
      <header className="site-header">
        <div className="site-header__inner">
          <Link
            className="brand-lockup"
            href={routeFor(locale, "home")}
            aria-label={`${siteConfig.companyName} — ${text.backHome}`}
            onClick={() => setMenuOpen(false)}
          >
            <Image
              className="brand-lockup__mark"
              src={siteConfig.logoPath}
              width={58}
              height={58}
              alt=""
              priority
            />
            <span className="brand-lockup__text">
              <strong>{siteConfig.companyName}</strong>
              <small>{locale === "id" ? "PROFIL PERUSAHAAN" : "CORPORATE PROFILE"}</small>
            </span>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? text.menuClose : text.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span className="visually-hidden">{menuOpen ? text.menuClose : text.menuOpen}</span>
          </button>

          <nav
            id="primary-navigation"
            className={`primary-navigation${menuOpen ? " is-open" : ""}`}
            aria-label={text.navigationLabel}
          >
            <div className="primary-navigation__links">
              {navigation.map(({ slug, label }) => (
                <Link
                  key={slug}
                  href={routeFor(locale, slug)}
                  aria-current={currentSlug === slug ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="primary-navigation__actions">
              <div className="locale-switch" role="group" aria-label={text.languageLabel}>
                <Link
                  href={routeFor("id", currentSlug)}
                  lang="id"
                  aria-label="Bahasa Indonesia"
                  aria-current={locale === "id" ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  ID
                </Link>
                <span aria-hidden="true">/</span>
                <Link
                  href={routeFor("en", currentSlug)}
                  lang="en"
                  aria-label="English"
                  aria-current={locale === "en" ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  EN
                </Link>
              </div>
              <Link
                className="button button--small button--primary"
                href={routeFor(locale, "contact")}
                onClick={() => setMenuOpen(false)}
              >
                {text.partnerCta}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
