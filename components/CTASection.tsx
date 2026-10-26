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
    <section className="bg-[#291B35] text-[#FCFAF7] site-section relative overflow-hidden">
      {/* Subtle lavender and marigold radial glow */}
      <div
        className="absolute inset-0 bg-radial-[circle_at_50%_0%] from-[#CDB8F4]/15 via-[#6546A5]/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="site-container relative z-10 text-center max-w-[800px] mx-auto">
        <span className="text-eyebrow text-[#F2C94C] block mb-3 font-semibold tracking-[0.14em]">
          ORDER DIRECTLY · PAY AT PICKUP
        </span>
        <h2 className="text-h2 font-heading tracking-tight text-[#FCFAF7] mb-4">
          {heading}
        </h2>
        <p className="text-intro text-[#D8CEE2] mx-auto mb-8 max-w-[620px]">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent w-full sm:w-auto px-8"
            id="cta-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
            <span>Order on WhatsApp</span>
          </a>
          <a
            href={`tel:${siteContent.contact.phoneTel}`}
            className="btn-secondary w-full sm:w-auto px-7 bg-[#6546A5] text-[#FFFFFF] border-[#6546A5] hover:bg-[#52368B]"
            id="cta-call-btn"
          >
            <Phone className="w-5 h-5 text-[#F2C94C]" aria-hidden="true" />
            <span>Call Shop: {siteContent.contact.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[#6546A5]/30 flex items-center justify-center gap-2 text-xs text-[#D8CEE2]">
          <MapPin className="w-4 h-4 text-[#F2C94C]" aria-hidden="true" />
          <span>{siteContent.contact.address}</span>
        </div>
      </div>
    </section>
  );
}
