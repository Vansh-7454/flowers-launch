const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const viewports = [
  { name: 'Android Small', width: 360, height: 640 },
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 13', width: 390, height: 844 },
];

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true });
  
  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

    // Check page horizontal scroll before opening menu
    const beforeMenu = await page.evaluate(() => {
      return {
        hScroll: document.documentElement.scrollWidth > window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      };
    });

    // Open mobile menu
    await page.click('#mobile-menu-toggle');
    await new Promise(r => setTimeout(r, 400));

    // Check menu state & scroll lock
    const menuState = await page.evaluate(() => {
      const dialog = document.querySelector('[role="dialog"]');
      return {
        bodyOverflow: document.body.style.overflow,
        htmlOverflow: document.documentElement.style.overflow,
        touchAction: document.body.style.touchAction,
        dialogScrollHeight: dialog ? dialog.scrollHeight : null,
        dialogClientHeight: dialog ? dialog.clientHeight : null,
        dialogHasVScroll: dialog ? dialog.scrollHeight > dialog.clientHeight : null,
      };
    });

    console.log(`[${vp.name} (${vp.width}x${vp.height})]`, {
      beforeMenuHScroll: beforeMenu.hScroll,
      ...menuState
    });

    await page.close();
  }

  await browser.close();
})();
