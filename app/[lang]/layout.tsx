import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import profileData from "@/config/profile.json";
import siteData from "@/config/site.json";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import type { Locale, ProfileConfig, SiteConfig } from "@/lib/types";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

const profile = profileData as ProfileConfig;
const site = siteData as SiteConfig;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);

  return {
    title: {
      default: profile.name,
      template: `%s | ${profile.name}`,
    },
    description: dict.seo.defaultDescription,
    alternates: {
      canonical: `${site.baseUrl}/${lang}`,
      languages: {
        en: `${site.baseUrl}/en`,
        es: `${site.baseUrl}/es`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang === "en" ? "en_US" : "es_ES",
      url: `${site.baseUrl}/${lang}`,
      title: `${dict.seo.siteName}`,
      description: dict.seo.defaultDescription,
      siteName: dict.seo.siteName,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: profile.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.siteName,
      description: dict.seo.defaultDescription,
      images: ["/twitter-image"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="relative flex min-h-screen flex-col bg-[radial-gradient(circle_at_10%_10%,rgba(179,227,255,0.28),transparent_40%),radial-gradient(circle_at_90%_5%,rgba(217,233,245,0.4),transparent_42%),var(--color-bg)]">
      <SiteHeader locale={locale} labels={dict.nav} />
      <main className="flex-1">{children}</main>
      <SiteFooter name={profile.name} rightsText={dict.footer.rights} basedInText={dict.footer.basedIn} />
    </div>
  );
}
