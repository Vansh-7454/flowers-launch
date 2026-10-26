import React from "react";
import Link from "next/link";
import { ArrowLeft, Flower2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="site-section bg-[#FCFAF7] min-h-[60vh] flex items-center justify-center">
      <div className="site-container max-w-[600px] text-center">
        <div className="w-16 h-16 rounded-[14px] bg-[#F0E9FC] border border-[#E6DDED] flex items-center justify-center mx-auto mb-6 text-[#6546A5]">
          <Flower2 className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <span className="text-eyebrow text-[#6546A5] block mb-2 font-semibold">
          PAGE NOT FOUND · 404
        </span>
        <h1 className="text-h1 font-heading text-[#291B35] mb-4">
          This flower pathway is missing
        </h1>
        <p className="text-intro text-[#716879] mb-8">
          The page you are looking for doesn’t exist or may have been moved. Return to our home page to browse our fresh temple flowers and garlands.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 text-white" />
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
