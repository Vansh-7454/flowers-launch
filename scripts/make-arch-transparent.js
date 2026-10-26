const sharp = require('sharp');
const path = require('path');

async function extractArtwork() {
  const src = 'C:/Users/USER/.gemini/antigravity-ide/brain/56693f1e-d0a1-4fac-915c-2e9dd9dc34cd/hero_braided_arch_1792997999327.jpg';
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Function to determine if a pixel (x, y) is part of the warm peach studio background
  // Peach background is characterized by:
  // High brightness, warm hue: R: 220-255, G: 175-240, B: 125-195
  // Strong channel relation: R > G and G > B, with R - B between 50 and 115, R - G between 15 and 55.
  // The arch is lavender (B >= G or B close to R, R < 210 or B > 180).
  // The leaves are turquoise (G > R, B > R).
  // Plinths are B&W (R ~ G ~ B, stripes dark < 50 or white > 240).
  // Roses are pink/peach-rose (R is very high > 220, but G is much lower < 155, B < 155).
  // Golden spheres have very high contrast / reflection highlights.
  // Floating pink spheres have B >= G or R - G > 70.

  function isStudioBg(r, g, b) {
    // Check if within peach background envelope
    if (r < 210) return false; // Background is light
    if (g < 165 || g > 245) return false;
    if (b < 115 || b > 205) return false;
    
    // Check channel order: R > G > B
    if (!(r >= g && g >= b)) return false;

    // Check color balance
    const rgDiff = r - g;
    const gbDiff = g - b;
    const rbDiff = r - b;

    // In the background, rgDiff is between 12 and 55, gbDiff is between 25 and 65, rbDiff is between 45 and 115
    if (rgDiff < 10 || rgDiff > 55) return false;
    if (gbDiff < 20 || gbDiff > 65) return false;
    if (rbDiff < 40 || rbDiff > 115) return false;

    return true;
  }

  // BFS from border pixels + center opening of the arch
  const visited = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let qStart = 0;
  let qEnd = 0;

  // Add outer border pixels
  for (let x = 0; x < w; x++) {
    queue[qEnd++] = x;
    visited[x] = 1;
    queue[qEnd++] = (h - 1) * w + x;
    visited[(h - 1) * w + x] = 1;
  }
  for (let y = 1; y < h - 1; y++) {
    queue[qEnd++] = y * w;
    visited[y * w] = 1;
    queue[qEnd++] = y * w + (w - 1);
    visited[y * w + (w - 1)] = 1;
  }

  // Also seed from the arch's interior opening (around 600, 500-650)
  for (let dy = 520; dy <= 660; dy += 10) {
    for (let dx = 560; dx <= 640; dx += 10) {
      const idx = dy * w + dx;
      if (!visited[idx]) {
        const pR = data[idx * 3];
        const pG = data[idx * 3 + 1];
        const pB = data[idx * 3 + 2];
        if (isStudioBg(pR, pG, pB)) {
          visited[idx] = 1;
          queue[qEnd++] = idx;
        }
      }
    }
  }

  while (qStart < qEnd) {
    const curr = queue[qStart++];
    const cx = curr % w;
    const cy = Math.floor(curr / w);

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
        const idx3 = n * 3;
        const r = data[idx3];
        const g = data[idx3 + 1];
        const b = data[idx3 + 2];

        if (isStudioBg(r, g, b)) {
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
        rgba[outIdx + 3] = 0; // Pure transparent studio background
      } else {
        rgba[outIdx + 3] = 255; // Keep foreground elements completely solid
      }
    }
  }

  const outputPath = path.join(process.cwd(), 'public/images/home/hero-braided-arch-transparent.webp');
  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .webp({ quality: 95, alphaQuality: 100 })
    .toFile(outputPath);

  console.log('Saved transparent version to', outputPath);
}

extractArtwork().catch(console.error);
