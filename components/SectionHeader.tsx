import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-[660px] mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-eyebrow mb-2.5 font-bold tracking-[0.16em] uppercase ${
            isDark ? "text-[#D5FF32]" : "text-[#291638]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2
        className={`text-h2 font-heading tracking-tight mb-3.5 ${
          isDark ? "text-[#FCFAFF]" : "text-[#291638]"
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`text-intro ${
            isDark ? "text-[#B3A8C4]" : "text-[#746781]"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
