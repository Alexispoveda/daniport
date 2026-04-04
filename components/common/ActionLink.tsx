import Link from "next/link";
import { ReactNode } from "react";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function ActionLink({ href, children, variant = "primary" }: ActionLinkProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-[var(--color-ink-strong)] hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-line)] bg-white/75 text-[var(--color-ink)] hover:bg-white";

  return (
    <Link href={href} className={`${base} ${styles}`} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
      {children}
    </Link>
  );
}
