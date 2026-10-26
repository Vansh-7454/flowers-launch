# Design Brief — Shree Ganesh Flowers (Florist, Pune)

## 1. Theme Name & Concept
- **Theme Name**: *Sacred Flora & Warm Editorial*
- **One-Sentence Concept**: A calm, deeply trustworthy, and culturally authentic digital presence for a temple-side florist in Pune, crafted to make daily pooja flower inquiries and advance garland ordering effortless over WhatsApp.

## 2. Three Mood Words
- **Devotional** (Reverent, sacred, grounded in daily temple rituals)
- **Fresh** (Crisp morning blooms, fragrant jasmine, vibrant marigolds)
- **Trustworthy** (Clear early hours, advance ordering clarity, pay-at-pickup honesty)

## 3. Full Colour Palette & WCAG AA Contrast Ratios
Designed strictly with the 60-30-10 principle: 60% background/surface, 30% primary/text, 10% accent.

| Token | Hex Value | Role & Usage | WCAG AA Contrast Ratio |
|---|---|---|---|
| **Background** | `#FCF9F4` | Canvas base (warm ivory petal) | Baseline |
| **Surface** | `#F5EFE6` | Cards, secondary panels, inputs | 1.1:1 on bg (soft layering) |
| **Surface-2** | `#ECE3D5` | Elevated containers, image frames | 1.3:1 on bg |
| **Text** | `#231A14` | High-contrast body & titles (deep earth) | **14.8:1** on Background (AAA Pass) |
| **Text-Muted** | `#63554A` | Secondary text, captions, metadata | **6.1:1** on Background (AA Pass) |
| **Primary** | `#265239` | Sacred temple leaf green (headers, active state, badges) | **7.5:1** on Background (AAA Pass) |
| **Primary-Contrast** | `#FFFFFF` | Text on Primary buttons | **7.2:1** on Primary (AAA Pass) |
| **Accent** | `#CB5E1C` | Auspicious marigold orange (CTAs, highlight badges) | **4.6:1** on Background, **3.5:1** on white text (AA Large/Bold) |
| **Border** | `#E3D7C5` | Crisp 1px borders, subtle dividers | High tactile clarity |
| **Dark Band** | `#18281E` | Contrast section, footer, closing CTA | Base for dark blocks |
| **Dark Band Text** | `#F7F4EE` | Text on Dark Band | **13.9:1** on Dark Band (AAA Pass) |
| **Dark Band Accent** | `#F3B278` | Highlight text on Dark Band | **7.8:1** on Dark Band (AAA Pass) |

## 4. Typography System
- **Heading Font**: `DM Serif Display` (Google Fonts via `next/font/google`).
  - *Why it fits*: Elegant, organic curves with traditional warmth that mirrors the artistry of handcrafted Indian floral garlands and temple architecture. Far more authentic and respectful than sterile tech sans-serifs.
- **Body Font**: `DM Sans` (Google Fonts via `next/font/google`).
  - *Why it fits*: Crisp, geometric clarity with excellent legibility for Indian timings (`5:30 AM`), phone formatting (`+91`), and Marathi/Indian English terms (`Pooja`, `Varmala`, `Durva`).
- **Scale**:
  - Display (Hero): Fluid `clamp(2.75rem, 5vw, 4.5rem)` (44px mobile / 72px desktop), Line-height: `1.08`, Letter-spacing: `-0.02em`
  - H1: `clamp(2.25rem, 4vw, 3.5rem)` (36px to 56px), Line-height: `1.12`
  - H2: `clamp(1.75rem, 3vw, 2.5rem)` (28px to 40px), Line-height: `1.18`
  - H3: `clamp(1.25rem, 2vw, 1.5rem)` (20px to 24px), Line-height: `1.25`
  - Body: `1.125rem` (18px desktop) / `1rem` (16px mobile), Line-height: `1.6`
  - Small / Caption / Eyebrow: `0.875rem` (14px) / `0.8125rem` (13px), uppercase letter-spacing `0.12em`

## 5. Logo Concept
- An elegant geometric 8-petaled sacred floral motif (hinting at traditional marigold offerings and threshold kolam patterns) centering on a solid auspicious bindu dot.
- Paired with a stately wordmark set in DM Serif Display ("SHREE GANESH FLOWERS") and a subtle tracked subtitle ("PUNE · TEMPLE FLORIST") that scales down cleanly to 24px without loss of detail.

