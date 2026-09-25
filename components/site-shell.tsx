import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale, RouteSlug } from "@/lib/site-content";

export function SiteShell({
  locale,
  currentSlug,
  children,
}: {
  locale: Locale;
  currentSlug: RouteSlug;
  children: ReactNode;
}) {
  const isPreview = process.env.PUBLICATION_APPROVED !== "true";

  return (
    <>
      <a className="skip-link" href="#main-content">
        {locale === "id" ? "Lewati ke konten utama" : "Skip to main content"}
      </a>
      <SiteHeader locale={locale} currentSlug={currentSlug} showPreviewNote={isPreview} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} showPreviewNote={isPreview} />
    </>
  );
}
