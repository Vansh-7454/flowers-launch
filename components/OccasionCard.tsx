import React from "react";
import { MessageCircle, Clock, Sparkles } from "lucide-react";
import { OccasionItem, getWhatsAppUrl } from "@/content/site";
import { SmartImage } from "@/components/SmartImage";

interface OccasionCardProps {
  occasion: OccasionItem;
  featured?: boolean;
  priority?: boolean;
}

export function OccasionCard({ occasion, featured = false, priority = false }: OccasionCardProps) {
  const whatsappUrl = getWhatsAppUrl(occasion.whatsappPrefill);

  return (
    <article
      id={occasion.id}
      className={`site-card-image group flex flex-col overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-1.5 ${
        featured
          ? "bg-gradient-to-b from-[#FCFAFF] to-[#F1EBFF]/70 border-2 border-[#B99AFF] shadow-[0_12px_32px_rgba(185,154,255,0.22)] hover:shadow-[0_24px_48px_-8px_rgba(185,154,255,0.35)]"
          : "bg-[#FCFAFF] border border-[#E2D5FF] shadow-xs hover:border-[#B99AFF] hover:shadow-[0_20px_40px_-10px_rgba(185,154,255,0.25)]"
      }`}
    >
      {/* Product Photography — Clean, Unobstructed Floral Visuals */}
      <div className="relative overflow-hidden rounded-t-[22px] bg-[#F1EBFF]">
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <SmartImage
            src={occasion.image.src}
            alt={occasion.image.alt}
            ratio="4:3"
            radius="none"
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Refined Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Eyebrow & Title */}
        <div className="mb-2.5">
          {featured && (
            <div className="mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D5FF32] text-[#291638] text-[11px] font-extrabold uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#291638]" />
                <span>Most Requested</span>
              </span>
            </div>
          )}
          <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#746781] block mb-1">
            {occasion.subtitle}
          </span>
          <h3 className="font-heading text-2xl font-bold text-[#291638] group-hover:text-[#381D4C] transition-colors leading-tight">
            {occasion.title}
          </h3>
        </div>

        {/* Evocative Summary (Crisp 2-Line Rhythm) */}
        <p className="text-[#746781] text-sm leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
          {occasion.summary}
        </p>

        {/* Botanical Ingredients Strip */}
        <div className="mb-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#291638]/70 block mb-2">
            Fresh Botanical Elements
          </span>
          <div className="flex flex-wrap gap-1.5 min-h-[56px] content-start">
            {occasion.keyFlowers.map((flower) => (
              <span
                key={flower}
                className="px-2.5 py-0.5 rounded-full bg-[#F8F5FF] text-[#291638] text-xs font-medium border border-[#E2D5FF] transition-colors hover:bg-[#F1EBFF]"
              >
                {flower}
              </span>
            ))}
          </div>
        </div>

        {/* Sleek Timing Metadata Row */}
        <div className="mt-auto pt-3.5 border-t border-[#E2D5FF]/80 mb-5 flex items-start gap-2 text-xs text-[#746781] min-h-[36px]">
          <Clock className="w-3.5 h-3.5 text-[#7DA34A] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-snug">
            <strong className="text-[#291638] font-semibold">Timing: </strong>
            <span>
              {occasion.id === "wedding-garlands" && "Order 1 day ahead for custom hand-weaving"}
              {occasion.id === "car-decoration" && "Order 1 day ahead to reserve vehicle fitting slot"}
              {occasion.id === "pooja-flowers" && "Available from 5:30 AM daily · Walk in or reserve"}
              {occasion.id === "bouquets" && "Order 2–3 hours ahead or reserve previous evening"}
              {occasion.id === "funeral-wreaths" && "Urgent priority dispatch · Fast morning preparation"}
              {!["wedding-garlands", "car-decoration", "pooja-flowers", "bouquets", "funeral-wreaths"].includes(occasion.id) && occasion.advanceNotice}
            </span>
          </p>
        </div>

        {/* High-Contrast WhatsApp CTA Button with Chartreuse Side Badge */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-between group/btn py-2 text-sm font-semibold tracking-wide pl-5 pr-2"
          id={`order-${occasion.id}-btn`}
        >
          <span>Order on WhatsApp</span>
          <span className="btn-side-badge">
            <MessageCircle className="w-4 h-4 text-[#291638]" aria-hidden="true" />
          </span>
        </a>
      </div>
    </article>
  );
}
