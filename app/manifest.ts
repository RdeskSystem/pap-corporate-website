import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.companyName,
    short_name: "PAP",
    description: `Informasi resmi ${siteConfig.companyName}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#293696",
    icons: [
      { src: "/assets/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/assets/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
