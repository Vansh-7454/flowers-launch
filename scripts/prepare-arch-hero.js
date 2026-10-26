const sharp = require('sharp');
const path = require('path');

async function processHero() {
  const src = 'C:/Users/USER/.gemini/antigravity-ide/brain/56693f1e-d0a1-4fac-915c-2e9dd9dc34cd/hero_braided_arch_1792997999327.jpg';
  const destWebp = path.join(process.cwd(), 'public/images/home/hero-braided-arch.webp');
  const destFeathered = path.join(process.cwd(), 'public/images/home/hero-braided-arch-feathered.webp');

  const meta = await sharp(src).metadata();
  const width = meta.width;
  const height = meta.height;

  // 1. Standard high-quality WebP
  await sharp(src)
    .webp({ quality: 92, effort: 6 })
    .toFile(destWebp);
  console.log('Saved standard WebP:', destWebp);

  // 2. Soft-feathered edge version for flawless gradient blending
  // Radial/elliptical alpha mask where outer 10-15% smoothly fades to 0 opacity
  const maskSvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fade" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="78%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="90%" stop-color="#ffffff" stop-opacity="0.8" />
          <stop offset="97%" stop-color="#ffffff" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#fade)" />
    </svg>
  `;

  const maskBuffer = await sharp(Buffer.from(maskSvg)).png().toBuffer();
  const imageRgba = await sharp(src).ensureAlpha().toBuffer();

  await sharp(imageRgba)
    .composite([{ input: maskBuffer, blend: 'dest-in' }])
    .webp({ quality: 92, effort: 6 })
    .toFile(destFeathered);

  console.log('Saved feathered WebP:', destFeathered);
}

processHero().catch(err => {
  console.error('Error processing hero image:', err);
  process.exit(1);
});
