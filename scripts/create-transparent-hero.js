const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createTransparentHero() {
  const inputPath = 'C:/Users/USER/.gemini/antigravity-ide/brain/56693f1e-d0a1-4fac-915c-2e9dd9dc34cd/hero_sculpture_lavender_1792996386214.jpg';
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Compute color distance to background gradient at (x, y)
  function getBgDist(x, y) {
    const idx = (y * w + x) * 3;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const expectedR = 190 + (208 - 190) * (y / h);
    const expectedG = 170 + (189 - 170) * (y / h);
    const expectedB = 238 + (250 - 238) * (y / h);

    const dr = r - expectedR;
    const dg = g - expectedG;
    const db = b - expectedB;
    return Math.sqrt(dr * dr + dg * dg + db * db);
  }

  // BFS Flood Fill from outer border
  const visited = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let qStart = 0;
  let qEnd = 0;

  // Initialize border pixels
  for (let x = 0; x < w; x++) {
    queue[qEnd++] = x; // y = 0
    visited[x] = 1;
    queue[qEnd++] = (h - 1) * w + x; // y = h - 1
    visited[(h - 1) * w + x] = 1;
  }
  for (let y = 1; y < h - 1; y++) {
    queue[qEnd++] = y * w; // x = 0
    visited[y * w] = 1;
    queue[qEnd++] = y * w + (w - 1); // x = w - 1
    visited[y * w + (w - 1)] = 1;
  }

  // Thresholds for background:
  // dist < 22: definitely background
  // dist between 22 and 36: antialiased edge
  const BG_MAX_DIST = 38;

  while (qStart < qEnd) {
    const curr = queue[qStart++];
    const cx = curr % w;
    const cy = Math.floor(curr / w);

    // Neighbors
    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < w - 1 ? curr + 1 : -1,
      cy > 0 ? curr - w : -1,
      cy < h - 1 ? curr + w : -1
    ];

    for (const n of neighbors) {
      if (n !== -1 && !visited[n]) {
        const nx = n % w;
        const ny = Math.floor(n / w);
        const dist = getBgDist(nx, ny);
        if (dist <= BG_MAX_DIST) {
          visited[n] = 1;
          queue[qEnd++] = n;
        }
      }
    }
  }

  // Create RGBA image
  const rgba = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 3;
      const outIdx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      rgba[outIdx] = r;
      rgba[outIdx + 1] = g;
      rgba[outIdx + 2] = b;

      const pos = y * w + x;
      if (visited[pos]) {
        const dist = getBgDist(x, y);
        if (dist < 22) {
          rgba[outIdx + 3] = 0; // Pure transparent background
        } else {
          // Antialiased border
          const alpha = Math.min(255, Math.max(0, Math.floor(255 * ((dist - 22) / (BG_MAX_DIST - 22)))));
          rgba[outIdx + 3] = alpha;
        }
      } else {
        rgba[outIdx + 3] = 255; // Foreground
      }
    }
  }

  const outputPathPng = path.join(__dirname, '..', 'public', 'images', 'home', 'hero-sculpture-transparent.png');
  const outputPathWebp = path.join(__dirname, '..', 'public', 'images', 'home', 'hero-sculpture-transparent.webp');

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(outputPathPng);

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .webp({ quality: 95, alphaQuality: 100, lossless: false })
    .toFile(outputPathWebp);

  console.log('Successfully created hero-sculpture-transparent.webp and .png');
}

createTransparentHero().catch(console.error);
