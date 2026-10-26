import React from "react";
import { Sparkles, Calendar, CheckCircle2, Clock } from "lucide-react";
import { siteContent } from "@/content/site";

export function TrustStrip() {
  const icons = [
    <Sparkles key="1" className="w-4 h-4 text-[#6546A5] flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />,
    <Calendar key="2" className="w-4 h-4 text-[#6546A5] flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />,
    <CheckCircle2 key="3" className="w-4 h-4 text-[#6546A5] flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />,
    <Clock key="4" className="w-4 h-4 text-[#6546A5] flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />,
  ];

  return (
    <div className="w-full bg-[#F0E9FC]/70 border-y border-[#E6DDED] py-5">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {siteContent.trustStrip.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm font-medium text-[#291B35]"
            >
              <div className="w-8 h-8 rounded-full bg-[#FFFFFF] flex items-center justify-center flex-shrink-0 border border-[#E6DDED] shadow-xs">
                {icons[index % icons.length]}
              </div>
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
