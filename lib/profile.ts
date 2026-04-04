import profileData from "@/config/profile.json";
import type { Locale, LocalizedText, ProfileConfig } from "@/lib/types";

const EXPERIENCE_TOKEN = "{{experienceYears}}";

function injectExperienceYears(value: string, years: number): string {
  return value.replaceAll(EXPERIENCE_TOKEN, String(years));
}

function injectExperienceYearsLocalized(text: LocalizedText, years: number): LocalizedText {
  const entries = Object.entries(text) as [Locale, string][];

  return Object.fromEntries(
    entries.map(([locale, value]) => [locale, injectExperienceYears(value, years)]),
  ) as LocalizedText;
}

export function getProfileConfig(referenceDate: Date = new Date()): ProfileConfig {
  const profile = profileData as ProfileConfig;
  const experienceYears = Math.max(0, referenceDate.getUTCFullYear() - profile.experienceStartYear);

  return {
    ...profile,
    shortAbout: injectExperienceYearsLocalized(profile.shortAbout, experienceYears),
    longAbout: injectExperienceYearsLocalized(profile.longAbout, experienceYears),
  };
}
