# Design Brief — Shree Ganesh Flowers (Florist, Pune)

## 1. Theme Name & Concept
- **Theme Name**: *Lavender × Chartreuse 3D Floral Editorial*
- **One-Sentence Concept**: A contemporary, art-directed floral boutique digital experience combining glossy lavender 3D sculptural ribbons, electric chartreuse accents, and orbital lines with authentic Indian temple garlands and sacred floral offerings.

## 2. Three Mood Words
- **Futuristic Editorial** (Glossy 3D forms, electric lime accents, oversized typography)
- **Devotional Freshness** (Crisp morning blooms, fragrant jasmine, vibrant marigolds)
- **Trustworthy Craft** (Authentic Pune temple tradition, 1-day advance garland booking, pay-at-pickup honesty)

## 3. Full Colour Palette & WCAG AA Contrast Ratios

| Token | Hex Value | Role & Usage | WCAG AA Contrast Ratio |
|---|---|---|---|
| **Lavender** | `#BDA0FF` | Saturated lavender accents, hero ribbons, orbital glow | Distinctive brand identity |
| **Pale Lavender** | `#E9DEFF` | Soft editorial section backgrounds, badge tiles | 1.18:1 on soft white |
| **Deep Plum** | `#291638` | Primary headlines, navigation, high-contrast text, dark bands | **14.8:1** on Soft White (AAA Pass) |
| **Chartreuse** | `#D5FF32` | Electric neon accent for CTA buttons, orbital lines, live badge dots | **12.4:1** with Deep Plum text (AAA Pass) |
| **Soft White** | `#F8F5FF` | Clean editorial canvas, card containers | Baseline |
| **Warm Ivory** | `#FCFAF7` | Secondary base canvas | Neutral warm undertone |
| **Muted Text** | `#6E657A` | Supportive editorial copy, captions, timestamps | **5.2:1** on Soft White (AA Pass) |
| **Subtle Border** | `#E2D8F1` | Fine 1px editorial borders | Tactile separation |
| **Marigold (Accent)** | `#F49A24` | Authentic zendu flower highlight | Floral warmth |
| **Rose (Accent)** | `#D93476` | Rose varmala petal highlight | Floral warmth |

## 4. Typography System
- **Heading Font**: `DM Serif Display` (Google Fonts via `next/font/google`).
  - *Why it fits*: Elegant, organic curves with traditional warmth that mirrors the artistry of handcrafted Indian floral garlands and temple architecture.
- **Body Font**: `Inter` (Google Fonts via `next/font/google`).
  - *Why it fits*: Clean, geometric clarity with excellent legibility for Indian timings (`5:30 AM`), phone formatting (`+91`), and Marathi/Indian English terms (`Pooja`, `Varmala`, `Durva`).
- **Scale**:
  - Hero Display (Desktop): `clamp(2.625rem, 5.5vw, 4.75rem)` (~42px mobile / ~76px desktop), Line-height: `1.08`, Letter-spacing: `-0.025em`
  - H1: `clamp(2.25rem, 4vw, 3.25rem)` (36px to 52px), Line-height: `1.15`
  - H2: `clamp(1.75rem, 3vw, 2.35rem)` (28px to 38px), Line-height: `1.20`
  - H3: `clamp(1.25rem, 2vw, 1.45rem)` (20px to 23px), Line-height: `1.25`
  - Body: `1rem` (16px), Line-height: `1.6`
  - Small / Caption / Eyebrow: `0.75rem` (12px) to `0.875rem` (14px), uppercase letter-spacing `0.16em`

## 5. Logo Concept
- A minimalist geometric 8-petaled sacred floral motif centering on a solid auspicious bindu dot in electric chartreuse (`#D5FF32`) with saturated lavender inner ring (`#BDA0FF`).
- Paired with an editorial wordmark set in DM Serif Display ("SHREE GANESH FLOWERS") and a subtle tracked subtitle ("PUNE · TEMPLE FLORIST") that scales cleanly to mobile viewports.

