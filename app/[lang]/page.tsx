import type { Metadata } from "next";
import { notFound } from "next/navigation";

import profileData from "@/config/profile.json";
import siteData from "@/config/site.json";
import { HomeAboutTeaser } from "@/components/sections/HomeAboutTeaser";
import { HomeHero } from "@/components/sections/HomeHero";
import { getDictionary, hasLocale } from "@/lib/i18n";
import type { ProfileConfig, SiteConfig } from "@/lib/types";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

const profile = profileData as ProfileConfig;
const site = siteData as SiteConfig;

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);

  return {
    title: dict.seo.homeTitle,
    description: dict.seo.homeDescription,
    openGraph: {
      url: `${site.baseUrl}/${lang}`,
      title: `${dict.seo.homeTitle} | ${profile.name}`,
      description: dict.seo.homeDescription,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.seo.homeTitle} | ${profile.name}`,
      description: dict.seo.homeDescription,
      images: ["/twitter-image"],
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <>
      <HomeHero title={profile.bannerTitle[lang]} imageAlt={dict.home.heroImageAlt} />
      <HomeAboutTeaser
        locale={lang}
        title={dict.home.aboutTitle}
        subtitle={dict.home.aboutSubtitle}
        shortAbout={profile.shortAbout[lang]}
        aboutLabel={dict.actions.about}
        contactLabel={dict.actions.contact}
      />
    </>
  );
}
