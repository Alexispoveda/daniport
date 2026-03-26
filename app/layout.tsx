import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";

import profileData from "@/config/profile.json";
import siteData from "@/config/site.json";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin"],
});

const profile = profileData;
const site = siteData;

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description:
    "Industrial Engineer and Psychologist focused on business transformation, process design, and sustainable growth.",
  openGraph: {
    type: "website",
    title: profile.name,
    description:
      "Industrial Engineer and Psychologist focused on business transformation, process design, and sustainable growth.",
    url: site.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description:
      "Industrial Engineer and Psychologist focused on business transformation, process design, and sustainable growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
