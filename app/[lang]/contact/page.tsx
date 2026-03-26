import type { Metadata } from "next";
import { notFound } from "next/navigation";

import profileData from "@/config/profile.json";
import siteData from "@/config/site.json";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { getDictionary, hasLocale } from "@/lib/i18n";
import type { ProfileConfig, SiteConfig } from "@/lib/types";

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

const profile = profileData as ProfileConfig;
const site = siteData as SiteConfig;

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);

  return {
    title: dict.seo.contactTitle,
    description: dict.seo.contactDescription,
    openGraph: {
      url: `${site.baseUrl}/${lang}/contact`,
      title: `${dict.seo.contactTitle} | ${profile.name}`,
      description: dict.seo.contactDescription,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.seo.contactTitle} | ${profile.name}`,
      description: dict.seo.contactDescription,
      images: ["/twitter-image"],
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <ContactDetails
      title={dict.contact.title}
      subtitle={dict.contact.subtitle}
      paragraph={profile.contactParagraph[lang]}
      profileName={profile.name}
      profileRole={dict.contact.overlayRole}
      portraitAlt={dict.contact.portraitAlt}
      labels={{
        email: dict.contact.email,
        phone: dict.contact.phone,
        linkedin: dict.contact.linkedin,
        linkedinAction: dict.actions.linkedin,
      }}
      contact={profile.contact}
    />
  );
}
