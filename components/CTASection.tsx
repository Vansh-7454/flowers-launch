import React from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/content/site";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
  prefillMessage?: string;
}

export function CTASection({
  heading = "Need fresh pooja flowers or custom function garlands?",
  subtext = "Message us directly on WhatsApp to confirm today's fresh blooms or reserve garlands for tomorrow. Settle payment when you pick up at the shop.",
  prefillMessage = "Hi Shree Ganesh Flowers, I'd like to ask about available flowers and order.",
}: CTASectionProps) {
  const whatsappUrl = getWhatsAppUrl(prefillMessage);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#D7C5FF] via-[#CFB7FA] to-[#C4A3F7] text-[#291638] site-section border-t border-[#E2D5FF]">
      {/* Ambient atmospheric studio lighting highlights (identical to Hero theme) */}
      <div
        className="absolute -top-32 right-1/4 w-[650px] h-[650px] rounded-full bg-[#FFFFFF]/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-10 w-[500px] h-[500px] rounded-full bg-[#F1EBFF]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="site-container relative z-10 text-center max-w-[820px] mx-auto">
        {/* Eyebrow Label with Electric Chartreuse Orb */}
        <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full bg-[#F1EBFF]/90 border border-[#E2D5FF] text-[#291638] shadow-xs backdrop-blur-sm">
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#D5FF32] shadow-[0_0_8px_#D5FF32]"
            aria-hidden="true"
          />
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#291638]">
            ORDER DIRECTLY · PAY AT PICKUP
          </span>
        </div>

        {/* H2 Display Editorial Headline */}
        <h2 className="text-h2 font-heading tracking-tight text-[#291638] mb-4 font-bold text-balance">
          {heading}
        </h2>

        {/* Supportive Editorial Paragraph */}
        <p className="text-intro text-[#291638]/85 mx-auto mb-8 max-w-[620px] leading-relaxed">
          {subtext}
        </p>

        {/* Action Buttons: High-Contrast Primary & Secondary with Chartreuse Side Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto justify-between sm:justify-center pl-6 pr-2.5 group shadow-md"
            id="cta-whatsapp-btn"
          >
            <span>Order on WhatsApp</span>
            <span className="btn-side-badge">
              <MessageCircle className="w-4 h-4 text-[#291638]" aria-hidden="true" />
            </span>
          </a>
          <a
            href={`tel:${siteContent.contact.phoneTel}`}
            className="btn-secondary w-full sm:w-auto justify-between sm:justify-center pl-6 pr-2.5 group bg-white shadow-xs"
            id="cta-call-btn"
          >
            <span className="truncate">Call Shop: {siteContent.contact.phoneDisplay}</span>
            <span className="btn-side-badge">
              <Phone className="w-4 h-4 text-[#291638]" />
            </span>
          </a>
        </div>

        {/* Pickup Location Note */}
        <div className="mt-8 pt-6 border-t border-[#291638]/15 flex items-center justify-center gap-2 text-xs font-medium text-[#291638]/75">
          <MapPin className="w-4 h-4 text-[#291638]" aria-hidden="true" />
          <span>{siteContent.contact.address}</span>
        </div>
      </div>
    </section>
  );
}
