// Přegeneruje tisková PDF z HTML (a PDF slepé mapy z dat v mapa-evropy.html).
// Použití: node .github/scripts/build-pdf.mjs   (potřebuje Playwright + chromium, v repu není jako závislost)
// Kontrola po běhu: počet stran sedí? fyzika-tisk 2, cestina-chyby-tisk 3, cestina-skladba-tisk 3, baroko-tisk 1, mapa-evropy 3.
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = resolve(new URL('../../', import.meta.url).pathname);

const TISK = ['fyzika/fyzika-tisk', 'cestina/cestina-chyby-tisk', 'cestina/cestina-skladba-tisk', 'dejepis/baroko-tisk'];

const html = readFileSync(`${root}/zemepis/mapa-evropy.html`, 'utf8');
const MAP = JSON.parse(html.match(/var MAP = (\{.*\});\n/)[1]);
const CATS = [['ocean', 'Oceány'], ['more', 'Moře'], ['pruliv', 'Průlivy'], ['zaliv', 'Zálivy'], ['poloostrov', 'Poloostrovy'],
  ['ostrov', 'Ostrovy'], ['pohori', 'Pohoří'], ['reka', 'Řeky'], ['jezero', 'Jezera']];
const PAGES = [['ocean', 'more', 'pruliv', 'zaliv'], ['poloostrov', 'ostrov', 'pohori'], ['reka', 'jezero']];

function mapPage(cats, n) {
  let k = 0, pins = '', legend = '';
  for (const c of cats) {
    const items = MAP.items.filter((i) => i.cat === c);
    const name = CATS.find((x) => x[0] === c)[1];
    let cells = '';
    for (const it of items) {
      k++;
      pins += `<g><circle cx="${it.x * MAP.w}" cy="${it.y * MAP.h}" r="7.5" fill="#fff" stroke="#c0392b" stroke-width="1.2"/>`
        + `<text x="${it.x * MAP.w}" y="${it.y * MAP.h + 3}" text-anchor="middle" font-size="8.5" font-weight="700" fill="#222">${k}</text></g>`;
      cells += `<div><b>${k}</b><span>${it.name}</span></div>`;
    }
    legend += `<h3>${name}</h3><div class="g">${cells}</div>`;
  }
  return `<section><h1>Zeměpis - slepá mapa Evropy (${n}/3)</h1><p class="by">Mapa: Natural Earth</p>
  <svg viewBox="0 0 ${MAP.w} ${MAP.h}">${MAP.svg}${pins}</svg>${legend}
  <p class="fn">Body a čísla ukazují orientační místo. V testu piš název tam, kde je v atlase.</p></section>`;
}

const mapHtml = `<!doctype html><html lang="cs"><meta charset="utf-8"><style>
@page{size:A4;margin:14mm 15mm}
*{box-sizing:border-box}body{margin:0;font:9pt/1.35 Arial,Helvetica,sans-serif;color:#222}
section{page-break-after:always}section:last-child{page-break-after:auto}
h1{font-size:14pt;margin:0 0 2mm}.by{font-size:7.5pt;color:#555;margin:0 0 3mm}
svg{width:100%;height:auto;display:block;border:1px solid #bbb}
.sea{fill:#dbe9f2}.land{fill:#efeadc;stroke:#a89f8a;stroke-width:.4}.lake{fill:#b9d6ea}.riv{fill:none;stroke:#1f6fb5;stroke-width:1}
h3{font-size:8.5pt;margin:4mm 0 1mm;border-bottom:1px solid #444;padding-bottom:.6mm}
.g{display:grid;grid-template-columns:repeat(4,1fr);gap:.8mm 3mm;font-size:7.5pt}
.g div{display:flex;gap:2.2mm}.g b{color:#c0392b;min-width:4mm}
.fn{font-size:7pt;color:#555;margin-top:5mm}
</style><body>${PAGES.map((p, i) => mapPage(p, i + 1)).join('')}</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
for (const t of TISK) {
  await page.goto(`file://${root}/${t}.html`);
  await page.pdf({ path: `${root}/${t}.pdf`, preferCSSPageSize: true, printBackground: true });
  console.log('PDF', t);
}
await page.setContent(mapHtml);
await page.pdf({ path: `${root}/zemepis/mapa-evropy.pdf`, preferCSSPageSize: true, printBackground: true });
console.log('PDF zemepis/mapa-evropy');
await browser.close();
