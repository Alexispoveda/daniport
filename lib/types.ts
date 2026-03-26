export type Locale = "en" | "es";

export type LocalizedText = Record<Locale, string>;

export interface ContactChannels {
  email: string;
  phone: string;
  linkedin: string;
}

export interface ProfileConfig {
  name: string;
  bannerTitle: LocalizedText;
  shortAbout: LocalizedText;
  longAbout: LocalizedText;
  contactParagraph: LocalizedText;
  headline: LocalizedText;
  contact: ContactChannels;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  company: string;
  bullets: Record<Locale, string[]>;
}

export interface SiteConfig {
  baseUrl: string;
  defaultLocale: Locale;
  locales: Locale[];
}
