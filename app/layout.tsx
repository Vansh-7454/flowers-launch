import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.brand.name} | Temple Florist in Pune`,
    template: `%s | ${siteContent.brand.name}`,
  },
  description:
    "Fresh temple garlands and daily devotional flowers in Pune. Handcrafted wedding varmala, morning pooja flowers, celebratory bouquets, and car decorations. Confirm on WhatsApp, pay at pickup.",
  metadataBase: new URL("https://shreeganeshflowers-pune.local"),
  keywords: [
    "Florist Pune",
    "Temple flower shop Pune",
    "Pooja flowers Pune",
    "Wedding garlands Pune",
    "Varmala Pune",
    "Daily fresh flowers Pune",
    "WhatsApp flower order Pune",
  ],
  authors: [{ name: siteContent.brand.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteContent.brand.name} | Fresh Temple Flowers & Garlands (Pune)`,
    description:
      "A boutique temple florist offering daily fresh pooja flowers, wedding varmala, celebratory bouquets, and custom garlands. Open daily from 5:30 AM in Pune.",
    type: "website",
    locale: "en_IN",
    siteName: siteContent.brand.name,
    images: [
      {
        url: "/images/home/hero.webp",
        width: 1200,
        height: 1500,
        alt: "Fresh temple flower baskets at Shree Ganesh Flowers Pune",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FCFAF7] text-[#291B35] antialiased">
        {/* Accessible Skip-to-content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#291B35] text-white rounded-[8px] font-semibold text-sm shadow-md"
        >
          Skip to main content
        </a>

        {/* Global Persistent Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Global Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}
