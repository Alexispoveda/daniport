import type { Locale } from "@/lib/types";

export function removeLeadingLocale(pathname: string, locales: Locale[]): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return "/";
  }

  if (locales.includes(segments[0] as Locale)) {
    const next = segments.slice(1).join("/");
    return next ? `/${next}` : "/";
  }

  return pathname;
}

export function toLocalePath(locale: Locale, pathname: string, locales: Locale[]): string {
  const cleanPath = removeLeadingLocale(pathname, locales);
  if (cleanPath === "/") {
    return `/${locale}`;
  }
  return `/${locale}${cleanPath}`;
}
