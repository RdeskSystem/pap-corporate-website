import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { routeFor, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Desk Collection Services | PT Pelita Anugrah Perkasa",
  description: `${siteConfig.companyName} provides desk collection, collection management, reporting and labor supply for business operations in Indonesia.`,
  alternates: {
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { canonical: routeFor("en", "home") } : {}),
    languages: { id: routeFor("id", "home"), en: routeFor("en", "home") },
  },
  openGraph: {
    title: "Desk Collection Services | PT Pelita Anugrah Perkasa",
    description: `${siteConfig.companyName} provides desk collection, collection management, reporting and labor supply for business operations in Indonesia.`,
    url: routeFor("en", "home"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Desk Collection Services | PT Pelita Anugrah Perkasa",
    description: `${siteConfig.companyName} provides desk collection, collection management, reporting and labor supply for business operations in Indonesia.`,
  },
};

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
