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
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp w-full justify-between group pl-6 pr-2.5"
        id="contact-whatsapp-btn"
      >
        <span>Order on WhatsApp</span>
        <span className="btn-side-badge">
          <MessageCircle className="w-4 h-4 text-[#291638]" aria-hidden="true" />
        </span>
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        <a
          href={`tel:${siteContent.contact.phoneTel}`}
          className="btn-secondary w-full justify-between group pl-5 pr-2"
          id="contact-call-btn"
        >
          <span>Call Shop</span>
          <span className="btn-side-badge">
            <Phone className="w-4 h-4 text-[#291638]" />
          </span>
        </a>

        <a
          href={siteContent.contact.mapQueryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-full justify-between group pl-5 pr-2"
          id="contact-map-btn"
        >
          <span>Directions</span>
          <span className="btn-side-badge">
            <MapPin className="w-4 h-4 text-[#291638]" />
          </span>
        </a>
      </div>
    </div>
  );
}
