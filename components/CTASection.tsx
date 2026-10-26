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
    <section className="bg-[#291638] text-[#FCFAFF] site-section relative overflow-hidden">
      {/* Subtle lavender and chartreuse radial glow */}
      <div
        className="absolute inset-0 bg-radial-[circle_at_50%_0%] from-[#B99AFF]/20 via-[#291638]/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative fine orbital ring behind text */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[340px] pointer-events-none opacity-20"
        viewBox="0 0 700 300"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="350" cy="150" rx="330" ry="120" stroke="#D5FF32" strokeWidth="1.5" strokeDasharray="6 6" />
      </svg>

      <div className="site-container relative z-10 text-center max-w-[820px] mx-auto">
        <div className="inline-flex items-center gap-2 mb-3.5">
          <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_8px_#D5FF32]" />
          <span className="text-eyebrow text-[#D5FF32] font-bold tracking-[0.16em]">
            ORDER DIRECTLY · PAY AT PICKUP
          </span>
        </div>
        <h2 className="text-h2 font-heading tracking-tight text-[#FCFAFF] mb-4">
          {heading}
        </h2>
        <p className="text-intro text-[#B3A8C4] mx-auto mb-8 max-w-[620px]">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 rounded-[12px] bg-[#D5FF32] text-[#291638] font-bold text-base border border-[#C4ED20] hover:bg-[#C5F220] shadow-[0_4px_16px_-2px_rgba(213,255,50,0.4)] hover:shadow-[0_8px_24px_-2px_rgba(213,255,50,0.6)] transition-all cursor-pointer w-full sm:w-auto"
            id="cta-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5 text-[#291638]" aria-hidden="true" />
            <span>Order on WhatsApp</span>
          </a>
          <a
            href={`tel:${siteContent.contact.phoneTel}`}
            className="btn-secondary w-full sm:w-auto px-7 bg-[#FCFAFF] text-[#291638] border-[#DCCCF7] hover:bg-[#F1EBFF]"
            id="cta-call-btn"
          >
            <Phone className="w-5 h-5 text-[#291638]" aria-hidden="true" />
            <span>Call Shop: {siteContent.contact.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[#B99AFF]/25 flex items-center justify-center gap-2 text-xs text-[#B3A8C4]">
          <MapPin className="w-4 h-4 text-[#D5FF32]" aria-hidden="true" />
          <span>{siteContent.contact.address}</span>
        </div>
      </div>
    </section>
  );
}
