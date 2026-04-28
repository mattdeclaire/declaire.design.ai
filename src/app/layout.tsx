import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DeClaire Design — Interior Design Studio",
    template: "%s — DeClaire Design",
  },
  description:
    "Katie DeClaire is a Benicia, CA-based interior designer creating refined, considered spaces for residential and commercial clients.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DeClaire Design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Nav />
        <PageTransition>
          <div className="pt-16">{children}</div>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
