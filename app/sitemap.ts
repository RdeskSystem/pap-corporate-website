import type { MetadataRoute } from "next";
import { pageSlugs, routeFor } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const publicationApproved = process.env.PUBLICATION_APPROVED === "true";
  if (!siteUrl || !publicationApproved) return [];

  const paths = [
    routeFor("id", "home"),
    routeFor("en", "home"),
    ...pageSlugs.flatMap((slug) => [routeFor("id", slug), routeFor("en", slug)]),
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" || path === "/en" ? 1 : 0.6,
  }));
}
