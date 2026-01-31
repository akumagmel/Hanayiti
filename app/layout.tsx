import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hanayiti.org"),
  title: { default: "HANA Yiti", template: "%s | HANA Yiti" },
  description:
    "Haitian American Nationals Association (HANA) — non-partisan advocacy through disciplined policy engagement and transnational coordination.",
  openGraph: {
    title: "HANA Yiti",
    description: "Non-partisan advocacy • Institutional voice • Disciplined policy engagement.",
    url: "https://hanayiti.org",
    siteName: "HANA Yiti",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
