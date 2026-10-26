import React from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/content/site";

interface ContactButtonsProps {
  prefillMessage?: string;
  className?: string;
}

export function ContactButtons({
  prefillMessage = "Hi Shree Ganesh Flowers, I'd like to ask what flowers are available today.",
  className = "",
}: ContactButtonsProps) {
  const whatsappUrl = getWhatsAppUrl(prefillMessage);

  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-[11px] bg-[#D5FF32] text-[#291638] font-bold text-base border border-[#C4ED20] hover:bg-[#C5F220] shadow-[0_4px_16px_-2px_rgba(213,255,50,0.35)] transition-all cursor-pointer flex-1 sm:flex-initial"
        id="contact-whatsapp-btn"
      >
        <MessageCircle className="w-5 h-5 text-[#291638]" aria-hidden="true" />
        <span>Order on WhatsApp</span>
      </a>

      <a
        href={`tel:${siteContent.contact.phoneTel}`}
        className="btn-primary flex-1 sm:flex-initial"
        id="contact-call-btn"
      >
        <Phone className="w-5 h-5 text-[#D5FF32]" aria-hidden="true" />
        <span>Call Shop</span>
      </a>

      <a
        href={siteContent.contact.mapQueryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary w-full sm:w-auto"
        id="contact-map-btn"
      >
        <MapPin className="w-5 h-5 text-[#291638]" aria-hidden="true" />
        <span>Get directions to shop</span>
      </a>
    </div>
  );
}
