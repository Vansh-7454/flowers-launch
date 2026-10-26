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
    <section className="bg-[#18281E] text-[#F7F4EE] site-section relative overflow-hidden">
      {/* Faint static warm glow in background */}
      <div
        className="absolute inset-0 bg-radial-[circle_at_50%_0%] from-[#CB5E1C]/10 via-[#265239]/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="site-container relative z-10 text-center max-w-[800px] mx-auto">
        <span className="text-eyebrow text-[#F3B278] block mb-3">
          ORDER DIRECTLY · PAY AT PICKUP
        </span>
        <h2 className="text-h2 font-heading tracking-tight text-[#F7F4EE] mb-4">
          {heading}
        </h2>
        <p className="text-intro text-[#B3C4B8] mx-auto mb-8 max-w-[620px]">
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
            className="btn-secondary w-full sm:w-auto px-7 bg-[#265239] text-[#FFFFFF] border-[#265239] hover:bg-[#1E422D]"
            id="cta-call-btn"
          >
            <Phone className="w-5 h-5 text-[#F3B278]" aria-hidden="true" />
            <span>Call Shop: {siteContent.contact.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[#265239]/60 flex items-center justify-center gap-2 text-xs text-[#B3C4B8]">
          <MapPin className="w-4 h-4 text-[#F3B278]" aria-hidden="true" />
          <span>{siteContent.contact.address}</span>
        </div>
      </div>
    </section>
  );
}
