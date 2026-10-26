"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, Phone } from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/content/site";
import { Logo } from "@/components/Logo";
import { OpenStatusBadge } from "@/components/OpenStatusBadge";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const generalWhatsAppUrl = getWhatsAppUrl(
    "Hi Shree Ganesh Flowers, I'd like to enquire about today's fresh flowers and garlands."
  );

  return (
    <>
      <header className="sticky top-0 z-40 h-[64px] md:h-[72px] bg-[#FCFAFF]/95 backdrop-blur-md border-b border-[#DCCCF7] transition-colors">
        <div className="site-container h-full flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Logo variant="full" />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {siteContent.nav.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.9375rem] font-medium py-1.5 transition-colors relative flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#291638] font-bold"
                      : "text-[#716879] hover:text-[#291638]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]"
                      aria-hidden="true"
                    />
                  )}
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#291638] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Live Shop Status & Polished Deep-Plum WhatsApp Action */}
          <div className="hidden lg:flex items-center gap-4">
            <OpenStatusBadge compact />
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-[42px] px-5 rounded-[12px] bg-[#291638] text-white hover:bg-[#3D2252] font-semibold text-sm border border-[#291638] shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#291638]"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 text-[#D5FF32]" aria-hidden="true" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-[#291638] text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#291638]"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#D5FF32]" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] border border-[#DCCCF7] bg-[#FCFAFF] text-[#291638]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[64px] z-50 bg-[#FCFAFF] flex flex-col p-6 border-t border-[#DCCCF7] overflow-y-auto"
        >
          <div className="mb-6">
            <OpenStatusBadge />
          </div>

          <nav className="flex flex-col gap-3">
            {siteContent.nav.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg py-3 px-4 rounded-[12px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#291638] text-white font-semibold"
                      : "text-[#291638] bg-[#F1EBFF] border border-[#DCCCF7] hover:bg-[#D7C5FF]/30"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#DCCCF7] flex flex-col gap-3">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Order on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteContent.contact.phoneTel}`}
              className="btn-secondary w-full justify-center"
            >
              <Phone className="w-5 h-5 text-[#6546A5]" aria-hidden="true" />
              <span>Call Shop: {siteContent.contact.phoneDisplay}</span>
            </a>
          </div>

          <div className="mt-auto pt-6 text-xs text-[#716879]">
            <p className="font-semibold text-[#291B35]">
              {siteContent.brand.name}
            </p>
            <p className="mt-1">{siteContent.contact.address}</p>
            <p className="mt-1 font-medium text-[#6546A5]">
              {siteContent.contact.openingHoursDisplay} · Daily
            </p>
          </div>
        </div>
      )}
    </>
  );
}
