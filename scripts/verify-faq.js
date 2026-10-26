const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  // Scroll to bottom sections
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await new Promise(r => setTimeout(r, 1000));

  // Find FAQ section and screenshot it
  const faqSection = await page.$('section.bg-\\[\\#F1EBFF\\]:last-of-type');
  if (faqSection) {
    await faqSection.screenshot({ path: 'qa/common-questions-centered.png' });
    console.log('Saved common questions screenshot!');
  } else {
    // take screenshot of lower page
    await page.screenshot({ path: 'qa/common-questions-centered.png', clip: { x: 0, y: 3500, width: 1440, height: 1400 } });
  }

  // Also take mobile screenshot
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'qa/homepage-mobile-care-faq.png', fullPage: false });

  await browser.close();
})();
