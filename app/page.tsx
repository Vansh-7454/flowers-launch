import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Check, Sparkles, Flower2, Clock, MapPin, Wallet } from "lucide-react";
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

  const poojaWhatsAppUrl = getWhatsAppUrl(
    "Hi Shree Ganesh Flowers, I'd like to reserve a morning temple pooja pack for 5:30 AM darshan."
  );

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Full-Width Uninterrupted Lavender 3D Editorial Canvas) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#D7C5FF] via-[#CFB7FA] to-[#C4A3F7] pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-[#E2D5FF]">
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
              <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full bg-[#F1EBFF] border border-[#E2D5FF] text-[#291638] shadow-xs">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#D5FF32] shadow-[0_0_10px_#D5FF32]"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
                  Fresh Flowers & Handcrafted Garlands
                </span>
                <span className="text-xs text-[#746781] hidden sm:inline">
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
                  className="btn-primary min-h-[48px] text-base group w-full sm:w-auto justify-between sm:justify-center pl-6 pr-2.5"
                  id="hero-whatsapp-btn"
                >
                  <span>Order on WhatsApp</span>
                  <span className="btn-side-badge">
                    <MessageCircle className="w-4 h-4 text-[#291638]" aria-hidden="true" />
                  </span>
                </a>
                <Link
                  href="/flowers-and-occasions"
                  className="btn-secondary min-h-[48px] text-base group w-full sm:w-auto justify-between sm:justify-center pl-6 pr-2.5"
                  id="hero-occasions-btn"
                >
                  <span>Browse All Occasions</span>
                  <span className="btn-side-badge">
                    <ArrowRight className="w-4 h-4 text-[#291638]" aria-hidden="true" />
                  </span>
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

      {/* 3. EARLY MORNING ROUTINE BANNER (Luxury Editorial Feature Card) */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-[#F1EBFF] via-[#F8F5FF] to-[#FCFAFF] border-b border-[#E2D5FF]">
        <div className="site-container">
          <div className="relative rounded-[24px] bg-[#FCFAFF] border border-[#E2D5FF] p-6 sm:p-8 md:p-10 shadow-[0_16px_40px_rgba(185,154,255,0.14)] overflow-hidden">
            {/* Subtle decorative background gradient aura */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#D7C5FF]/30 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#D5FF32]/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Headline, Auspicious Badge, Live Darshan Status */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1EBFF] border border-[#E2D5FF] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" aria-hidden="true" />
                  <span className="text-eyebrow text-[#291638] font-bold tracking-[0.14em]">
                    TEMPLE DARSHAN TIMINGS
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#291638] font-bold tracking-tight mb-3">
                  Opening daily at 5:30 AM
                </h2>

                <p className="text-sm sm:text-base text-[#746781] leading-relaxed mb-5">
                  Fresh wholesale mandi arrivals ready before sunrise for devotees, morning aarti, and home rituals outside the temple gate.
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#291638] text-[#FCFAFF] text-xs font-semibold shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#D5FF32] animate-pulse" />
                    <span>Open 7 Days · 5:30 AM – 9:00 PM</span>
                  </span>
                  <a
                    href={poojaWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs py-1.5 pl-3.5 pr-1.5 group min-h-0 w-full sm:w-auto justify-between sm:justify-center"
                  >
                    <span>Reserve Morning Pack</span>
                    <span className="btn-side-badge w-6 h-6">
                      <MessageCircle className="w-3.5 h-3.5 text-[#291638]" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Column: 3 Sleek Visual Benefit Cards (Replacing the Wall of Text) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Benefit 1 */}
                <div className="p-4 sm:p-5 rounded-[18px] bg-[#F8F5FF] border border-[#E2D5FF] transition-all duration-300 hover:border-[#B99AFF] hover:shadow-xs">
                  <div className="w-9 h-9 rounded-[12px] bg-[#F1EBFF] border border-[#E2D5FF] flex items-center justify-center text-[#291638] mb-3 shadow-2xs">
                    <Sparkles className="w-4 h-4 text-[#7DA34A]" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#291638] mb-1">
                    Dawn Mandi Arrivals
                  </h3>
                  <p className="text-xs text-[#746781] leading-relaxed">
                    Crisp marigolds, holy red hibiscus & sweet mogra strings procured fresh at 4:30 AM.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="p-4 sm:p-5 rounded-[18px] bg-[#F8F5FF] border border-[#E2D5FF] transition-all duration-300 hover:border-[#B99AFF] hover:shadow-xs">
                  <div className="w-9 h-9 rounded-[12px] bg-[#F1EBFF] border border-[#E2D5FF] flex items-center justify-center text-[#291638] mb-3 shadow-2xs">
                    <Flower2 className="w-4 h-4 text-[#B99AFF]" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#291638] mb-1">
                    Pre-Darshan Ready
                  </h3>
                  <p className="text-xs text-[#746781] leading-relaxed">
                    Pre-sorted pooja packs & sacred durva grass ready for morning aarti devotees.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="p-4 sm:p-5 rounded-[18px] bg-[#F8F5FF] border border-[#E2D5FF] transition-all duration-300 hover:border-[#B99AFF] hover:shadow-xs">
                  <div className="w-9 h-9 rounded-[12px] bg-[#F1EBFF] border border-[#E2D5FF] flex items-center justify-center text-[#291638] mb-3 shadow-2xs">
                    <Clock className="w-4 h-4 text-[#291638]" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#291638] mb-1">
                    Walk In or Reserve
                  </h3>
                  <p className="text-xs text-[#746781] leading-relaxed">
                    Walk right up to our shop counter at the temple gate or message ahead on WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OCCASIONS OVERVIEW (5 Curated Floral Cards) */}
      <section className="site-section bg-gradient-to-b from-[#F8F5FF] via-[#F8F5FF] to-[#FCFAFF]" id="occasions-section">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="OCCASIONS & OFFERINGS"
              heading="Flowers for every sacred ritual and celebration"
              intro="Browse our five specialty arrangements handcrafted with fresh morning blooms for temple rituals, wedding ceremonies, and celebrations."
              className="mb-0"
            />
            <Link
              href="/flowers-and-occasions"
              className="btn-secondary self-start md:self-end group whitespace-nowrap flex-shrink-0"
            >
              <span>View full catalog details</span>
              <span className="btn-side-badge">
                <ArrowRight className="w-4 h-4 text-[#291638]" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.occasions.map((occasion) => (
              <OccasionCard
                key={occasion.id}
                occasion={occasion}
                featured={occasion.id === "wedding-garlands"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. ADVANCE NOTICE FEATURE SPLIT (Pale Lavender Panel with Chartreuse Accents) */}
      <section className="site-section bg-[#F1EBFF] border-y border-[#E2D5FF]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Visual on left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative shadow-md rounded-[22px] overflow-hidden border border-[#E2D5FF] bg-[#FCFAFF] transition-all duration-300 hover:shadow-xl hover:border-[#B99AFF]">
                <SmartImage
                  src="/images/home/about-florist.webp"
                  alt="Artisan florist weaving fresh jasmine and marigold garlands in Pune"
                  ratio="4:5"
                  radius="none"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Text on right */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" aria-hidden="true" />
                <span className="text-eyebrow text-[#291638] font-bold tracking-[0.16em]">
                  GARLAND BOOKING GUIDELINE
                </span>
              </div>
              <h2 className="text-h2 font-heading text-[#291638] mb-4 font-bold">
                Order garlands one day in advance
              </h2>
              <p className="text-intro text-[#746781] mb-4">
                Ceremonial wedding varmala, car decorations, and custom altar garlands require hand-woven precision and carefully sorted bloom stems.
              </p>
              <p className="text-sm md:text-base text-[#746781] mb-6 leading-relaxed">
                By notifying us one day prior on WhatsApp, our master garland weaver reserves the freshest batch of rose petals, jasmine, and tuberose at the wholesale morning mandi, crafting your garlands exactly to your preferred length and color balance.
              </p>

              {/* 3 Tick Points with Chartreuse Badges */}
              <div className="space-y-3 mb-8 w-full">
                <div className="flex items-start gap-3 text-sm text-[#291638]">
                  <div className="w-5 h-5 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Wholesale dawn sourcing ensures stems remain vibrant and aromatic</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#291638]">
                  <div className="w-5 h-5 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Custom length, flower variety, and zari border styling</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#291638]">
                  <div className="w-5 h-5 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>Stored gently in moist wrap for pickup right before your ritual</span>
                </div>
              </div>

              <a
                href={garlandWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp group w-full sm:w-auto justify-between sm:justify-center pl-6 pr-2.5"
              >
                <span>Book your garland on WhatsApp</span>
                <span className="btn-side-badge">
                  <MessageCircle className="w-4 h-4 text-[#291638]" />
                </span>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Story Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="mb-8">
                <p className="text-lg md:text-xl text-[#291638] font-medium leading-relaxed mb-4">
                  {siteContent.aboutContent.paragraphs[0]}
                </p>
                <div className="space-y-3.5 text-sm md:text-base text-[#746781] leading-relaxed">
                  <p>{siteContent.aboutContent.paragraphs[1]}</p>
                  <p>{siteContent.aboutContent.paragraphs[2]}</p>
                </div>
              </div>

              {/* Specification Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-[20px] bg-[#FCFAFF] border border-[#E2D5FF] shadow-xs hover:border-[#B99AFF] hover:shadow-sm transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[12px] bg-[#F1EBFF] border border-[#E2D5FF] flex items-center justify-center text-[#291638] flex-shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-5 h-5 text-[#291638]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#291638] block mb-1">
                      Pickup Location
                    </span>
                    <p className="text-sm font-medium text-[#746781] leading-snug">
                      {siteContent.contact.address}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-[20px] bg-[#FCFAFF] border border-[#E2D5FF] shadow-xs hover:border-[#B99AFF] hover:shadow-sm transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[12px] bg-[#F1EBFF] border border-[#E2D5FF] flex items-center justify-center text-[#291638] flex-shrink-0 mt-0.5 shadow-2xs">
                    <Wallet className="w-5 h-5 text-[#291638]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#291638] block mb-1">
                      Payment Method
                    </span>
                    <p className="text-sm font-medium text-[#746781] leading-snug">
                      Paid upon pickup at counter (Cash & UPI)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Ordering Card */}
            <div className="lg:col-span-5">
              <div className="site-card-info p-7 sm:p-8 md:p-9 space-y-6 bg-gradient-to-b from-[#FCFAFF] via-[#FCFAFF] to-[#F8F5FF] rounded-[24px] border border-[#E2D5FF] shadow-[0_12px_36px_rgba(185,154,255,0.14)]">
                <div>
                  <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#F1EBFF] border border-[#E2D5FF]">
                    <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" />
                    <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#291638]">
                      HOW ORDERING WORKS
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-[26px] text-[#291638] font-bold mt-1">
                    Simple, direct & reliable
                  </h3>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-[16px] bg-[#FCFAFF] border border-[#E2D5FF]/80 transition-all hover:border-[#B99AFF] hover:shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                      1
                    </span>
                    <span className="text-sm text-[#291638] leading-snug font-medium">
                      Browse our occasion types online or enquire about daily loose flower stock.
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-[16px] bg-[#FCFAFF] border border-[#E2D5FF]/80 transition-all hover:border-[#B99AFF] hover:shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                      2
                    </span>
                    <span className="text-sm text-[#291638] leading-snug font-medium">
                      Click WhatsApp to confirm your preferred occasion and pickup time.
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-[16px] bg-[#FCFAFF] border border-[#E2D5FF]/80 transition-all hover:border-[#B99AFF] hover:shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-[#291638] text-[#D5FF32] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                      3
                    </span>
                    <span className="text-sm text-[#291638] leading-snug font-medium">
                      Collect your fresh flowers directly at our shop counter and settle payment.
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/contact" className="btn-secondary w-full justify-between group pl-6 pr-2.5" id="about-contact-btn">
                    <span>View shop location & map</span>
                    <span className="btn-side-badge">
                      <ArrowRight className="w-4 h-4 text-[#291638]" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEMPLE FLOWER CARE GUIDE */}
      <section className="site-section bg-[#F1EBFF] border-t border-[#E2D5FF]">
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
                className="site-card group p-7 md:p-8 flex flex-col bg-[#FCFAFF] rounded-[22px] border border-[#E2D5FF] transition-all duration-300 hover:-translate-y-1 hover:border-[#B99AFF] hover:shadow-[0_16px_36px_-6px_rgba(185,154,255,0.25)] relative overflow-hidden"
              >
                <div className="w-11 h-11 rounded-[14px] bg-[#F1EBFF] text-[#291638] group-hover:bg-[#291638] group-hover:text-[#D5FF32] flex items-center justify-center font-heading text-lg font-bold mb-5 border border-[#E2D5FF] transition-colors shadow-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#291638] mb-2.5 group-hover:text-[#381D4C] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-[#746781] leading-relaxed">
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
                className="group site-card p-6 md:p-7 bg-[#FCFAFF] rounded-[18px] border border-[#E2D5FF] transition-all duration-300 hover:border-[#B99AFF] open:border-[#B99AFF] open:shadow-md"
              >
                <summary className="font-heading text-lg md:text-xl font-semibold text-[#291638] cursor-pointer flex items-center justify-between list-none select-none group-hover:text-[#381D4C] transition-colors">
                  <span>{faq.question}</span>
                  <span className="w-8 h-8 rounded-full bg-[#F1EBFF] border border-[#E2D5FF] flex items-center justify-center text-[#291638] transition-all duration-300 group-open:rotate-180 group-open:bg-[#291638] group-open:text-[#D5FF32] ml-4 flex-shrink-0 font-sans text-sm">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-[#746781] leading-relaxed pt-4 border-t border-[#E2D5FF]">
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
