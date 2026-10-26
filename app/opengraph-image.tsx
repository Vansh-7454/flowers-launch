import { ImageResponse } from "next/og";
import { siteContent } from "@/content/site";

export const alt = `${siteContent.brand.name} - ${siteContent.brand.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FCFAF7",
          border: "16px solid #291B35",
          padding: "60px",
          fontFamily: "serif",
        }}
      >
        {/* Brand Floral Emblem */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "76px",
            height: "76px",
            borderRadius: "38px",
            backgroundColor: "#291B35",
            color: "#F2C94C",
            marginBottom: "20px",
            fontSize: "36px",
            fontWeight: "bold",
            border: "2px solid #CDB8F4",
          }}
        >
          SGF
        </div>

        {/* Brand Name in Deep Plum */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#291B35",
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {siteContent.brand.name}
        </div>

        {/* City & Subtitle in Royal Plum */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#6546A5",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {siteContent.brand.tradeSubtitle}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "26px",
            color: "#716879",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          {siteContent.brand.tagline}
        </div>

        {/* Bottom Trust Badge */}
        <div
          style={{
            display: "flex",
            marginTop: "36px",
            padding: "12px 32px",
            borderRadius: "30px",
            backgroundColor: "#F0E9FC",
            border: "1px solid #E6DDED",
            fontSize: "18px",
            color: "#291B35",
            fontWeight: "600",
          }}
        >
          Daily Fresh Morning Blooms · Orders on WhatsApp · Pay at Pickup
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
