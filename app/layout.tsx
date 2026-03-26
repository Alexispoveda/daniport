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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description:
      "Industrial Engineer and Psychologist focused on business transformation, process design, and sustainable growth.",
    images: ["/twitter-image"],
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
