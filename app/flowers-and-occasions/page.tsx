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
      {/* Compact Page Header (Rule 9: Breadcrumb, H1, one-sentence intro on surface color) */}
      <section className="bg-[#F5EFE6] border-b border-[#E3D7C5] py-12 md:py-16">
        <div className="site-container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-[#63554A]">
              <li>
                <Link href="/" className="hover:text-[#265239] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#63554A]/60" />
              </li>
              <li className="font-semibold text-[#231A14]" aria-current="page">
                Flowers & Occasions
              </li>
            </ol>
          </nav>

          <span className="text-eyebrow text-[#CB5E1C] block mb-2">
            FRESH FLORAL CATALOG
          </span>
          <h1 className="text-h1 font-heading text-[#231A14] mb-3">
            Flowers for every temple ritual & celebration
          </h1>
          <p className="text-intro text-[#63554A]">
            From dawn pooja offerings to royal wedding varmala, each arrangement is hand-selected and crafted with authentic care.
          </p>
        </div>
      </section>

      {/* Advance Garland Booking Notice Strip */}
      <div className="bg-[#18281E] text-[#F7F4EE] py-4 border-b border-[#265239]">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#F3B278] flex-shrink-0" />
            <span className="font-medium text-[#F7F4EE]">
              Advance Notice: Please order wedding garlands & car decorations one day in advance.
            </span>
          </div>
          <a
            href={generalGarlandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F3B278] hover:underline font-semibold flex-shrink-0"
          >
            Order ahead on WhatsApp →
          </a>
        </div>
      </div>

      {/* Main Occasions Catalog Section */}
      <section className="site-section bg-[#FCF9F4]">
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

      {/* Ordering & Preparation Protocol Section */}
      <section className="site-section bg-[#F5EFE6] border-y border-[#E3D7C5]">
        <div className="site-container">
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <span className="text-eyebrow text-[#CB5E1C] block mb-2">
              HOW OUR FLORAL SHOP OPERATES
            </span>
            <h2 className="text-h2 font-heading text-[#231A14] mb-4">
              Daily fresh stock & clear advance planning
            </h2>
            <p className="text-intro text-[#63554A] mx-auto">
              Because our blooms are sourced fresh every morning, here is what you can expect when ordering with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FCF9F4] p-6 md:p-8 rounded-[16px] border border-[#E3D7C5] shadow-sm">
              <div className="w-10 h-10 rounded-[10px] bg-[#ECE3D5] text-[#265239] flex items-center justify-center font-bold text-sm mb-4 border border-[#E3D7C5]">
                1
              </div>
              <h3 className="font-heading text-xl text-[#231A14] mb-2">
                Daily Temple Flowers
              </h3>
              <p className="text-sm text-[#63554A] leading-relaxed">
                Loose marigolds, red hibiscus, durva grass, and mogra strings arrive fresh at 5:00 AM daily. Available for immediate walk-in purchase from 5:30 AM or reserved via WhatsApp.
              </p>
            </div>

            <div className="bg-[#FCF9F4] p-6 md:p-8 rounded-[16px] border border-[#E3D7C5] shadow-sm">
              <div className="w-10 h-10 rounded-[10px] bg-[#ECE3D5] text-[#265239] flex items-center justify-center font-bold text-sm mb-4 border border-[#E3D7C5]">
                2
              </div>
              <h3 className="font-heading text-xl text-[#231A14] mb-2">
                1-Day Advance Garlands
              </h3>
              <p className="text-sm text-[#63554A] leading-relaxed">
                Ceremonial wedding varmala, reception sets, and car decorations need hand-weaving. Please place your order at least 24 hours prior so we can procure stems at the dawn wholesale mandi.
              </p>
            </div>

            <div className="bg-[#FCF9F4] p-6 md:p-8 rounded-[16px] border border-[#E3D7C5] shadow-sm">
              <div className="w-10 h-10 rounded-[10px] bg-[#ECE3D5] text-[#265239] flex items-center justify-center font-bold text-sm mb-4 border border-[#E3D7C5]">
                3
              </div>
              <h3 className="font-heading text-xl text-[#231A14] mb-2">
                Pickup & Payment
              </h3>
              <p className="text-sm text-[#63554A] leading-relaxed">
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
