/**
 * Renders public/og-image.png — the card that appears when danieldev.ca is
 * pasted into LinkedIn, Slack, iMessage, or an email.
 *
 * It is generated rather than hand-drawn so it stays in step with the site's
 * own tokens: change --bg or --accent in index.css and re-run this.
 *
 * This is a one-off authoring tool, not part of `npm run build`: the output is
 * committed at public/og-image.png so the production build on Vercel never
 * needs a browser. Playwright is intentionally not a dependency.
 *
 * Usage:  npm i -D playwright && npx playwright install chromium
 *         node scripts/make-og-image.mjs
 */
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const BG = "#0C0D0F";
const TEXT = "#ECECE7";
const BODY = "#9B9B96";
const ACCENT = "#C7F94E";
const HAIR = "rgba(236, 236, 231, 0.13)";

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; background: ${BG}; color: ${TEXT};
    font-family: "Space Grotesk", system-ui, sans-serif;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 68px 72px; position: relative; overflow: hidden;
  }
  .grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(to right, ${HAIR} 1px, transparent 1px),
      linear-gradient(to bottom, ${HAIR} 1px, transparent 1px);
    background-size: 150px 150px; opacity: 0.5;
  }
  .row { display: flex; align-items: center; gap: 14px; position: relative; }
  .square { width: 15px; height: 15px; background: ${ACCENT}; display: block; }
  .name {
    font-family: "JetBrains Mono", monospace; font-size: 21px; font-weight: 500;
    letter-spacing: 0.2em; text-transform: uppercase;
  }
  h1 {
    position: relative; font-size: 88px; line-height: 0.98; font-weight: 700;
    letter-spacing: -0.035em; text-transform: uppercase; max-width: 20ch;
  }
  .accent { color: ${ACCENT}; }
  .foot {
    position: relative; display: flex; justify-content: space-between;
    align-items: flex-end; gap: 40px; border-top: 1px solid ${HAIR}; padding-top: 26px;
  }
  .tag {
    font-family: "JetBrains Mono", monospace; font-size: 17px; color: ${BODY};
    letter-spacing: 0.11em; text-transform: uppercase; line-height: 1.75;
  }
  .status { color: ${ACCENT}; }
</style></head>
<body>
  <div class="grid"></div>
  <div class="row"><span class="square"></span><span class="name">Daniel Chavez</span></div>
  <h1>Technical solutions that move <span class="accent">customers forward.</span></h1>
  <div class="foot">
    <div class="tag">
      Presales &amp; solutions engineering<br>
      Implementation &amp; customer success<br>
      Web, CMS &amp; accessibility
    </div>
    <div class="tag" style="text-align:right">
      <span class="status">Open to work</span><br>
      Winnipeg · Remote · EN / ES<br>
      danieldev.ca
    </div>
  </div>
</body></html>`;

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, "..", "public", "og-image.png");

const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: out });
await browser.close();
console.log("wrote", out);
