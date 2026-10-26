import React from "react";
import { MessageCircle, Flower2, Sparkles, Gift, Car, HeartHandshake, Clock } from "lucide-react";
import { OccasionItem, getWhatsAppUrl } from "@/content/site";
import { SmartImage } from "@/components/SmartImage";

interface OccasionCardProps {
  occasion: OccasionItem;
  featured?: boolean;
}

export function OccasionCard({ occasion, featured = false }: OccasionCardProps) {
  const whatsappUrl = getWhatsAppUrl(occasion.whatsappPrefill);

  // Map icon name to Lucide icon component with strokeWidth 1.5, 24px in primary green inside a soft 48px tile
  const renderIcon = () => {
    const props = { className: "w-6 h-6 text-[#265239]", strokeWidth: 1.5 };
    switch (occasion.iconName) {
      case "Flower2":
        return <Flower2 {...props} aria-hidden="true" />;
      case "Sparkles":
        return <Sparkles {...props} aria-hidden="true" />;
      case "Gift":
        return <Gift {...props} aria-hidden="true" />;
      case "Car":
        return <Car {...props} aria-hidden="true" />;
      case "HeartHandshake":
        return <HeartHandshake {...props} aria-hidden="true" />;
      default:
        return <Flower2 {...props} aria-hidden="true" />;
    }
  };

  const isGarland = occasion.id === "wedding-garlands" || occasion.id === "car-decoration";

  return (
    <article
      id={occasion.id}
      className={`site-card flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg ${
        featured ? "border-[#265239]/40 bg-[#FAF4EB]" : ""
      }`}
    >
      {/* Visual Image */}
      <div className="relative">
        <SmartImage
          src={occasion.image.src}
          alt={occasion.image.alt}
          ratio="4:3"
          radius="none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Advance Notice Ribbon for Garlands */}
        {isGarland && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-[#18281E]/90 text-white text-xs font-medium shadow-sm backdrop-blur-sm border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#F3B278]" aria-hidden="true" />
              <span>Order 1 day in advance</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Header with Icon Tile */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-[12px] bg-[#ECE3D5] flex items-center justify-center flex-shrink-0 border border-[#E3D7C5]"
            aria-hidden="true"
          >
            {renderIcon()}
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.12em] font-semibold text-[#CB5E1C] block">
              {occasion.subtitle}
            </span>
            <h3 className="font-heading text-xl md:text-2xl text-[#231A14] font-semibold mt-0.5">
              {occasion.title}
            </h3>
          </div>
        </div>

        {/* Summary */}
        <p className="text-[#63554A] text-sm md:text-base leading-relaxed mb-5">
          {occasion.summary}
        </p>

        {/* Typical Flowers list */}
        <div className="mb-6 pt-4 border-t border-[#E3D7C5]/70">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#231A14] block mb-2">
            Fresh flower elements:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {occasion.keyFlowers.map((flower) => (
              <span
                key={flower}
                className="px-2.5 py-1 rounded-[6px] bg-[#ECE3D5]/80 text-[#231A14] text-xs font-medium border border-[#E3D7C5]"
              >
                {flower}
              </span>
            ))}
          </div>
        </div>

        {/* Advance Notice Note */}
        <div className="mt-auto mb-6 p-3 rounded-[8px] bg-[#ECE3D5]/50 border border-[#E3D7C5] text-xs text-[#63554A]">
          <strong className="text-[#231A14] font-semibold">Timing note: </strong>
          {occasion.advanceNotice}
        </div>

        {/* WhatsApp Direct Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent w-full justify-center group"
          id={`order-${occasion.id}-btn`}
        >
          <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
          <span>Order {occasion.title} on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