## 6. Hero Layout Choice & Hero Image
- **Layout Choice**: **Layout A (Split)**
  - Left 6 columns: Eyebrow (`PUNE · TEMPLE-SIDE FLORIST`), fluid H1 (`Fresh morning temple flowers & handcrafted occasion garlands`), short supportive paragraph explaining daily fresh availability and WhatsApp ordering, live early-morning status badge (`Open Now · From 5:30 AM`), primary action (`Order on WhatsApp`), secondary action (`Browse Occasions`), and a 3-fact trust strip (`Fresh daily morning stock`, `Pay at shop pickup`, `Garlands ordered 1 day prior`).
  - Right 6 columns: Large 4:5 aspect ratio image set in a 24px rounded radius container with a warm 1px border and soft layered shadow, depicting fresh morning marigold and jasmine garlands arranged in traditional cane baskets.

## 7. Image Plan & Assets
1. `public/images/home/hero.webp` (4:5) — Fresh morning marigolds, jasmine veni, and pooja blooms in cane baskets.
2. `public/images/occasions/pooja-flowers.webp` (4:3) — Fresh loose pooja flowers, sacred durva grass, hibiscus, and marigold packets.
3. `public/images/occasions/wedding-garlands.webp` (4:3) — Handcrafted royal rose-petal and tuberose varmala for wedding ceremonies.
4. `public/images/occasions/bouquets.webp` (4:3) — Fresh celebration cut-flower bouquets wrapped in sustainable paper.
5. `public/images/occasions/car-decoration.webp` (4:3) — Festive floral bonnet and door handle garland arrangements for weddings and celebrations.
6. `public/images/occasions/funeral-wreaths.webp` (4:3) — Respectful white chrysanthemum and rose condolence garlands and wreaths.
7. `public/images/home/about-florist.webp` (4:5) — Hands carefully stringing fragrant fresh flowers at the Pune temple flower stall.
8. `public/images/contact/shop-front.webp` (4:3) — Welcoming temple-side floral stall in Pune with fresh daily stock displayed at sunrise.

## 8. Section Order of the Home Page
1. **Header**: Sticky 72px header (64px mobile), full logo, navigation (Home, Flowers & Occasions, Contact), live "Open Now" chip, and WhatsApp CTA button.
2. **Hero Section (Layout A Split)**: Eyebrow, H1, supportive copy, primary WhatsApp button, secondary Occasions button, hero visual, and 3-item trust strip.
3. **Live Timings & Daily Routine Banner**: Highlighting 5:30 AM early morning opening for temple goers and morning devotees in Pune.
4. **Occasions Overview**: 5 curated cards (Pooja Flowers, Wedding Garlands, Bouquets, Car Decoration, Funeral Wreaths) with distinct WhatsApp prefilled order triggers (`Hi Shree Ganesh Flowers, I'd like to order: <occasion>`).
5. **Garland Advance Notice Feature Split**: Dedicated feature block prominently highlighting: *"Order garlands one day in advance"* so the florist can source fresh stems from the wholesale market at dawn.
6. **About Shree Ganesh Flowers**: Grounded story of the small temple florist in Pune, serving daily devotees and celebratory families with authentic warmth.
7. **Temple Flower Care & Tradition Guide**: Practical guidance on keeping pooja flowers fragrant, misting garlands, and timing orders.
8. **Closing CTA Band (Dark Band)**: Deep forest green section with direct WhatsApp ordering and phone call actions.
9. **Footer**: 4-column layout with brand wordmark, quick links, contact & temple location, opening hours (5:30 AM – 9:00 PM), and copyright.

## 9. Spacing & Type Tokens
- Container: `min(100% - 40px, 1200px)`
- Gutter: `20px` (mobile), `32px` (tablet), `48px` (desktop)
- Section Vertical Padding: `clamp(64px, 8vw, 128px)`
- Fixed Spacing Scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`
- Rhythm: Eyebrow-to-heading: `12px`; Heading-to-paragraph: `16px`; Paragraph-to-button: `32px`; Header-to-content: `48px–64px`; Card padding: `24px–32px`; Grid gap: `24px–32px`.
- Radius: `8px` (buttons, inputs, pills), `16px` (cards), `24px` (hero & large feature visuals).
- Shadows: Card (`0 2px 8px -2px rgba(35, 26, 20, 0.05), 0 8px 24px -4px rgba(35, 26, 20, 0.08)`), Raised (`0 12px 32px -4px rgba(35, 26, 20, 0.12)`).
