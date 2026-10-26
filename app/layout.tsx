import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
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

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.brand.name} | Florist in Pune`,
    template: `%s | ${siteContent.brand.name}`,
  },
  description:
    "Authentic temple-side florist in Pune. Handcrafted wedding garlands, daily fresh pooja flowers, bouquets, and car decoration. Confirm on WhatsApp, pay at pickup.",
  metadataBase: new URL("https://shreeganeshflowers-pune.local"),
  keywords: [
    "Florist Pune",
    "Pooja flowers Pune",
    "Temple flower shop Pune",
    "Wedding garlands Pune",
    "Varmala Pune",
    "Fresh marigolds Pune",
    "WhatsApp flower order Pune",
  ],
  authors: [{ name: siteContent.brand.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteContent.brand.name} | Temple Florist in Pune`,
    description:
      "Fresh daily pooja flowers, wedding varmala, celebration bouquets and custom garlands. Open from 5:30 AM daily in Pune.",
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
      className={`${dmSerif.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FCF9F4] text-[#231A14] antialiased">
        {/* Accessible Skip-to-content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#265239] text-white rounded-[8px] font-semibold text-sm shadow-md"
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
