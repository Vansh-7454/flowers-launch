const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const QA_DIR = path.join(__dirname, '..', 'qa');

if (!fs.existsSync(QA_DIR)) {
  fs.mkdirSync(QA_DIR, { recursive: true });
}

const pages = [
  { name: 'home', url: 'http://localhost:3000/' },
  { name: 'occasions', url: 'http://localhost:3000/flowers-and-occasions' },
  { name: 'contact', url: 'http://localhost:3000/contact' },
];

const viewports = [
  { width: 320, height: 640, name: '320' },
  { width: 375, height: 812, name: '375' },
  { width: 768, height: 1024, name: '768' },
  { width: 1440, height: 900, name: '1440' },
];

async function capture() {
  console.log('Launching Edge from:', EDGE_PATH);
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  for (const pageInfo of pages) {
    for (const vp of viewports) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });
      console.log(`Navigating to ${pageInfo.url} at ${vp.width}x${vp.height}...`);
      await page.goto(pageInfo.url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Scroll through page to trigger lazy loading of images
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 500;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 100);
        });
      });
      // Wait for image render
      await new Promise((r) => setTimeout(r, 1500));

      const fileName = `${pageInfo.name}-${vp.name}.png`;
      const filePath = path.join(QA_DIR, fileName);
      await page.screenshot({ path: filePath, fullPage: true });
      console.log(`Saved screenshot: ${fileName}`);
      await page.close();
    }
  }

  await browser.close();
  console.log('All QA screenshots captured successfully in /qa!');
}

capture().catch((err) => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
