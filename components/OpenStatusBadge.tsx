"use client";

import React, { useEffect, useState } from "react";
import { siteContent } from "@/content/site";

interface OpenStatusBadgeProps {
  compact?: boolean;
  className?: string;
}

export function OpenStatusBadge({
  compact = false,
  className = "",
}: OpenStatusBadgeProps) {
  // Safe default for SSR hydration
  const [status, setStatus] = useState<{
    isOpen: boolean;
    text: string;
    subtext: string;
  }>({
    isOpen: true,
    text: "Open Now",
    subtext: `From ${siteContent.contact.openingHoursDisplay}`,
  });

  useEffect(() => {
    function checkShopStatus() {
      // Calculate current time in Pune / Indian Standard Time (UTC+5:30)
      const now = new Date();
      // IST is UTC + 5.5 hours
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 5.5 * 3600000);

      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      // 5:30 AM = 5 * 60 + 30 = 330 minutes
      const openMinutes = 5 * 60 + 30;
      // 9:00 PM = 21 * 60 = 1260 minutes
      const closeMinutes = 21 * 60;

      const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

      if (isOpen) {
        setStatus({
          isOpen: true,
          text: "Open Now",
          subtext: "Open for morning poojas & orders until 9:00 PM",
        });
      } else {
        setStatus({
          isOpen: false,
          text: "Closed Now",
          subtext: "Opens at 5:30 AM daily for morning pooja flowers",
        });
      }
    }

    checkShopStatus();
    const interval = setInterval(checkShopStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
          status.isOpen
            ? "bg-[#265239]/10 text-[#265239] border-[#265239]/20"
            : "bg-[#CB5E1C]/10 text-[#CB5E1C] border-[#CB5E1C]/20"
        } ${className}`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? "bg-[#265239]" : "bg-[#CB5E1C]"
          }`}
          aria-hidden="true"
        />
        <span>{status.text} · 5:30 AM</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 p-3 sm:px-4 sm:py-2.5 rounded-[8px] border ${
        status.isOpen
          ? "bg-[#F5EFE6] border-[#265239]/30 text-[#231A14]"
          : "bg-[#F5EFE6] border-[#CB5E1C]/30 text-[#231A14]"
      } ${className}`}
    >
      <div className="flex-shrink-0 flex items-center justify-center">
        <span
          className={`w-3 h-3 rounded-full ${
            status.isOpen ? "bg-[#265239]" : "bg-[#CB5E1C]"
          }`}
          aria-hidden="true"
        />
      </div>
      <div>
        <div className="text-sm font-semibold flex items-center gap-2">
          <span>{status.text}</span>
          <span className="text-xs font-normal text-[#63554A]">
            (5:30 AM – 9:00 PM IST)
          </span>
        </div>
        <div className="text-xs text-[#63554A] mt-0.5">{status.subtext}</div>
      </div>
    </div>
  );
}
