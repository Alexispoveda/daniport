import Image from "next/image";

import portraitTwo from "@/app/assets/images/Daniella-Rectangle2.jpeg";
import { ActionLink } from "@/components/common/ActionLink";
import { Container } from "@/components/common/Container";
import type { ContactChannels } from "@/lib/types";

interface ContactDetailsProps {
  title: string;
  subtitle: string;
  paragraph: string;
  profileName: string;
  profileRole: string;
  portraitAlt: string;
  labels: {
    email: string;
    phone: string;
    linkedin: string;
    linkedinAction: string;
  };
  contact: ContactChannels;
}

export function ContactDetails({ title, subtitle, paragraph, profileName, profileRole, portraitAlt, labels, contact }: ContactDetailsProps) {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <div className="grid gap-8 rounded-3xl border border-[var(--color-line)] bg-white p-6 shadow-[0_10px_30px_rgba(12,27,44,0.08)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">{subtitle}</p>
            <h1 className="mt-3 text-4xl font-semibold text-[var(--color-ink-strong)]">{title}</h1>
            <p className="mt-5 max-w-xl leading-8 text-[var(--color-ink)]">{paragraph}</p>

            <dl className="mt-8 grid gap-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">{labels.email}</dt>
                <dd>
                  <a className="text-base font-semibold text-[var(--color-ink-strong)] hover:text-[var(--color-brand)]" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">{labels.phone}</dt>
                <dd>
                  <a className="text-base font-semibold text-[var(--color-ink-strong)] hover:text-[var(--color-brand)]" href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">{labels.linkedin}</dt>
                <dd className="mt-2">
                  <ActionLink href={contact.linkedin} variant="secondary">
                    {labels.linkedinAction}
                  </ActionLink>
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
            <Image
              src={portraitTwo}
              alt={portraitAlt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(12,27,44,0.7),transparent)] p-5 text-white">
              <p className="text-lg font-semibold">{profileName}</p>
              <p className="text-sm text-white/85">{profileRole}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
