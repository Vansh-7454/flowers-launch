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
    <div className={`max-w-[640px] mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <div
          className={`text-eyebrow mb-3 ${
            isDark ? "text-[#F3B278]" : "text-[#CB5E1C]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-h2 font-heading tracking-tight mb-4 ${
          isDark ? "text-[#F7F4EE]" : "text-[#231A14]"
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p
          className={`text-intro ${
            isDark ? "text-[#B3C4B8]" : "text-[#63554A]"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
