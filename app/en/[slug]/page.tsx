import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicPage } from "@/components/public-page";
import {
  isPageSlug,
  pageMetadata,
  pageSlugs,
  routeFor,
} from "@/lib/site-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isPageSlug(slug)) return {};
  const metadata = pageMetadata("en", slug);
  return {
    ...metadata,
    alternates: {
      ...(process.env.NEXT_PUBLIC_SITE_URL ? { canonical: routeFor("en", slug) } : {}),
      languages: { id: routeFor("id", slug), en: routeFor("en", slug) },
    },
  };
}

export default async function EnglishPublicPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isPageSlug(slug)) notFound();
  return <PublicPage locale="en" slug={slug} />;
}
