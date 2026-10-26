import React from "react";
import Link from "next/link";
import { ArrowLeft, Flower2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="site-section bg-[#F8F5FF] min-h-[60vh] flex items-center justify-center">
      <div className="site-container max-w-[600px] text-center">
        <div className="w-16 h-16 rounded-[16px] bg-[#E9DEFF] border border-[#BDA0FF]/40 flex items-center justify-center mx-auto mb-6 text-[#291638] shadow-xs">
          <Flower2 className="w-8 h-8" strokeWidth={1.75} />
        </div>
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#D5FF32] shadow-[0_0_6px_#D5FF32]" />
          <span className="text-eyebrow text-[#291638] font-bold tracking-[0.16em]">
            PAGE NOT FOUND · 404
          </span>
        </div>
        <h1 className="text-h1 font-heading text-[#291638] mb-4">
          This flower pathway is missing
        </h1>
        <p className="text-intro text-[#746781] mb-8">
          The page you are looking for doesn’t exist or may have been moved. Return to our home page to browse our fresh temple flowers and garlands.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 text-[#D5FF32]" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/flowers-and-occasions"
            className="btn-secondary w-full sm:w-auto"
          >
            <span>Browse Flowers & Occasions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
