import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-serif" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--f-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });
export const metadata: Metadata = {
  title: "LYTIC — Turning complex logistics into sovereign software",
  description: "LYTIC Technologies, Krishnagiri. Shift: offline-first logistics dispatch on client-owned clouds. Govt. of India registered MSME.",
  icons: { icon: "/favicon.svg" },
};
const ld = { "@context": "https://schema.org", "@type": "Organization", name: "LYTIC", url: "https://lytic.co.in", email: "support@lytic.co.in", telephone: "+91 94422 11279", foundingDate: "2023-02-17", address: { "@type": "PostalAddress", addressLocality: "Krishnagiri", addressRegion: "Tamil Nadu", postalCode: "635112", addressCountry: "IN" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain bg-obsidian">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <SmoothScroll /><Nav /><main>{children}</main><Footer />
      </body>
    </html>
  );
}
