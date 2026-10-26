import React from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  height?: number;
}

export function LogoIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Central Bindu Dot */}
      <circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none" />
      {/* Sacred Inner Ring */}
      <circle cx="24" cy="24" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      
      {/* North & South Petals */}
      <path
        d="M24 16.5 C20.5 12 20.5 7 24 4 C27.5 7 27.5 12 24 16.5 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 31.5 C20.5 36 20.5 41 24 44 C27.5 41 27.5 36 24 31.5 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* East & West Petals */}
      <path
        d="M31.5 24 C36 20.5 41 20.5 44 24 C41 27.5 36 27.5 31.5 24 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 24 C12 20.5 7 20.5 4 24 C7 27.5 12 27.5 16.5 24 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Diagonal Petals */}
      <path
        d="M29.3 18.7 C33.5 16.5 37 14 38.1 17.5 C36 21 33.5 22.5 29.3 18.7 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.7 29.3 C14.5 31.5 11 34 9.9 30.5 C12 27 14.5 25.5 18.7 29.3 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M29.3 29.3 C33.5 31.5 37 34 35.5 36.5 C32 38 29.5 35.5 29.3 29.3 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.7 18.7 C14.5 16.5 11 14 12.5 11.5 C16 10 18.5 12.5 18.7 18.7 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  variant = "full",
  className = "",
}: LogoProps) {
  if (variant === "icon") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center text-inherit hover:opacity-90 transition-opacity ${className}`}
        aria-label={`${siteContent.brand.name} - Home`}
      >
        <LogoIcon className="w-8 h-8 md:w-9 md:h-9" />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 text-inherit no-underline group ${className}`}
      aria-label={`${siteContent.brand.name} - Home`}
    >
      <div className="flex-shrink-0 transition-transform duration-150 group-hover:scale-105">
        <LogoIcon className="w-8 h-8 md:w-9 md:h-9 text-current" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-heading text-[17px] md:text-[19px] font-semibold tracking-wide text-current">
          {siteContent.brand.name}
        </span>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-medium opacity-80 text-current mt-1">
          {siteContent.brand.tradeSubtitle}
        </span>
      </div>
    </Link>
  );
}
