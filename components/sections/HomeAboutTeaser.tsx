import { ActionLink } from "@/components/common/ActionLink";
import { Container } from "@/components/common/Container";
import type { Locale } from "@/lib/types";

interface HomeAboutTeaserProps {
  locale: Locale;
  title: string;
  subtitle: string;
  shortAbout: string;
  aboutLabel: string;
  contactLabel: string;
}

export function HomeAboutTeaser({
  locale,
  title,
  subtitle,
  shortAbout,
  aboutLabel,
  contactLabel,
}: HomeAboutTeaserProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 rounded-3xl border border-[var(--color-line)] bg-white p-6 shadow-[0_8px_30px_rgba(12,27,44,0.06)] sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">{subtitle}</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--color-ink-strong)] sm:text-4xl">{title}</h2>
            <p className="mt-5 max-w-2xl leading-8 text-[var(--color-ink)]">{shortAbout}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ActionLink href={`/${locale}/about`}>{aboutLabel}</ActionLink>
            <ActionLink href={`/${locale}/contact`} variant="secondary">
              {contactLabel}
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
