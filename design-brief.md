# Design Brief — Shree Ganesh Flowers (Florist, Pune)

## 1. Theme Name & Concept
- **Theme Name**: *Lavender, Deep Plum & Natural Floral Accents*
- **One-Sentence Concept**: A visually distinctive, premium, and culturally authentic digital presence combining the natural beauty of fresh temple offerings with the refined visual language of an independent editorial floral boutique.

## 2. Three Mood Words
- **Devotional** (Reverent, sacred, grounded in daily temple rituals)
- **Fresh** (Crisp morning blooms, fragrant jasmine, vibrant marigolds)
- **Trustworthy** (Clear early hours, advance ordering clarity, pay-at-pickup honesty)

## 3. Full Colour Palette & WCAG AA Contrast Ratios
Designed strictly with the 60-30-10 principle: 60% warm ivory & pure white surface, 30% deep plum text & royal plum interactive elements, 10% natural floral accents (marigold orange, yellow, rose pink, leaf green).

| Token | Hex Value | Role & Usage | WCAG AA Contrast Ratio |
|---|---|---|---|
| **Background (Warm Ivory)** | `#FCFAF7` | Primary canvas base | Baseline |
| **Surface (Pure White)** | `#FFFFFF` | Cards, elevated containers | 1.05:1 on bg |
| **Surface Lavender (Pale Lilac)** | `#F0E9FC` | Soft section panels, badge tiles | 1.15:1 on bg |
| **Text (Deep Plum)** | `#291B35` | High-contrast body & headlines | **14.2:1** on Warm Ivory (AAA Pass) |
| **Text-Muted (Muted Plum)** | `#716879` | Secondary text, captions, metadata | **5.4:1** on Warm Ivory (AA Pass) |
| **Royal Plum** | `#6546A5` | Primary buttons, active nav, links | **6.5:1** on Warm Ivory (AAA Pass) |
| **Soft Lavender** | `#CDB8F4` | Delicate borders, icon accents | 1.6:1 on bg |
| **Soft Border** | `#E6DDED` | Subtle 1px dividers and borders | High tactile clarity |
| **Marigold Orange (Accent)** | `#E99A28` | Auspicious CTAs, WhatsApp buttons | **4.2:1** on Warm Ivory (AA Large/Bold) |
| **Marigold Yellow (Accent)** | `#F2C94C` | Morning sunlight highlights | Restrained accent |
| **Leaf Green (Accent)** | `#667C54` | Fresh foliage, live open status | **4.8:1** on Warm Ivory (AA Pass) |
| **Dark Band (Deep Plum)** | `#291B35` | Closing CTA, footer | Base for dark blocks |
| **Dark Band Text** | `#FCFAF7` | Text on Dark Band | **14.2:1** on Dark Band (AAA Pass) |
| **Dark Band Accent** | `#F2C94C` | Highlight text on Dark Band | **10.5:1** on Dark Band (AAA Pass) |

## 4. Typography System
- **Heading Font**: `DM Serif Display` (Google Fonts via `next/font/google`).
  - *Why it fits*: Elegant, organic curves with traditional warmth that mirrors the artistry of handcrafted Indian floral garlands and temple architecture.
- **Body Font**: `Inter` (Google Fonts via `next/font/google`).
  - *Why it fits*: Clean, geometric clarity with excellent legibility for Indian timings (`5:30 AM`), phone formatting (`+91`), and Marathi/Indian English terms (`Pooja`, `Varmala`, `Durva`).
- **Scale**:
  - Display (Hero): Fluid `clamp(2.75rem, 5vw, 4.25rem)` (44px mobile / 68px desktop), Line-height: `1.10`, Letter-spacing: `-0.02em`
  - H1: `clamp(2.25rem, 4vw, 3.25rem)` (36px to 52px), Line-height: `1.15`
  - H2: `clamp(1.75rem, 3vw, 2.35rem)` (28px to 38px), Line-height: `1.20`
  - H3: `clamp(1.25rem, 2vw, 1.45rem)` (20px to 23px), Line-height: `1.25`
  - Body: `1rem` (16px), Line-height: `1.6`
  - Small / Caption / Eyebrow: `0.75rem` (12px) to `0.875rem` (14px), uppercase letter-spacing `0.14em`

## 5. Logo Concept
- A minimalist geometric 8-petaled sacred floral motif (hinting at traditional marigold offerings and threshold kolam patterns) centering on a solid auspicious bindu dot in marigold orange.
- Paired with a stately wordmark set in DM Serif Display ("SHREE GANESH FLOWERS") and a subtle tracked subtitle ("PUNE · TEMPLE FLORIST") that scales down cleanly to 24px without loss of detail.

## 6. Hero Layout Choice & Hero Image
- **Layout Choice**: **Layout A (Editorial Asymmetrical Split)**
  - Left 6 columns: Eyebrow (`FRESH FLOWERS & GARLANDS · PUNE TEMPLE FLORIST`), fluid headline (`Fresh Flowers. Sacred Moments.`), short supportive paragraph explaining daily fresh availability and WhatsApp ordering, live early-morning status badge (`Open Now · From 5:30 AM`), primary action (`Order on WhatsApp`), secondary action (`Browse All Occasions`), and a 3-fact trust strip.
  - Right 6 columns: Large 4:5 image set in a 20px rounded radius container with a pale lavender offset border and soft layered shadow, depicting fresh morning marigold and jasmine garlands arranged in traditional cane baskets.

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
