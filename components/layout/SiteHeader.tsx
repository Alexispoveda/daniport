"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { toLocalePath } from "@/lib/routes";
import type { Locale } from "@/lib/types";

interface SiteHeaderProps {
  locale: Locale;
  labels: {
    brandShort: string;
    brandFull: string;
    home: string;
    about: string;
    contact: string;
  };
}

const locales: Locale[] = ["en", "es"];

const navItems = [
  { href: "", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

export function SiteHeader({ locale, labels }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <Link href={`/${locale}`} className="text-base font-semibold tracking-wide text-[var(--color-ink-strong)]">
          <span className="sm:hidden">{labels.brandShort}</span>
          <span className="hidden sm:inline">{labels.brandFull}</span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] p-1">
          {navItems.map((item) => {
            const href = `/${locale}${item.href}`;
            const active = pathname === href;
            return (
              <Link
                key={item.href || "home"}
                href={href}
                className={`rounded-full px-3 py-2 text-sm transition-colors sm:px-4 ${
                  active
                    ? "bg-[var(--color-accent)] text-[var(--color-ink-strong)]"
                    : "text-[var(--color-ink)] hover:bg-white"
                }`}
              >
                {labels[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white p-1">
          {locales.map((nextLocale) => {
            const isActive = locale === nextLocale;
            return (
              <Link
                key={nextLocale}
                href={toLocalePath(nextLocale, pathname, locales)}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  isActive
                    ? "bg-[var(--color-accent)] text-[var(--color-ink-strong)]"
                    : "text-[var(--color-ink)] hover:bg-white"
                }`}
              >
                {nextLocale}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
