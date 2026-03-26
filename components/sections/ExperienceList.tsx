import { Container } from "@/components/common/Container";
import type { ExperienceItem, Locale } from "@/lib/types";

interface ExperienceListProps {
  locale: Locale;
  items: ExperienceItem[];
  title: string;
}

export function ExperienceList({ locale, items, title }: ExperienceListProps) {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <h2 className="mt-2 text-3xl font-semibold text-[var(--color-ink-strong)] sm:text-4xl">{title}</h2>
        <div className="mt-8 grid gap-4">
          {items.map((experience) => (
            <article
              key={experience.id}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 shadow-[0_8px_24px_rgba(12,27,44,0.05)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">{experience.company}</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-ink-strong)]">{experience.role[locale]}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--color-ink)] sm:text-base">
                {experience.bullets[locale].map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
