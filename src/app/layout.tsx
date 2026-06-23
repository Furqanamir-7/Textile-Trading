import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/layout/PageTransition";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PremiumYarn Co. | Global B2B Textile Trading",
    template: "%s | PremiumYarn Co.",
  },
  description:
    "International B2B supplier of premium yarn, fabrics, home textile, and garments. Serving mills and manufacturers in 68+ countries.",
  keywords: [
    "yarn supplier",
    "B2B textile",
    "cotton yarn export",
    "polyester yarn trading",
    "textile sourcing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
