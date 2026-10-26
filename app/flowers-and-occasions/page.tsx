import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/content/site";
import { OccasionCard } from "@/components/OccasionCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Flowers & Occasions | Temple Pooja, Wedding Garlands & Bouquets",
  description:
    "Explore our floral arrangements in Pune: daily temple pooja flowers, wedding varmala, celebratory bouquets, car decoration, and funeral wreaths. WhatsApp ordering available.",
};

export default function FlowersAndOccasionsPage() {
  const generalGarlandUrl = getWhatsAppUrl(
    "Hi Shree Ganesh Flowers, I'd like to enquire about ordering custom garlands for an upcoming function."
  );

  return (
    <div className="flex flex-col w-full">
      {/* Compact Editorial Page Header */}
      <section className="bg-gradient-to-b from-[#EEE6FF] via-[#EEE6FF]/50 to-[#FCFAFF] border-b border-[#DCCCF7] py-12 md:py-16">
        <div className="site-container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-[#716879]">
              <li>
                <Link href="/" className="hover:text-[#291638] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#B99AFF]" />
              </li>
              <li className="font-bold text-[#291638]" aria-current="page">
                Flowers & Occasions
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_8px_#D5FF32]" />
            <span className="text-eyebrow text-[#291638] font-bold tracking-[0.16em]">
              FRESH FLORAL CATALOG
            </span>
          </div>
          <h1 className="text-h1 font-heading text-[#291638] mb-3">
            Flowers for every temple ritual & celebration
          </h1>
          <p className="text-intro text-[#716879]">
            From dawn pooja offerings to royal wedding varmala, each arrangement is hand-selected and crafted with authentic care.
          </p>
        </div>
      </section>

      {/* Advance Garland Booking Notice Strip (Deep Plum Band with Chartreuse Accents) */}
      <div className="bg-[#291638] text-[#FCFAFF] py-4 border-b border-[#B99AFF]/25">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#D5FF32] flex-shrink-0" />
            <span className="font-semibold text-[#FCFAFF]">
              Advance Notice: Please order wedding garlands & car decorations one day in advance.
            </span>
          </div>
          <a
            href={generalGarlandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D5FF32] hover:underline font-bold flex-shrink-0 flex items-center gap-1"
          >
            <span>Order ahead on WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Main Occasions Catalog Section */}
      <section className="site-section bg-[#FCFAFF]">
        <div className="site-container">
          <SectionHeader
            eyebrow="SPECIALTY ARRANGEMENTS"
            heading="Explore our five occasion types"
            intro="Click the button on any card to open a prefilled WhatsApp enquiry naming your specific occasion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.occasions.map((occasion) => (
              <OccasionCard key={occasion.id} occasion={occasion} />
            ))}
          </div>
        </div>
      </section>

      {/* Operational Protocol Section (Pale Lavender Panel) */}
      <section className="site-section bg-[#EEE6FF]/50 border-y border-[#DCCCF7]">
        <div className="site-container">
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" />
              <span className="text-eyebrow text-[#291638] font-bold tracking-[0.16em]">
                HOW OUR FLORAL SHOP OPERATES
              </span>
            </div>
            <h2 className="text-h2 font-heading text-[#291638] mb-4">
              Daily fresh stock & clear advance planning
            </h2>
            <p className="text-intro text-[#716879] mx-auto">
              Because our blooms are sourced fresh every morning, here is what you can expect when ordering with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="site-card p-6 md:p-8">
              <div className="w-10 h-10 rounded-[12px] bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-heading text-xl text-[#291638] mb-2 font-bold">
                Daily Temple Flowers
              </h3>
              <p className="text-sm text-[#716879] leading-relaxed">
                Loose marigolds, red hibiscus, durva grass, and mogra strings arrive fresh at 5:00 AM daily. Available for immediate walk-in purchase from 5:30 AM or reserved via WhatsApp.
              </p>
            </div>

            <div className="site-card p-6 md:p-8">
              <div className="w-10 h-10 rounded-[12px] bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-heading text-xl text-[#291638] mb-2 font-bold">
                1-Day Advance Garlands
              </h3>
              <p className="text-sm text-[#716879] leading-relaxed">
                Ceremonial wedding varmala, reception sets, and car decorations need hand-weaving. Please place your order at least 24 hours prior so we can procure stems at the dawn wholesale mandi.
              </p>
            </div>

            <div className="site-card p-6 md:p-8">
              <div className="w-10 h-10 rounded-[12px] bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-heading text-xl text-[#291638] mb-2 font-bold">
                Pickup & Payment
              </h3>
              <p className="text-sm text-[#716879] leading-relaxed">
                No complex forms or online carts. Your order is confirmed in writing on WhatsApp, carefully wrapped, and paid for (Cash or UPI) when collected at our shop counter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Band */}
      <CTASection
        heading="Have a specific occasion or garland requirement?"
        subtext="Message us on WhatsApp to discuss flower varieties, lengths, and timing. We are glad to help you celebrate sacred traditions in Pune."
      />
    </div>
  );
}
