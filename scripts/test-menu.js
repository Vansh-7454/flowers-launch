const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  
  await page.click('#mobile-menu-toggle');
  await new Promise(r => setTimeout(r, 600));
  
  await page.screenshot({ path: 'qa/mobile-menu-open.png' });
  
  const state = await page.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"]');
    return {
      bodyOverflow: document.body.style.overflow,
      htmlOverflow: document.documentElement.style.overflow,
      dialogScrollHeight: dialog ? dialog.scrollHeight : null,
      dialogClientHeight: dialog ? dialog.clientHeight : null,
      dialogHasVScroll: dialog ? dialog.scrollHeight > dialog.clientHeight : null,
      bodyHeight: document.body.clientHeight,
    };
  });
  console.log('Mobile menu state:', JSON.stringify(state, null, 2));
  await browser.close();
})();
