import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://designgrids.studio"),
  title: {
    default: "DesignGrids Studio - Product Design Agency and Digital Asset Marketplace",
    template: "%s | DesignGrids Studio"
  },
  description:
    "Premium UI/UX, SaaS, mobile app, dashboard, design system, and digital product design studio for startups and modern teams.",
  keywords: [
    "UI UX design",
    "product design agency",
    "SaaS design",
    "Figma templates",
    "design systems",
    "dashboard design"
  ],
  openGraph: {
    title: "DesignGrids Studio",
    description: "Designing digital products that users love.",
    url: "https://designgrids.studio",
    siteName: "DesignGrids Studio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignGrids Studio",
    description: "Research-driven digital product design for ambitious teams."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DesignGrids Studio",
    url: "https://designgrids.studio",
    areaServed: "Worldwide",
    serviceType: ["Product Design", "UX Research", "Design Systems", "SaaS Design"],
    sameAs: ["https://x.com/designgrids", "https://www.linkedin.com/company/designgrids-studio"]
  };

  return (
    <html lang="en">
      <body>
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
