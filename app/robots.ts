import type { MetadataRoute } from "next";

import siteData from "@/config/site.json";
import type { SiteConfig } from "@/lib/types";

const site = siteData as SiteConfig;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.baseUrl}/sitemap.xml`,
  };
}
