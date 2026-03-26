import "server-only";

import en from "@/locales/en.json";
import type { Locale } from "@/lib/types";

const dictionaries = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  es: () => import("@/locales/es.json").then((module) => module.default),
};

export const locales = ["en", "es"] as const;
export const defaultLocale: Locale = "en";

export type Dictionary = typeof en;

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