## 6. Hero Layout Choice & Hero Artwork
- **Layout Choice**: **Asymmetrical Editorial 3D Composition**
  - Left 6 columns: Tracked eyebrow label (`FRESH FLOWERS & HANDCRAFTED GARLANDS · PUNE TEMPLE PRECINCT`) with electric chartreuse neon orb, oversized headline (`Fresh Flowers. Sacred Moments.`), short supportive narrative, high-contrast chartreuse WhatsApp CTA (`#D5FF32` with `#291638` text), secondary browse button, and live status badge with glowing chartreuse indicator.
  - Right 6 columns: 3D composition with gentle floating motion (`animate-gentle-float`), featuring glossy lavender sculptural ribbons intertwined with fresh Indian marigold and rose garlands, glowing chartreuse orbital SVG tracks, and floating spheres.

## 7. Image Plan & Assets
1. `public/images/home/hero-3d.webp` (4:3) — Custom glossy 3D lavender ribbon sculpture intertwined with fresh marigold and rose garlands, chartreuse spheres, and floating petals.
2. `public/images/occasions/pooja-flowers.webp` (4:3) — Fresh loose pooja flowers, sacred durva grass, hibiscus, and marigold packets.
3. `public/images/occasions/wedding-garlands.webp` (4:3) — Handcrafted royal rose-petal and tuberose varmala for wedding ceremonies.
4. `public/images/occasions/bouquets.webp` (4:3) — Fresh celebration cut-flower bouquets wrapped in sustainable paper.
5. `public/images/occasions/car-decoration.webp` (4:3) — Festive floral bonnet and door handle garland arrangements for weddings and celebrations.
6. `public/images/occasions/funeral-wreaths.webp` (4:3) — Respectful white chrysanthemum and rose condolence garlands and wreaths.
7. `public/images/home/about-florist.webp` (4:5) — Hands carefully stringing fragrant fresh flowers at the Pune temple flower stall.
8. `public/images/contact/shop-front.webp` (4:3) — Welcoming temple-side floral stall in Pune with fresh daily stock displayed at sunrise.

## 8. Section Order of the Home Page
1. **Header**: Sticky 72px header (64px mobile), full logo, navigation (Home, Flowers & Occasions, Contact), live "Open Now" chip, and WhatsApp CTA button.
2. **Hero Section (Editorial Asymmetrical Split)**: Eyebrow, H1, supportive copy, primary WhatsApp button, secondary Occasions button, hero visual, and live status badge.
3. **Trust Strip**: 4 core facts on pale lilac panel.
4. **Live Timings & Daily Routine Banner**: Highlighting 5:30 AM early morning opening for temple goers and morning devotees in Pune.
5. **Occasions Overview**: 5 curated cards with 16px radius, subtle lavender borders, 2-3px hover lift, and distinct WhatsApp prefilled order triggers (`Hi Shree Ganesh Flowers, I'd like to order: <occasion>`).
6. **Garland Advance Notice Feature Split**: Dedicated pale lilac feature block prominently highlighting: *"Order garlands one day in advance"* so the florist can source fresh stems from the wholesale market at dawn.
7. **About Shree Ganesh Flowers**: Grounded story of the small temple florist in Pune, serving daily devotees and celebratory families with authentic warmth.
8. **Temple Flower Care & Tradition Guide**: Practical guidance on keeping pooja flowers fragrant, misting garlands, and timing orders.
9. **Frequently Asked Questions**: 4 interactive questions covering orders, morning hours, and advance booking.
10. **Closing CTA Band (Deep Plum Band)**: Deep plum section with direct WhatsApp ordering and phone call actions.
11. **Footer**: 4-column layout on deep plum base with brand wordmark, quick links, contact & temple location, opening hours (5:30 AM – 9:00 PM), and copyright.

## 9. Spacing & Type Tokens
- Container: `min(100% - 40px, 1240px)`
- Gutter: `20px` (mobile), `32px` (tablet), `48px` (desktop)
- Section Vertical Padding: `clamp(64px, 8vw, 112px)`
- Radius: `10px` (buttons, inputs), `16px` (cards), `20px` (large feature visuals).
- Shadows: Soft card (`0 2px 8px -2px rgba(41, 27, 53, 0.04), 0 8px 24px -4px rgba(41, 27, 53, 0.06)`), Hover lift (`0 14px 28px -4px rgba(101, 70, 165, 0.12)`).
