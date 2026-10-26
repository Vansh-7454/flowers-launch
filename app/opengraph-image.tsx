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
          backgroundColor: "#FCF9F4",
          border: "16px solid #265239",
          padding: "60px",
          fontFamily: "serif",
        }}
      >
        {/* Brand Emblem */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "36px",
            backgroundColor: "#265239",
            color: "#F3B278",
            marginBottom: "20px",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          SGF
        </div>

        {/* Brand Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#231A14",
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          {siteContent.brand.name}
        </div>

        {/* City & Trade subtitle */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#CB5E1C",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          {siteContent.brand.tradeSubtitle}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#63554A",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          {siteContent.brand.tagline}
        </div>

        {/* Bottom trust bar */}
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            padding: "12px 32px",
            borderRadius: "30px",
            backgroundColor: "#F5EFE6",
            border: "1px solid #E3D7C5",
            fontSize: "18px",
            color: "#265239",
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
