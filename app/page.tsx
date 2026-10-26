import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/content/site";
import { SmartImage } from "@/components/SmartImage";
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
      {/* 1. HERO SECTION (Full-Width Uninterrupted Lavender 3D Editorial Canvas) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#D7C5FF] via-[#CFB7FA] to-[#C4A3F7] pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-[#DCCCF7]">
        {/* Ambient atmospheric studio lighting highlight */}
        <div
          className="absolute -top-32 right-1/4 w-[650px] h-[650px] rounded-full bg-[#FFFFFF]/40 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 left-10 w-[500px] h-[500px] rounded-full bg-[#F1EBFF]/50 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: ~44% Editorial Typography & Direct Actions */}
            <div className="lg:col-span-5 flex flex-col items-start z-10 animate-hero-fade-up">
              {/* Eyebrow Label with Electric Chartreuse Orb */}
              <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full bg-[#F1EBFF] border border-[#DCCCF7] text-[#291638] shadow-xs">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#D5FF32] shadow-[0_0_10px_#D5FF32]"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
                  Fresh Flowers & Handcrafted Garlands
                </span>
                <span className="text-xs text-[#716879] hidden sm:inline">
                  · Pune Temple Precinct
                </span>
              </div>

              {/* H1 Display Editorial Headline */}
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[90px] text-[#291638] mb-5 leading-[1.02] tracking-tight text-balance">
                Fresh Flowers.
                <br />
                Sacred Moments.
              </h1>

              {/* Supportive Editorial Paragraph */}
              <p className="text-base sm:text-lg text-[#291638]/85 mb-7 leading-relaxed max-w-[46ch]">
                Daily fresh temple pooja flowers, handcrafted wedding varmala, bouquets, and ceremonial garlands right outside the temple in Pune. Check what’s in stock today or message us on WhatsApp to order ahead.
              </p>

              {/* Action Buttons: High-Contrast Primary CTA + Secondary */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 rounded-[12px] bg-[#291638] text-white font-bold text-base border border-[#291638] hover:bg-[#3D2252] shadow-[0_4px_16px_-2px_rgba(41,22,56,0.35)] hover:shadow-[0_8px_24px_-2px_rgba(41,22,56,0.5)] hover:-translate-y-0.5 transition-all cursor-pointer group"
                  id="hero-whatsapp-btn"
                >
                  <MessageCircle className="w-5 h-5 text-[#D5FF32]" aria-hidden="true" />
                  <span>Order on WhatsApp</span>
                </a>
                <Link
                  href="/flowers-and-occasions"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-[12px] bg-[#FCFAFF]/80 hover:bg-[#FCFAFF] text-[#291638] font-semibold text-base border border-[#291638]/20 backdrop-blur-xs transition-all hover:-translate-y-0.5 shadow-xs"
                  id="hero-occasions-btn"
                >
                  <span>Browse All Occasions</span>
                  <ArrowRight className="w-4 h-4 text-[#291638]" aria-hidden="true" />
                </Link>
              </div>

              {/* Subtle Opening Hours & Mandi Sourcing Info */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-[#291638]/85 pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D5FF32] shadow-[0_0_8px_#D5FF32]" />
                  <span>Open daily 5:30 AM – 9:00 PM</span>
                </div>
                <span className="text-[#291638]/40 hidden sm:inline">·</span>
                <span>Near Temple Gate, Pune</span>
                <span className="text-[#291638]/40 hidden sm:inline">·</span>
                <span className="text-[#291638]/70">Dawn mandi arrivals</span>
              </div>
            </div>

            {/* Right Column: ~56% Dominant 3D Braided Arch Sculpture */}
            <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end animate-hero-fade-up-delay">
              <div className="relative w-full max-w-[580px] lg:max-w-none lg:w-[116%] lg:-mr-6 animate-gentle-float">
                {/* Luminous Chartreuse Orbital Ellipses & Floating Spheres */}
                <svg
                  className="absolute -inset-8 sm:-inset-14 w-[calc(100%+64px)] sm:w-[calc(100%+112px)] h-[calc(100%+64px)] sm:h-[calc(100%+112px)] pointer-events-none z-20 animate-orbital-glow"
                  viewBox="0 0 700 620"
                  fill="none"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="350"
                    cy="310"
                    rx="315"
                    ry="155"
                    stroke="#D5FF32"
                    strokeWidth="1.75"
                    strokeDasharray="8 6"
                    transform="rotate(-18 350 310)"
                    opacity="0.9"
                  />
                  <ellipse
                    cx="350"
                    cy="310"
                    rx="265"
                    ry="125"
                    stroke="#D5FF32"
                    strokeWidth="1"
                    transform="rotate(12 350 310)"
                    opacity="0.3"
                  />
                  <circle
                    cx="95"
                    cy="235"
                    r="10"
                    fill="#D5FF32"
                    filter="drop-shadow(0 0 12px rgba(213,255,50,0.95))"
                  />
                  <circle
                    cx="595"
                    cy="400"
                    r="13"
                    fill="#D5FF32"
                    filter="drop-shadow(0 0 16px rgba(213,255,50,0.95))"
                  />
                </svg>

                {/* Studio soft glow behind transparent 3D sculpture */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] h-[112%] rounded-full bg-radial from-[#FFFFFF]/55 via-[#E6D8FF]/35 to-transparent blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* 3D Braided Arch Artwork - Truly transparent background blending seamlessly into lavender canvas */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/home/hero-braided-arch-transparent.webp"
                    alt="Glossy lavender 3D braided floral arch with peach-pink roses, turquoise tropical leaves, black-and-white geometric pedestals, and floating golden spheres"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="object-contain drop-shadow-[0_24px_48px_rgba(41,22,56,0.22)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (Directly under Hero) */}
      <TrustStrip />

      {/* 3. EARLY MORNING ROUTINE BANNER (Pale Lavender Panel) */}
      <section className="bg-[#F1EBFF] py-12 border-b border-[#DCCCF7]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-eyebrow text-[#291638] block mb-1">
                TEMPLE DARSHAN TIMINGS
              </span>
              <h2 className="font-heading text-2xl text-[#291638]">
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
      <section className="site-section bg-[#FCFAFF]" id="occasions-section">
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
              <ArrowRight className="w-4 h-4 text-[#291638]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.occasions.map((occasion) => (
              <OccasionCard key={occasion.id} occasion={occasion} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. ADVANCE NOTICE FEATURE SPLIT (Pale Lavender Panel with Chartreuse Accents) */}
      <section className="site-section bg-[#F1EBFF] border-y border-[#DCCCF7]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual on left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative shadow-md rounded-[20px] overflow-hidden border border-[#DCCCF7]">
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
              <span className="text-eyebrow text-[#291638] mb-2.5 font-bold tracking-[0.16em]">
                GARLAND BOOKING GUIDELINE
              </span>
              <h2 className="text-h2 font-heading text-[#291638] mb-4">
                Order garlands one day in advance
              </h2>
              <p className="text-intro text-[#716879] mb-4">
                Ceremonial wedding varmala, car decorations, and custom altar garlands require hand-woven precision and carefully sorted bloom stems.
              </p>
              <p className="text-sm md:text-base text-[#716879] mb-6 leading-relaxed">
                By notifying us one day prior on WhatsApp, our master garland weaver reserves the freshest batch of rose petals, jasmine, and tuberose at the wholesale morning mandi, crafting your garlands exactly to your preferred length and color balance.
              </p>

              {/* 3 Tick Points with Chartreuse Badges */}
              <div className="space-y-3 mb-8 w-full">
                <div className="flex items-start gap-3 text-sm text-[#291638]">
                  <div className="w-5 h-5 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Wholesale dawn sourcing ensures stems remain vibrant and aromatic</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#291638]">
                  <div className="w-5 h-5 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Custom length, flower variety, and zari border styling</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#291638]">
                  <div className="w-5 h-5 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
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
                <MessageCircle className="w-4 h-4 text-[#D5FF32]" />
                <span>Book your garland on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT SHREE GANESH FLOWERS (Story & 3-Step Ordering) */}
      <section className="site-section bg-[#FCFAFF]">
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
                <div className="p-4 rounded-[16px] bg-[#FCFAFF] border border-[#DCCCF7] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#291638] block mb-1">
                    Pickup Location
                  </span>
                  <p className="text-sm font-medium text-[#291638]">
                    {siteContent.contact.address}
                  </p>
                </div>
                <div className="p-4 rounded-[16px] bg-[#FCFAFF] border border-[#DCCCF7] shadow-xs">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#291638] block mb-1">
                    Payment Method
                  </span>
                  <p className="text-sm font-medium text-[#291638]">
                    Paid upon pickup at counter (Cash & UPI)
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="site-card p-6 md:p-8 space-y-4 bg-[#FCFAFF]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" />
                  <span className="text-xs uppercase tracking-wider font-bold text-[#291638]">
                    HOW ORDERING WORKS
                  </span>
                </div>
                <h3 className="font-heading text-xl text-[#291638]">
                  Simple, direct & reliable
                </h3>
                <ol className="space-y-4 text-sm text-[#716879] pt-2">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      1
                    </span>
                    <span>Browse our occasion types online or enquire about daily loose flower stock.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      2
                    </span>
                    <span>Click WhatsApp to confirm your preferred occasion and pickup time.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-xs flex-shrink-0">
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
      <section className="site-section bg-[#F1EBFF] border-t border-[#DCCCF7]">
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
                className="site-card p-6 md:p-8 flex flex-col bg-[#FCFAFF]"
              >
                <div className="w-10 h-10 rounded-[12px] bg-[#F1EBFF] text-[#291638] flex items-center justify-center font-bold text-sm mb-4 border border-[#DCCCF7]">
                  0{idx + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#291638] mb-2">
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
      <section className="site-section bg-[#FCFAFF]">
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
                className="group site-card p-5 md:p-6 transition-colors open:bg-[#FCFAFF]"
              >
                <summary className="font-heading text-lg font-semibold text-[#291638] cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.question}</span>
                  <span className="text-[#291638] transition-transform duration-200 group-open:rotate-180 ml-4 flex-shrink-0 text-xl font-sans">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-[#716879] leading-relaxed pt-3 border-t border-[#DCCCF7]">
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
