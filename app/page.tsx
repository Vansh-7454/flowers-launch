import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/content/site";
import { SmartImage } from "@/components/SmartImage";
import { OpenStatusBadge } from "@/components/OpenStatusBadge";
import { TrustStrip } from "@/components/TrustStrip";
import { OccasionCard } from "@/components/OccasionCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  const heroWhatsAppUrl = getWhatsAppUrl(
    "Hi Shree Ganesh Flowers, I'd like to ask what flowers are available today and place an order."
  );

  const garlandWhatsAppUrl = getWhatsAppUrl(
    "Hi Shree Ganesh Flowers, I'd like to order: Wedding garlands (one day in advance)"
  );

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Editorial Asymmetrical Split with Lavender Glow) */}
      <section className="site-section pt-8 md:pt-16 pb-16 md:pb-24 relative overflow-hidden pattern-lavender-glow">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: 6 cols */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-eyebrow text-[#6546A5]">
                  FRESH FLOWERS & GARLANDS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#CDB8F4]" aria-hidden="true" />
                <span className="text-xs font-medium text-[#716879]">
                  Pune · Temple Precinct
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-display font-heading text-[#291B35] mb-4">
                Fresh Flowers. Sacred Moments.
              </h1>

              {/* Supportive Lead Paragraph */}
              <p className="text-intro text-[#716879] mb-8">
                Daily fresh temple pooja flowers, handcrafted wedding varmala, bouquets, and ceremonial garlands right outside the temple in Pune. Check what’s in stock today or message us on WhatsApp to order ahead.
              </p>

              {/* Prominent Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                  id="hero-whatsapp-btn"
                >
                  <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  <span>Order on WhatsApp</span>
                </a>
                <Link
                  href="/flowers-and-occasions"
                  className="btn-secondary"
                  id="hero-occasions-btn"
                >
                  <span>Browse All Occasions</span>
                  <ArrowRight className="w-4 h-4 text-[#6546A5]" aria-hidden="true" />
                </Link>
              </div>

              {/* Live Hours & Sourcing Status Chip */}
              <div className="pt-2 w-full">
                <OpenStatusBadge />
              </div>
            </div>

            {/* Right Column: 6 cols Editorial Visual */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Subtle soft lavender offset decorative block */}
                <div
                  className="absolute -inset-3.5 bg-[#F0E9FC] rounded-[26px] -rotate-1 pointer-events-none border border-[#E6DDED]"
                  aria-hidden="true"
                />

                <div className="relative shadow-xl rounded-[20px] border border-[#E6DDED] overflow-hidden bg-[#FFFFFF]">
                  <SmartImage
                    src="/images/home/hero.webp"
                    alt="Fresh morning temple flower baskets with marigolds and jasmine garlands in Pune"
                    ratio="4:5"
                    radius="lg"
                    priority={true}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Corner Accent Sourcing Pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#291B35]/90 backdrop-blur-md text-[#FCFAF7] p-4 rounded-[14px] border border-white/10 flex items-center justify-between gap-3 shadow-md">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-[#F2C94C] font-semibold">
                        Daily Fresh Sourcing
                      </div>
                      <div className="text-sm font-medium text-white">
                        Flowers arrive at 5:00 AM from dawn growers
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#667C54] border-2 border-white/60 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (Directly under Hero) */}
      <TrustStrip />

      {/* 3. EARLY MORNING ROUTINE BANNER (Pale Lilac Panel) */}
      <section className="bg-[#F0E9FC]/50 py-12 border-b border-[#E6DDED]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-eyebrow text-[#6546A5] block mb-1">
                TEMPLE DARSHAN TIMINGS
              </span>
              <h2 className="font-heading text-2xl text-[#291B35]">
                Opening daily at 5:30 AM
              </h2>
            </div>
            <div className="md:col-span-2 text-[#716879] text-sm md:text-base leading-relaxed">
              We open before sunrise so devotees and families visiting the temple can collect crisp, freshly picked marigolds, durva grass, and fragrant mogra strings. Simply walk in or drop a WhatsApp message to reserve your morning pooja pack.
            </div>
          </div>
        </div>
      </section>

      {/* 4. OCCASIONS OVERVIEW (5 Curated Floral Cards) */}
      <section className="site-section bg-[#FCFAF7]" id="occasions-section">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="OCCASIONS & OFFERINGS"
              heading="Flowers for every sacred ritual and celebration"
              intro="Browse our five specialty arrangements. Each card links directly to WhatsApp with your selected occasion prefilled."
              className="mb-0"
            />
            <Link
              href="/flowers-and-occasions"
              className="btn-secondary self-start md:self-end"
            >
              <span>View full catalog details</span>
              <ArrowRight className="w-4 h-4 text-[#6546A5]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.occasions.map((occasion) => (
              <OccasionCard key={occasion.id} occasion={occasion} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. ADVANCE NOTICE FEATURE SPLIT (Pale Lilac Panel) */}
      <section className="site-section bg-[#F0E9FC]/60 border-y border-[#E6DDED]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual on left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative shadow-md rounded-[20px] overflow-hidden border border-[#E6DDED]">
                <SmartImage
                  src="/images/home/about-florist.webp"
                  alt="Artisan florist weaving fresh jasmine and marigold garlands in Pune"
                  ratio="4:5"
                  radius="lg"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Text on right */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-eyebrow text-[#6546A5] mb-2.5 font-semibold">
                GARLAND BOOKING GUIDELINE
              </span>
              <h2 className="text-h2 font-heading text-[#291B35] mb-4">
                Order garlands one day in advance
              </h2>
              <p className="text-intro text-[#716879] mb-4">
                Ceremonial wedding varmala, car decorations, and custom altar garlands require hand-woven precision and carefully sorted bloom stems.
              </p>
              <p className="text-sm md:text-base text-[#716879] mb-6 leading-relaxed">
                By notifying us one day prior on WhatsApp, our master garland weaver reserves the freshest batch of rose petals, jasmine, and tuberose at the wholesale morning mandi, crafting your garlands exactly to your preferred length and color balance.
              </p>

              {/* 3 Tick Points */}
              <div className="space-y-3 mb-8 w-full">
                <div className="flex items-start gap-3 text-sm text-[#291B35]">
                  <div className="w-5 h-5 rounded-full bg-[#6546A5] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Wholesale dawn sourcing ensures stems remain vibrant and aromatic</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#291B35]">
                  <div className="w-5 h-5 rounded-full bg-[#6546A5] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Custom length, flower variety, and zari border styling</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#291B35]">
                  <div className="w-5 h-5 rounded-full bg-[#6546A5] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Stored gently in moist wrap for pickup right before your ritual</span>
                </div>
              </div>

              <a
                href={garlandWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Book your garland on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT SHREE GANESH FLOWERS (Story & 3-Step Ordering) */}
      <section className="site-section bg-[#FCFAF7]">
        <div className="site-container">
          <SectionHeader
            eyebrow="TEMPLE-SIDE TRADITION IN PUNE"
            heading={siteContent.aboutContent.heading}
            intro="A neighborhood flower stall committed to fresh morning blooms and honest service."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-base text-[#716879] leading-relaxed">
              {siteContent.aboutContent.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-[14px] bg-[#FFFFFF] border border-[#E6DDED] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#6546A5] block mb-1">
                    Pickup Location
                  </span>
                  <p className="text-sm font-medium text-[#291B35]">
                    {siteContent.contact.address}
                  </p>
                </div>
                <div className="p-4 rounded-[14px] bg-[#FFFFFF] border border-[#E6DDED] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#6546A5] block mb-1">
                    Payment Method
                  </span>
                  <p className="text-sm font-medium text-[#291B35]">
                    Paid upon pickup at counter (Cash & UPI)
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="site-card p-6 md:p-8 space-y-4 bg-[#FFFFFF]">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#6546A5] block">
                  HOW ORDERING WORKS
                </span>
                <h3 className="font-heading text-xl text-[#291B35]">
                  Simple, direct & reliable
                </h3>
                <ol className="space-y-4 text-sm text-[#716879] pt-2">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#6546A5] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      1
                    </span>
                    <span>Browse our occasion types online or enquire about daily loose flower stock.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#6546A5] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      2
                    </span>
                    <span>Click WhatsApp to confirm your preferred occasion and pickup time.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#6546A5] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                      3
                    </span>
                    <span>Collect your fresh flowers directly at our shop counter and settle payment.</span>
                  </li>
                </ol>
                <div className="pt-2">
                  <Link href="/contact" className="btn-secondary w-full justify-center">
                    <span>View shop location & map</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEMPLE FLOWER CARE GUIDE */}
      <section className="site-section bg-[#F0E9FC]/40 border-t border-[#E6DDED]">
        <div className="site-container">
          <SectionHeader
            eyebrow="FLORAL CARE TIPS"
            heading="Keeping your ceremonial flowers fresh & vibrant"
            intro="Helpful practical tips for caring for fresh temple blossoms and garlands in Pune's climate."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.flowerCareGuide.map((guide, idx) => (
              <div
                key={idx}
                className="site-card p-6 md:p-8 flex flex-col"
              >
                <span className="w-9 h-9 rounded-[10px] bg-[#F0E9FC] text-[#6546A5] flex items-center justify-center font-bold text-sm mb-4 border border-[#E6DDED]">
                  {idx + 1}
                </span>
                <h3 className="font-heading text-lg font-semibold text-[#291B35] mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-[#716879] leading-relaxed">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION PREVIEW */}
      <section className="site-section bg-[#FCFAF7]">
        <div className="site-container">
          <SectionHeader
            eyebrow="COMMON QUESTIONS"
            heading="Ordering, morning hours & pickup details"
            intro="Everything you need to know about purchasing daily flowers and reserving advance garlands."
          />

          <div className="max-w-[800px] space-y-4">
            {siteContent.faqs.slice(0, 4).map((faq, idx) => (
              <details
                key={idx}
                className="group site-card p-5 md:p-6 transition-colors open:bg-[#F9F6FC]"
              >
                <summary className="font-heading text-lg font-semibold text-[#291B35] cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.question}</span>
                  <span className="text-[#6546A5] transition-transform duration-200 group-open:rotate-180 ml-4 flex-shrink-0 text-xl font-sans">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-[#716879] leading-relaxed pt-3 border-t border-[#E6DDED]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CLOSING CTA BAND */}
      <CTASection />
    </div>
  );
}
