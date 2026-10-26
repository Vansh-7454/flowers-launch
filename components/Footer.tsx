import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/content/site";
import { LogoIcon } from "@/components/Logo";

export function Footer() {
  const generalWhatsAppUrl = getWhatsAppUrl(
    "Hi Shree Ganesh Flowers, I'd like to ask what flowers are available today."
  );

  return (
    <footer className="bg-[#18281E] text-[#F7F4EE] border-t border-[#265239] transition-colors">
      <div className="site-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[#F7F4EE] hover:opacity-90 transition-opacity"
              aria-label={`${siteContent.brand.name} - Home`}
            >
              <div className="text-[#F3B278]">
                <LogoIcon className="w-9 h-9" />
              </div>
              <div className="leading-tight">
                <div className="font-heading text-xl font-bold tracking-wide text-[#F7F4EE]">
                  {siteContent.brand.name}
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#B3C4B8] font-medium">
                  {siteContent.brand.tradeSubtitle}
                </div>
              </div>
            </Link>

            <p className="text-sm text-[#B3C4B8] leading-relaxed max-w-sm">
              {siteContent.brand.tagline}. Handcrafted temple garlands, wedding varmala, and daily pooja flowers near the temple in Pune.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#265239]/60 text-xs text-[#F3B278] border border-[#265239]">
                <span className="w-2 h-2 rounded-full bg-[#F3B278]" aria-hidden="true" />
                <span>Orders confirmed on WhatsApp · Pay at pickup</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[#F7F4EE]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteContent.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#B3C4B8] hover:text-[#F3B278] transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/flowers-and-occasions#pooja-flowers"
                  className="text-[#B3C4B8] hover:text-[#F3B278] transition-colors"
                >
                  Daily Pooja Flowers
                </Link>
              </li>
              <li>
                <Link
                  href="/flowers-and-occasions#wedding-garlands"
                  className="text-[#B3C4B8] hover:text-[#F3B278] transition-colors"
                >
                  Wedding Garlands (Varmala)
                </Link>
              </li>
              <li>
                <Link
                  href="/flowers-and-occasions#car-decoration"
                  className="text-[#B3C4B8] hover:text-[#F3B278] transition-colors"
                >
                  Car Decoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[#F7F4EE]">
              Contact Shop
            </h3>
            <ul className="space-y-3 text-sm text-[#B3C4B8]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F3B278] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{siteContent.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F3B278] flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteContent.contact.phoneTel}`}
                  className="hover:text-[#F3B278] transition-colors"
                >
                  {siteContent.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#F3B278] flex-shrink-0" aria-hidden="true" />
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F3B278] transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp: {siteContent.contact.whatsappDisplay}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Daily Sourcing */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[#F7F4EE]">
              Early Morning Hours
            </h3>
            <div className="space-y-2 text-sm text-[#B3C4B8]">
              <div className="flex items-center gap-2 font-medium text-[#F7F4EE]">
                <Clock className="w-4 h-4 text-[#F3B278]" aria-hidden="true" />
                <span>{siteContent.contact.openingHoursDisplay}</span>
              </div>
              <p className="text-xs text-[#B3C4B8]">
                {siteContent.contact.daysOpen}
              </p>
              <p className="text-xs text-[#F3B278] font-medium pt-1">
                {siteContent.contact.morningNote}
              </p>
              <div className="pt-2">
                <a
                  href={siteContent.contact.mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[8px] bg-[#265239] hover:bg-[#1E422D] text-xs font-semibold text-[#FFFFFF] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Get directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#265239]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B3C4B8]">
          <p>
            © 2026 {siteContent.brand.name}, {siteContent.brand.city}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Daily fresh temple flowers & advance ceremonial garlands.
          </p>
        </div>
      </div>
    </footer>
  );
}
