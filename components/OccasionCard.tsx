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

  // Line icon with stroke width 1.75 in Deep Plum
  const renderIcon = () => {
    const props = { className: "w-5 h-5 text-[#291638]", strokeWidth: 1.75 };
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
      className={`site-card group flex flex-col overflow-hidden bg-[#FCFAFF] rounded-[20px] ${
        featured ? "border-[#B99AFF] ring-1 ring-[#B99AFF]/50 shadow-md" : ""
      }`}
    >
      {/* Product Photography with Subtle Hover Zoom */}
      <div className="relative overflow-hidden rounded-t-[20px]">
        <div className="transition-transform duration-500 ease-out group-hover:scale-105">
          <SmartImage
            src={occasion.image.src}
            alt={occasion.image.alt}
            ratio="4:3"
            radius="none"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Advance Notice Pill for Garlands in Deep Plum & Electric Chartreuse */}
        {isGarland && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] bg-[#291638]/92 text-[#FCFAFF] text-xs font-semibold shadow-md backdrop-blur-md border border-[#B99AFF]/30">
              <Clock className="w-3.5 h-3.5 text-[#D5FF32]" aria-hidden="true" />
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
            className="w-11 h-11 rounded-[14px] bg-[#F1EBFF] flex items-center justify-center flex-shrink-0 border border-[#E2D5FF] shadow-xs"
            aria-hidden="true"
          >
            {renderIcon()}
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-[#291638] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5FF32] shadow-[0_0_4px_#D5FF32]" />
              {occasion.subtitle}
            </span>
            <h3 className="font-heading text-xl md:text-2xl text-[#291638] font-bold mt-1">
              {occasion.title}
            </h3>
          </div>
        </div>

        {/* Product Description */}
        <p className="text-[#746781] text-sm leading-relaxed mb-5">
          {occasion.summary}
        </p>

        {/* Fresh Flower Stems */}
        <div className="mb-5 pt-4 border-t border-[#E2D5FF]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#291638] block mb-2">
            Fresh flower elements:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {occasion.keyFlowers.map((flower) => (
              <span
                key={flower}
                className="px-2.5 py-1 rounded-[8px] bg-[#F1EBFF] text-[#291638] text-xs font-medium border border-[#E2D5FF]"
              >
                {flower}
              </span>
            ))}
          </div>
        </div>

        {/* Timing Guideline */}
        <div className="mt-auto mb-6 p-3.5 rounded-[14px] bg-[#F1EBFF] border border-[#E2D5FF] text-xs text-[#746781]">
          <strong className="text-[#291638] font-bold">Timing note: </strong>
          {occasion.advanceNotice}
        </div>

        {/* WhatsApp Direct Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center group"
          id={`order-${occasion.id}-btn`}
        >
          <MessageCircle className="w-4 h-4 text-[#D5FF32]" aria-hidden="true" />
          <span>Order {occasion.title} on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
