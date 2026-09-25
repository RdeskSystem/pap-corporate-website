import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const publicationApproved = process.env.PUBLICATION_APPROVED === "true";
  return {
    rules: {
      userAgent: "*",
      ...(siteUrl && publicationApproved
        ? { allow: "/", disallow: ["/admin", "/admin_console", "/api/"] }
        : { disallow: "/" }),
    },
    ...(siteUrl && publicationApproved
      ? { sitemap: new URL("/sitemap.xml", siteUrl).toString() }
      : {}),
  };
}
