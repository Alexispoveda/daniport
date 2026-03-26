import Image from "next/image";

import officeImage from "@/app/assets/images/office.jpg";
import { Container } from "@/components/common/Container";

interface HomeHeroProps {
  title: string;
  imageAlt: string;
}

export function HomeHero({ title, imageAlt }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <Image
        src={officeImage}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,27,44,0.78),rgba(12,27,44,0.45)_48%,rgba(12,27,44,0.28))]" />
      <Container className="relative py-28 sm:py-36 lg:py-44">
        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
      </Container>
    </section>
  );
}
