import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hanayiti.org"),
  title: {
    default: "HANA",
    template: "%s | HANA",
  },
  description:
    "Haitian American Nationals Association (HANA) — non-partisan advocacy through disciplined policy engagement and transnational coordination.",
  applicationName: "HANA",
  authors: [{ name: "Haitian American Nationals Association (HANA)" }],
  generator: "Next.js",
  keywords: [
    "HANA",
    "Haitian American Nationals Association",
    "Haiti",
    "advocacy",
    "policy",
    "human rights",
    "economic development",
    "education",
    "indigenous rights",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "HANA",
    description:
      "Non-partisan advocacy • Institutional voice • Disciplined policy engagement.",
    url: "/",
    siteName: "HANA",
    type: "website",
    locale: "en_US",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "HANA" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HANA",
    description:
      "Non-partisan advocacy • Institutional voice • Disciplined policy engagement.",
    images: ["/og.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
