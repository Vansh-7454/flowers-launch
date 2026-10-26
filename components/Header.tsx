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
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  const generalWhatsAppUrl = getWhatsAppUrl(
    "Hi Shree Ganesh Flowers, I'd like to enquire about today's fresh flowers and garlands."
  );

  return (
    <>
      <header className="sticky top-0 z-40 h-[64px] md:h-[72px] bg-[#FCFAFF]/95 backdrop-blur-md border-b border-[#E2D5FF] transition-colors">
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
                      : "text-[#746781] hover:text-[#291638]"
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
              className="btn-whatsapp h-[44px] pl-4 pr-1.5 py-0 min-h-0 text-sm group"
              id="header-whatsapp-btn"
            >
              <span>Order on WhatsApp</span>
              <span className="btn-side-badge w-7 h-7">
                <MessageCircle className="w-3.5 h-3.5 text-[#291638]" />
              </span>
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-[#291638] text-[#FCFAFF] shadow-xs hover:bg-[#381D4C] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5FF32] group"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#D5FF32] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] border border-[#E2D5FF] bg-[#FCFAFF] text-[#291638] hover:bg-[#F1EBFF] transition-colors"
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
          className="fixed inset-x-0 bottom-0 top-[64px] z-50 bg-[#FCFAFF] flex flex-col px-5 py-4 border-t border-[#E2D5FF] overflow-y-auto overscroll-contain"
        >
          <div className="mb-3.5">
            <OpenStatusBadge />
          </div>

          <nav className="flex flex-col gap-2">
            {siteContent.nav.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2.5 px-4 rounded-[12px] font-medium transition-colors ${
                    isActive
                      ? "bg-[#291638] text-[#FCFAFF] font-semibold"
                      : "text-[#291638] bg-[#F1EBFF] border border-[#E2D5FF] hover:bg-[#D7C5FF]/40"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#E2D5FF] flex flex-col gap-2.5">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-between group pl-6 pr-2.5"
            >
              <span>Order on WhatsApp</span>
              <span className="btn-side-badge">
                <MessageCircle className="w-4 h-4 text-[#291638]" />
              </span>
            </a>
            <a
              href={`tel:${siteContent.contact.phoneTel}`}
              className="btn-secondary w-full justify-between group pl-6 pr-2.5"
            >
              <span className="truncate">Call Shop: {siteContent.contact.phoneDisplay}</span>
              <span className="btn-side-badge">
                <Phone className="w-4 h-4 text-[#291638]" />
              </span>
            </a>
          </div>

          <div className="mt-auto pt-3 text-[11px] text-[#746781] leading-tight">
            <p className="font-semibold text-[#291638]">
              {siteContent.brand.name}
            </p>
            <p className="mt-0.5">{siteContent.contact.address}</p>
            <p className="mt-0.5 font-medium text-[#291638]">
              {siteContent.contact.openingHoursDisplay} · Daily
            </p>
          </div>
        </div>
      )}
    </>
  );
}
