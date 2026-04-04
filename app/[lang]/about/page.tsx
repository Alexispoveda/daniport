import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import experiencesData from "@/config/experiences.json";
import siteData from "@/config/site.json";
import portraitOne from "@/app/assets/images/Daniella-Rectangle.jpeg";
import { Container } from "@/components/common/Container";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { getProfileConfig } from "@/lib/profile";
import type { ExperienceItem, SiteConfig } from "@/lib/types";

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

const site = siteData as SiteConfig;
const experiences = experiencesData as ExperienceItem[];

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const profile = getProfileConfig();

  if (!hasLocale(lang)) {
    return {};
  }

  const dict = await getDictionary(lang);

  return {
    title: dict.seo.aboutTitle,
    description: dict.seo.aboutDescription,
    openGraph: {
      url: `${site.baseUrl}/${lang}/about`,
      title: `${dict.seo.aboutTitle} | ${profile.name}`,
      description: dict.seo.aboutDescription,
      images: [`/${lang}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.seo.aboutTitle} | ${profile.name}`,
      description: dict.seo.aboutDescription,
      images: [`/${lang}/twitter-image`],
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  await connection();

  const profile = getProfileConfig();

  const dict = await getDictionary(lang);
  const paragraphs = profile.longAbout[lang].split("\n\n");

  return (
    <>
      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="relative min-h-[600px] overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white shadow-[0_10px_28px_rgba(12,27,44,0.08)]">
              <Image
                src={portraitOne}
                alt={dict.about.portraitAlt}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 38vw, 100vw"
                priority
              />
            </div>
            <article className="rounded-3xl border border-[var(--color-line)] bg-white p-6 shadow-[0_10px_28px_rgba(12,27,44,0.08)] sm:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">{dict.about.title}</p>
              <h1 className="mt-3 text-4xl font-semibold text-[var(--color-ink-strong)]">{profile.name}</h1>
              <div className="mt-6 space-y-5 leading-8 text-[var(--color-ink)]">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>

      <ExperienceList
        locale={lang}
        items={experiences}
        title={dict.about.experienceTitle}
      />
    </>
  );
}
