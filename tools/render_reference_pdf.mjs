import fs from "node:fs/promises";
import { chromium } from "../career-ops/node_modules/playwright/index.mjs";

const source = await fs.readFile("career-ops/output/cv-daniel-chavez-general.html", "utf8");
const references = `
<div class="section">
  <div class="section-title">Professional References</div>
  <div class="project"><div class="project-title">Keith Solomon</div><div class="project-desc">Senior Developer · 204-298-9732 · Keith@keithsolomon.net</div></div>
  <div class="project"><div class="project-title">Cierra Waddell-Hodgson</div><div class="project-desc">General Sales Manager · 204-573-7460 · cierra.waddell@hotmail.com</div></div>
  <div class="project"><div class="project-title">Brady Sobering</div><div class="project-desc">Sales Manager · 204-612-2497 · brady.sobering@gmail.com</div></div>
</div>`;
const html = source.replace(/<\/div>\s*<\/body>/, `${references}\n</div>\n</body>`);
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.pdf({ path: "resume-output/Daniel_Chavez_Resume_with_References.pdf", format: "Letter", printBackground: true, margin: { top: "0.6in", right: "0.6in", bottom: "0.6in", left: "0.6in" } });
await browser.close();
console.log("resume-output/Daniel_Chavez_Resume_with_References.pdf");
