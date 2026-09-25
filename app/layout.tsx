import type { Metadata } from "next";
import "@fontsource-variable/manrope/index.css";
import { siteConfig } from "@/lib/site-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const publicationApproved = process.env.PUBLICATION_APPROVED === "true";
const socialImage = siteUrl ? new URL("/assets/social/og-image.png", siteUrl).toString() : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: `Informasi resmi ${siteConfig.companyName}.`,
  robots: {
    index: publicationApproved,
    follow: publicationApproved,
  },
  applicationName: siteConfig.companyName,
  icons: {
    icon: "/assets/brand/favicon.png",
    apple: "/assets/brand/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.companyName,
    title: siteConfig.companyName,
    description: `Informasi resmi ${siteConfig.companyName}.`,
    ...(socialImage ? { images: [{ url: socialImage, width: 1200, height: 630, alt: siteConfig.companyName }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description: `Informasi resmi ${siteConfig.companyName}.`,
    ...(socialImage ? { images: [socialImage] } : {}),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
