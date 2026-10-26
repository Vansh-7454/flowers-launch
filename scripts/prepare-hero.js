const sharp = require('sharp');
const path = require('path');

async function run() {
  const src = 'C:/Users/USER/.gemini/antigravity-ide/brain/56693f1e-d0a1-4fac-915c-2e9dd9dc34cd/hero_sculpture_lavender_1792996386214.jpg';
  const meta = await sharp(src).metadata();
  const w = meta.width;
  const h = meta.height;

  // Create a gentle rectangular vignette / feather mask where outer 10% smoothly fades to 0 opacity
  const maskSvg = Buffer.from(`
    <svg width="${w}" height="${h}">
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
          <stop offset="75%" stop-color="white" stop-opacity="1" />
          <stop offset="96%" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#vignette)" />
    </svg>
  `);

  const mask = await sharp(maskSvg).extractChannel('red').toBuffer();

  await sharp(src)
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .webp({ quality: 95 })
    .toFile('public/images/home/hero-sculpture-feathered.webp');

  console.log('Successfully created hero-sculpture-feathered.webp');

  // Also save standard crisp webp
  await sharp(src)
    .webp({ quality: 95 })
    .toFile('public/images/home/hero-sculpture.webp');

  console.log('Successfully created hero-sculpture.webp');
}

run().catch(console.error);
