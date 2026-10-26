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

  // Line icon with stroke width 1.5 in Royal Plum
  const renderIcon = () => {
    const props = { className: "w-5 h-5 text-[#6546A5]", strokeWidth: 1.5 };
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
      className={`site-card flex flex-col overflow-hidden ${
        featured ? "border-[#CDB8F4] bg-[#FFFFFF] ring-1 ring-[#CDB8F4]/50" : ""
      }`}
    >
      {/* Product Photography */}
      <div className="relative">
        <SmartImage
          src={occasion.image.src}
          alt={occasion.image.alt}
          ratio="4:3"
          radius="none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Advance Notice Pill for Garlands */}
        {isGarland && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-[#291B35]/90 text-white text-xs font-medium shadow-xs backdrop-blur-sm border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#F2C94C]" aria-hidden="true" />
              <span>Order 1 day in advance</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Category & Title */}
        <div className="flex items-start gap-3.5 mb-4">
          <div
            className="w-11 h-11 rounded-[12px] bg-[#F0E9FC] flex items-center justify-center flex-shrink-0 border border-[#E6DDED]"
            aria-hidden="true"
          >
            {renderIcon()}
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#6546A5] block">
              {occasion.subtitle}
            </span>
            <h3 className="font-heading text-xl md:text-2xl text-[#291B35] font-semibold mt-0.5">
              {occasion.title}
            </h3>
          </div>
        </div>

        {/* Product Description */}
        <p className="text-[#716879] text-sm leading-relaxed mb-5">
          {occasion.summary}
        </p>

        {/* Fresh Flower Stems */}
        <div className="mb-5 pt-4 border-t border-[#E6DDED]">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#291B35] block mb-2">
            Fresh flower elements:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {occasion.keyFlowers.map((flower) => (
              <span
                key={flower}
                className="px-2.5 py-1 rounded-[6px] bg-[#F0E9FC]/60 text-[#291B35] text-xs font-medium border border-[#E6DDED]"
              >
                {flower}
              </span>
            ))}
          </div>
        </div>

        {/* Timing Guideline */}
        <div className="mt-auto mb-6 p-3 rounded-[10px] bg-[#F0E9FC]/40 border border-[#E6DDED] text-xs text-[#716879]">
          <strong className="text-[#291B35] font-semibold">Timing note: </strong>
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
          <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
          <span>Order {occasion.title} on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
