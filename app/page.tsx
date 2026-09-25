import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { routeFor, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Beranda",
  description: `Informasi resmi ${siteConfig.companyName}.`,
  alternates: {
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { canonical: routeFor("id", "home") } : {}),
    languages: { id: routeFor("id", "home"), en: routeFor("en", "home") },
  },
};

export default function IndonesianHomePage() {
  return <HomePage locale="id" />;
}
