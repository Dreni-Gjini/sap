import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "presenter", "presenter.html");
const outPath = path.join(root, "presenter", "presenter-notes.pdf");

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });
await page.pdf({
  path: outPath,
  format: "A4",
  printBackground: true,
  margin: { top: "20mm", bottom: "22mm", left: "18mm", right: "18mm" },
  displayHeaderFooter: true,
  headerTemplate: `<div style="font-size:8pt;color:#888;width:100%;padding:0 18mm;">Private AI for SAP · Presenter Notes</div>`,
  footerTemplate: `<div style="font-size:8pt;color:#888;width:100%;padding:0 18mm;text-align:right;">
    <span class="pageNumber"></span> / <span class="totalPages"></span>
  </div>`,
});
await browser.close();
console.log("wrote", outPath);
