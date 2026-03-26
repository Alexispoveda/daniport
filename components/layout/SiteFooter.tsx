import { Container } from "@/components/common/Container";

interface SiteFooterProps {
  name: string;
  rightsText: string;
  basedInText: string;
}

export function SiteFooter({ name, rightsText, basedInText }: SiteFooterProps) {
  return (
    <footer className="mt-20 border-t border-[var(--color-line)] bg-white/80 py-8">
      <Container className="flex flex-col gap-2 text-sm text-[var(--color-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>{`© ${new Date().getFullYear()} ${name}. ${rightsText}`}</p>
        <p className="uppercase tracking-wide">{basedInText}</p>
      </Container>
    </footer>
  );
}
