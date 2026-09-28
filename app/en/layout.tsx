import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const publicationApproved = process.env.PUBLICATION_APPROVED === "true";
const socialImage = siteUrl ? new URL("/assets/social/og-image-en.png", siteUrl).toString() : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: `${siteConfig.companyName} provides desk collection, collection management, labor supply and operational outsourcing services in Indonesia.`,
  robots: {
    index: publicationApproved,
    follow: publicationApproved,
  },
  applicationName: siteConfig.companyName,
  openGraph: {
    locale: "en_US",
    siteName: siteConfig.companyName,
    title: siteConfig.companyName,
    description: `${siteConfig.companyName} provides desk collection, collection management, labor supply and operational outsourcing services in Indonesia.`,
    ...(socialImage ? { images: [{ url: socialImage, width: 1200, height: 630, alt: siteConfig.companyName }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description: `${siteConfig.companyName} provides desk collection, collection management, labor supply and operational outsourcing services in Indonesia.`,
    ...(socialImage ? { images: [socialImage] } : {}),
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en" className="english-route">{children}</div>;
}
