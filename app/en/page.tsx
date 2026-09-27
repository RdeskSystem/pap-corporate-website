import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { routeFor, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Home",
  description: `${siteConfig.companyName} provides desk collection, collection management, reporting and labor supply services.`,
  alternates: {
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { canonical: routeFor("en", "home") } : {}),
    languages: { id: routeFor("id", "home"), en: routeFor("en", "home") },
  },
};

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
