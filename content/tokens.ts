/**
 * Shared Design System Tokens
 * Theme: Lavender + Deep Plum + Natural Floral Accents
 * Cultural Context: Temple Flower & Handcrafted Garland Shop (Pune)
 */

export const designTokens = {
  colors: {
    // Primary colours (Exact prompt design tokens)
    primaryLavender: "#B99AFF", // Primary Lavender
    vibrantLavender: "#B99AFF", // Primary / Vibrant Lavender
    lightLavender: "#D7C5FF",   // Light Lavender - hero canvas & accents
    paleLavender: "#F1EBFF",    // Pale Lavender - editorial panels & chips
    deepPlum: "#291638",        // Deep Plum - typography, headers, dark bands
    chartreuse: "#D5FF32",      // Chartreuse Green - interactive highlights & accents
    leafGreen: "#7DA34A",       // Leaf Green - natural foliage, open badge
    softWhite: "#FCFAFF",       // Soft White - card surfaces, clean content
    borderLavender: "#E2D5FF",  // Border Lavender
    mutedText: "#746781",       // Muted supportive text
    
    // Floral accents
    marigold: "#F49A24",        // Marigold Accent
    rose: "#D93476",            // Rose Accent
    jasmine: "#FFF9EE",         // Jasmine White

    // Text & borders compatibility aliases
    border: "#E2D5FF",          // Editorial borders & dividers
    lavenderBorder: "#E2D5FF",  // Subtle lavender border
    subtleBorder: "#E2D5FF",
    lavender: "#B99AFF",
    freshLeafGreen: "#7DA34A",
  },

  typography: {
    headingFont: "var(--font-dm-serif), Georgia, serif",
    bodyFont: "var(--font-inter), system-ui, -apple-system, sans-serif",
    scales: {
      heroDisplayDesktop: "clamp(4rem, 6vw, 5.5rem)", // 64px - 88px
      heroDisplayMobile: "clamp(2.5rem, 5vw, 3.25rem)", // 40px - 52px
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
      heroHeading: 1.08,
      heading: 1.15,
      body: 1.6,
      tight: 1.25,
    },
  },

  radii: {
    button: "12px",
    card: "20px",
    visual: "24px",
    pill: "9999px",
  },

  spacing: {
    containerMax: "1260px",
    sectionY: "clamp(64px, 8vw, 112px)",
    sectionYCompact: "56px",
    gutterMobile: "20px",
    gutterDesktop: "48px",
  },

  shadows: {
    softCard: "0 2px 10px -2px rgba(41, 22, 56, 0.04), 0 8px 24px -4px rgba(41, 22, 56, 0.06)",
    elevated: "0 16px 40px -8px rgba(41, 22, 56, 0.12)",
    hoverLift: "0 14px 28px -4px rgba(185, 154, 255, 0.28)",
    chartreuseGlow: "0 0 24px -2px rgba(213, 255, 50, 0.45)",
    lavenderGlow: "0 12px 36px -6px rgba(185, 154, 255, 0.35)",
  },

  transitions: {
    default: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
    button: "all 200ms ease",
    lift: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms ease",
  },
} as const;

export type DesignTokens = typeof designTokens;
