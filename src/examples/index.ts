import * as p from 'puppeteer';
import { PATH } from '../config';

interface Screenshot {
  url: string;
  width: number | 1200;
  height: number | 600;
}

async function screenshot(screen: Screenshot): Promise<void> {
  const browser: p.Browser = await p.launch({ headless: false });
  const page: p.Page = await browser.newPage();
  await page.goto(`${screen.url}`);
  await page.setViewport({ width: screen.width, height: screen.height });
  await page.screenshot({ path: `${PATH.PUPPETEER_SCREENSHOT}/google.png` });
  await browser.close();
}

export async function getScreenshot(screen: Screenshot) {
  await screenshot(screen);
}
