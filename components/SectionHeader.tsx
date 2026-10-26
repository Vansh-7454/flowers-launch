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
          className={`text-eyebrow mb-2.5 font-semibold tracking-[0.14em] uppercase ${
            isDark ? "text-[#F2C94C]" : "text-[#6546A5]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-h2 font-heading tracking-tight mb-3.5 ${
          isDark ? "text-[#FCFAF7]" : "text-[#291B35]"
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`text-intro ${
            isDark ? "text-[#D8CEE2]" : "text-[#716879]"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
