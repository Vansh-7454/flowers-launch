import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { OccasionCard } from "@/components/OccasionCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Flowers & Occasions | Temple Pooja, Wedding Garlands & Bouquets",
  description:
    "Explore our floral arrangements in Pune: daily temple pooja flowers, wedding varmala, celebratory bouquets, car decoration, and funeral wreaths. WhatsApp ordering available.",
};

export default function FlowersAndOccasionsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Compact Editorial Page Header */}
      <section className="bg-gradient-to-b from-[#F1EBFF] via-[#F1EBFF]/50 to-[#FCFAFF] border-b border-[#E2D5FF] py-12 md:py-16">
        <div className="site-container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-[#746781]">
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
          <p className="text-intro text-[#746781]">
            From dawn pooja offerings to royal wedding varmala, each arrangement is hand-selected and crafted with authentic care.
          </p>
        </div>
      </section>

      {/* Main Occasions Catalog Section */}
      <section className="site-section bg-gradient-to-b from-[#F8F5FF] via-[#F8F5FF] to-[#FCFAFF]">
        <div className="site-container">
          <SectionHeader
            eyebrow="SPECIALTY ARRANGEMENTS"
            heading="Explore our five occasion types"
            intro="Click the button on any card to open a prefilled WhatsApp enquiry naming your specific occasion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.occasions.map((occasion, index) => (
              <OccasionCard
                key={occasion.id}
                occasion={occasion}
                featured={occasion.id === "wedding-garlands"}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Operational Protocol Section (Pale Lavender Panel) */}
      <section className="site-section bg-[#F1EBFF] border-y border-[#E2D5FF]">
        <div className="site-container">
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" />
              <span className="text-eyebrow text-[#291638] font-bold tracking-[0.16em]">
                HOW OUR FLORAL SHOP OPERATES
              </span>
            </div>
            <h2 className="text-h2 font-heading text-[#291638] mb-4 font-bold">
              Daily fresh stock & clear advance planning
            </h2>
            <p className="text-intro text-[#746781] mx-auto">
              Because our blooms are sourced fresh every morning, here is what you can expect when ordering with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="site-card group p-7 md:p-8 flex flex-col bg-[#FCFAFF] rounded-[22px] border border-[#E2D5FF] transition-all duration-300 hover:-translate-y-1 hover:border-[#B99AFF] hover:shadow-[0_16px_36px_-6px_rgba(185,154,255,0.25)] relative overflow-hidden">
              <div className="w-11 h-11 rounded-[14px] bg-[#F1EBFF] text-[#291638] group-hover:bg-[#291638] group-hover:text-[#D5FF32] flex items-center justify-center font-heading text-lg font-bold mb-5 border border-[#E2D5FF] transition-colors shadow-xs">
                01
              </div>
              <h3 className="font-heading text-xl font-bold text-[#291638] mb-2.5 group-hover:text-[#381D4C] transition-colors">
                Daily Temple Flowers
              </h3>
              <p className="text-sm text-[#746781] leading-relaxed">
                Loose marigolds, red hibiscus, durva grass, and mogra strings arrive fresh at 5:00 AM daily. Available for immediate walk-in purchase from 5:30 AM or reserved via WhatsApp.
              </p>
            </div>

            <div className="site-card group p-7 md:p-8 flex flex-col bg-[#FCFAFF] rounded-[22px] border border-[#E2D5FF] transition-all duration-300 hover:-translate-y-1 hover:border-[#B99AFF] hover:shadow-[0_16px_36px_-6px_rgba(185,154,255,0.25)] relative overflow-hidden">
              <div className="w-11 h-11 rounded-[14px] bg-[#F1EBFF] text-[#291638] group-hover:bg-[#291638] group-hover:text-[#D5FF32] flex items-center justify-center font-heading text-lg font-bold mb-5 border border-[#E2D5FF] transition-colors shadow-xs">
                02
              </div>
              <h3 className="font-heading text-xl font-bold text-[#291638] mb-2.5 group-hover:text-[#381D4C] transition-colors">
                1-Day Advance Garlands
              </h3>
              <p className="text-sm text-[#746781] leading-relaxed">
                Ceremonial wedding varmala, reception sets, and car decorations need hand-weaving. Please place your order at least 24 hours prior so we can procure stems at the dawn wholesale mandi.
              </p>
            </div>

            <div className="site-card group p-7 md:p-8 flex flex-col bg-[#FCFAFF] rounded-[22px] border border-[#E2D5FF] transition-all duration-300 hover:-translate-y-1 hover:border-[#B99AFF] hover:shadow-[0_16px_36px_-6px_rgba(185,154,255,0.25)] relative overflow-hidden">
              <div className="w-11 h-11 rounded-[14px] bg-[#F1EBFF] text-[#291638] group-hover:bg-[#291638] group-hover:text-[#D5FF32] flex items-center justify-center font-heading text-lg font-bold mb-5 border border-[#E2D5FF] transition-colors shadow-xs">
                03
              </div>
              <h3 className="font-heading text-xl font-bold text-[#291638] mb-2.5 group-hover:text-[#381D4C] transition-colors">
                Pickup & Payment
              </h3>
              <p className="text-sm text-[#746781] leading-relaxed">
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
