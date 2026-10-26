/**
 * Shared Design System Tokens
 * Theme: Lavender + Deep Plum + Natural Floral Accents
 * Cultural Context: Temple Flower & Handcrafted Garland Shop (Pune)
 */

export const designTokens = {
  colors: {
    // Primary Palette
    deepPlum: "#291B35",      // Headlines, prominent text, deep contrast sections
    royalPlum: "#6546A5",     // Primary interactive elements, links, emphasis
    softLavender: "#CDB8F4",  // Subtle borders, card highlights, icon accents
    paleLilac: "#F0E9FC",     // Soft section backgrounds, badge tiles
    warmIvory: "#FCFAF7",     // Primary canvas base background
    pureWhite: "#FFFFFF",     // Card containers, elevated surfaces
    mutedText: "#716879",     // Supportive copy, captions, timestamps
    softBorder: "#E6DDED",    // Subtle 1px dividers and borders

    // Natural Floral Accents (Restrained, inspired by real temple offerings)
    marigoldOrange: "#E99A28", // Auspicious warm highlight, CTAs, morning pooja
    marigoldYellow: "#F2C94C", // Morning dawn sunshine, subtle badge highlights
    rosePink: "#D995A9",       // Varmala rose petal accent
    leafGreen: "#667C54",      // Natural foliage, live open status
    freshWhiteFlower: "#F7F2E8", // Jasmine & mogra petal off-white
  },

  typography: {
    headingFont: "var(--font-dm-serif), Georgia, serif",
    bodyFont: "var(--font-inter), system-ui, -apple-system, sans-serif",
    scales: {
      display: "clamp(2.75rem, 5vw, 4.25rem)",
      h1: "clamp(2.25rem, 4vw, 3.25rem)",
      h2: "clamp(1.75rem, 3vw, 2.35rem)",
      h3: "clamp(1.25rem, 2vw, 1.45rem)",
      bodyLarge: "1.125rem",
      body: "1rem",
      small: "0.875rem",
      eyebrow: "0.75rem",
    },
    lineHeights: {
      heading: 1.15,
      body: 1.6,
      tight: 1.25,
    },
  },

  radii: {
    button: "10px",
    card: "16px",
    visual: "20px",
    pill: "9999px",
  },

  spacing: {
    containerMax: "1240px",
    sectionY: "clamp(64px, 8vw, 112px)",
    sectionYCompact: "56px",
    gutterMobile: "20px",
    gutterDesktop: "48px",
  },

  shadows: {
    softCard: "0 2px 8px -2px rgba(41, 27, 53, 0.04), 0 8px 24px -4px rgba(41, 27, 53, 0.06)",
    elevated: "0 12px 32px -4px rgba(41, 27, 53, 0.10)",
    hoverLift: "0 14px 28px -4px rgba(101, 70, 165, 0.12)",
  },

  transitions: {
    default: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
    button: "all 180ms ease",
    lift: "transform 220ms ease, box-shadow 220ms ease",
  },
} as const;

export type DesignTokens = typeof designTokens;
