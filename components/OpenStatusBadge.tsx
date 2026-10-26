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
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 5.5 * 3600000);

      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      // 5:30 AM = 330 minutes; 9:00 PM = 1260 minutes
      const openMinutes = 5 * 60 + 30;
      const closeMinutes = 21 * 60;

      const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

      if (isOpen) {
        setStatus({
          isOpen: true,
          text: "Open Now",
          subtext: "Open for morning poojas & garland orders until 9:00 PM",
        });
      } else {
        setStatus({
          isOpen: false,
          text: "Closed Now",
          subtext: "Opens at 5:30 AM daily for morning temple darshan",
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
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
          status.isOpen
            ? "bg-[#E9DEFF] text-[#291638] border-[#BDA0FF]/60"
            : "bg-[#F49A24]/10 text-[#291638] border-[#F49A24]/30"
        } ${className}`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen
              ? "bg-[#D5FF32] shadow-[0_0_8px_#D5FF32] ring-1 ring-[#291638]/20"
              : "bg-[#F49A24]"
          }`}
          aria-hidden="true"
        />
        <span>{status.text} · 5:30 AM</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3.5 p-3.5 sm:px-4 sm:py-3 rounded-[14px] border ${
        status.isOpen
          ? "bg-[#E9DEFF]/70 border-[#BDA0FF]/50 text-[#291638] shadow-xs"
          : "bg-[#E9DEFF]/70 border-[#F49A24]/40 text-[#291638] shadow-xs"
      } ${className}`}
    >
      <div className="flex-shrink-0 flex items-center justify-center">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            status.isOpen
              ? "bg-[#D5FF32] shadow-[0_0_10px_#D5FF32] ring-1 ring-[#291638]/20"
              : "bg-[#F49A24]"
          }`}
          aria-hidden="true"
        />
      </div>
      <div>
        <div className="text-sm font-bold flex items-center gap-2 text-[#291638]">
          <span>{status.text}</span>
          <span className="text-xs font-normal text-[#746781]">
            (5:30 AM – 9:00 PM IST)
          </span>
        </div>
        <div className="text-xs text-[#746781] mt-0.5">{status.subtext}</div>
      </div>
    </div>
  );
}
