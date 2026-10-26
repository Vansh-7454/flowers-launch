import React from "react";
import Image from "next/image";

interface SmartImageProps {
  src: string;
  alt: string;
  ratio?: "4:5" | "4:3" | "16:9" | "1:1" | "21:9";
  focalPoint?: string;
  radius?: "none" | "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
  sizes?: string;
  showOverlay?: boolean;
}

export function SmartImage({
  src,
  alt,
  ratio = "4:3",
  focalPoint = "center",
  radius = "md",
  priority = false,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  showOverlay = true,
}: SmartImageProps) {
  // Aspect ratio classes
  const ratioClasses = {
    "4:5": "aspect-[4/5]",
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-[16/9]",
    "1:1": "aspect-square",
    "21:9": "aspect-[21/9]",
  }[ratio];

  // Radius classes from design tokens
  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-[8px]",
    md: "rounded-[16px]",
    lg: "rounded-[24px]",
  }[radius];

  return (
    <div
      className={`relative overflow-hidden bg-[#ECE3D5] ${ratioClasses} ${radiusClasses} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition: focalPoint }}
        className="transition-transform duration-300 ease-out"
      />

      {/* Subtle 7% Primary Green Tone Overlay (Rule 10 for consistent atmospheric tonality across images) */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-[#265239]/[0.07] pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Subtle inner 1px border for depth */}
      <div
        className={`absolute inset-0 border border-black/5 pointer-events-none ${radiusClasses}`}
        aria-hidden="true"
      />
    </div>
  );
}
