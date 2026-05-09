import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const google_sans_flex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://subash-interlocks.in";
const OG_IMAGE = `${SITE_URL}/assets/images/1.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Subash D | Expert Interlock Paving in Kerala",
    template: "%s | Subash D",
  },
  description:
    "15+ years of expert interlock paving across Kerala. Serving Thrissur, Ernakulam & beyond — residential courtyards, driveways, and commercial complexes. Contact for a free quote.",
  keywords: [
    "interlock paving Kerala",
    "interlock contractor Thrissur",
    "interlock paving Ernakulam",
    "paving contractor Kerala",
    "driveway paving Kerala",
    "Subash D interlock",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Subash D Interlock Paving",
    title: "Subash D | Expert Interlock Paving in Kerala",
    description:
      "15+ years of expert interlock paving across Kerala. Precision cutting, drainage planning, and artistry — from residential courtyards to commercial complexes.",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Interlock paving work by Subash D, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subash D | Expert Interlock Paving in Kerala",
    description:
      "15+ years of expert interlock paving across Kerala — Thrissur, Ernakulam & beyond.",
    images: [OG_IMAGE],
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
      className={`${google_sans_flex.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
