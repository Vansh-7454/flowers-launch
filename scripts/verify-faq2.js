const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  // Scroll so Common Questions is in view
  const faqHeading = await page.$('::-p-text(COMMON QUESTIONS)');
  if (faqHeading) {
    await faqHeading.scrollIntoView();
  }
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({ path: 'qa/common-questions-view.png' });
  console.log('Saved common questions in view screenshot!');

  await browser.close();
})();
