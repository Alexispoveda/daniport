import type { MetadataRoute } from "next";

import siteData from "@/config/site.json";
import type { SiteConfig } from "@/lib/types";

const site = siteData as SiteConfig;
const routes = ["", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return site.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${site.baseUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${site.baseUrl}/en${route}`,
          es: `${site.baseUrl}/es${route}`,
        },
      },
    })),
  );
}
