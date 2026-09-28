import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { routeFor, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Jasa Desk Collection | PT Pelita Anugrah Perkasa",
  description: `${siteConfig.companyName} menyediakan desk collection, collection management, reporting, dan labor supply untuk operasional bisnis di Indonesia.`,
  alternates: {
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { canonical: routeFor("id", "home") } : {}),
    languages: { id: routeFor("id", "home"), en: routeFor("en", "home") },
  },
  openGraph: {
    title: "Jasa Desk Collection | PT Pelita Anugrah Perkasa",
    description: `${siteConfig.companyName} menyediakan desk collection, collection management, reporting, dan labor supply untuk operasional bisnis di Indonesia.`,
    url: routeFor("id", "home"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Desk Collection | PT Pelita Anugrah Perkasa",
    description: `${siteConfig.companyName} menyediakan desk collection, collection management, reporting, dan labor supply untuk operasional bisnis di Indonesia.`,
  },
};

export default function IndonesianHomePage() {
  return <HomePage locale="id" />;
}
