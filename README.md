# Shree Ganesh Flowers — Pune Temple Florist Website

A custom, high-performance static website for **Shree Ganesh Flowers** (a temple-side florist in Pune specializing in daily morning pooja flowers, wedding varmala, celebratory bouquets, and car decorations).

Built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌸 Key Highlights & Architecture
- **Single Source of Truth**: All business text, timings, contact numbers, and occasion details live in [`content/site.ts`](./content/site.ts).
- **Zero Motion / Pure Static Elegance**: Fully static design with zero scroll libraries or heavy animations, featuring authentic warm editorial and devotional aesthetics.
- **WhatsApp Ordering Integration**: Every occasion card and CTA button pre-fills an exact message (e.g. `Hi Shree Ganesh Flowers, I'd like to order: Wedding garlands`) directly into WhatsApp (`wa.me`).
- **Live Early Morning Status**: Smart indicator showing real-time Pune/IST shop status (opening daily at 5:30 AM for morning temple devotees).
- **Advance Garland Notice**: Dedicated sections highlighting the *one-day advance notice* requirement for handcrafted ceremonial garlands.
- **Pay at Pickup Clarity**: Clear customer communication that orders are confirmed via WhatsApp and settled in person upon shop collection.

---

## 🚀 How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build and test production bundle**:
   ```bash
   npm run build
   npm run start
   ```

4. **Run linter**:
   ```bash
   npm run lint
   ```

---

## 🛠️ How to Customize & Manage Content

### 1. How to Change Text and Contact Details
Open [`content/site.ts`](./content/site.ts). All business information is strictly typed:
- **Business Name & Tagline**: Update `brand.name` or `brand.tagline`.
- **Phone & WhatsApp**: Update `contact.phoneDisplay`, `contact.phoneTel`, and `contact.whatsappNumber`.
- **Shop Address**: Update `contact.address` and `contact.cityArea`.
- **Opening Hours**: Modify `contact.openingHoursDisplay` (e.g. `5:30 AM – 9:00 PM`).

### 2. How to Change Colors or Fonts (One Place)
Open [`app/globals.css`](./app/globals.css) and edit the design tokens under `@theme`:
- `--color-primary`: Sacred temple green (`#265239`)
- `--color-accent`: Marigold orange (`#CB5E1C`)
- `--color-background`: Warm ivory (`#FCF9F4`)
- `--color-surface`: Soft cream (`#F5EFE6`)
- `--color-dark-band`: Deep evergreen (`#18281E`)

Fonts are defined in [`app/layout.tsx`](./app/layout.tsx) using `next/font/google` (`DM_Serif_Display` and `DM_Sans`).

### 3. How to Swap the Logo
- **Main Full Logo**: Replace [`public/logo.svg`](./public/logo.svg).
- **Icon Mark**: Replace [`public/logo-mark.svg`](./public/logo-mark.svg).
- **Favicon**: Replace [`app/icon.svg`](./app/icon.svg).

### 4. How to Swap an Image
Refer to [`photos-needed.md`](./photos-needed.md) for the exact dimensions, shot descriptions, and aspect ratios:
1. Save your photo with the matching path and filename (e.g., `public/images/occasions/pooja-flowers.webp`).
2. WebP, JPG, or PNG formats are supported. If using another extension, update the path in [`content/site.ts`](./content/site.ts).

### 5. How to Add a New Occasion / Flower Type
1. Open [`content/site.ts`](./content/site.ts).
2. Add a new object to the `occasions` array with `id`, `title`, `subtitle`, `summary`, `keyFlowers`, `advanceNotice`, and `whatsappPrefill`.
3. Add the corresponding image to `public/images/occasions/`.
The website will automatically render the new occasion card across both the Home and Occasions pages.

### 6. How to Add an FAQ
Open [`content/site.ts`](./content/site.ts) and append a new `{ question, answer }` object to the `faqs` array.

---

## 🌐 Deployment to Vercel

### Step 1: Push Repository to GitHub
```bash
git add .
git commit -m "Complete launch build for Shree Ganesh Flowers"
git remote add origin https://github.com/<your-username>/flowers-launch.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New Project** and select `flowers-launch` from your GitHub repositories.
3. Keep default settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Click **Deploy**.

### Step 3: Connect Custom Domain & Configure DNS
1. In your Vercel project dashboard, navigate to **Settings** > **Domains**.
2. Enter your custom domain (e.g., `shreeganeshflowers.in` or `shreeganeshflowers.com`).
3. In your domain registrar (GoDaddy, Namecheap, Google Domains), add the following DNS records:
   - **A Record**: Host `@` points to `76.76.21.21`
   - **CNAME Record**: Host `www` points to `cname.vercel-dns.com`
4. Vercel automatically provisions free SSL/TLS certificates.
