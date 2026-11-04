// Při nasazení doplní do _site: meta popisky, canonical, Open Graph, JSON-LD, robots.txt a sitemap.xml.
// Zdrojové soubory v repu se nemění. Použití: node seo.mjs <složka _site> <základní URL bez lomítka na konci>
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const [root, baseRaw] = process.argv.slice(2);
if (!root || !baseRaw) { console.error('použití: seo.mjs <_site> <base_url>'); process.exit(1); }
const base = baseRaw.replace(/\/+$/, '');

const SUBJECTS = {
  dejepis: 'Dějepis', cestina: 'Čeština', matika: 'Matika', fyzika: 'Fyzika', chemie: 'Chemie',
  zemepis: 'Zeměpis', spanelstina: 'Španělština', anglictina: 'Angličtina', prirodopis: 'Přírodopis',
};
// Anonymní kopie (viz CLAUDE.md, Anonymita) a technické stránky: nikdy do vyhledávačů.
const NOINDEX = new Set([
  'devmenu.html', 'novinky.html',
  'prirodopis/genetika-pojmy.html', 'zemepis/evropa-krajina.html', 'cestina/dopis-lakomec.html',
]);
const SITE = 'Učivo';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const lastmod = (p) => {
  try { return execFileSync('git', ['log', '-1', '--format=%cs', '--', p], { encoding: 'utf8' }).trim() || null; }
  catch { return null; }
};

const files = ['index.html', 'novinky.html', 'devmenu.html'];
for (const d of Object.keys(SUBJECTS)) {
  if (!existsSync(join(root, d))) continue;
  for (const f of readdirSync(join(root, d))) if (f.endsWith('.html')) files.push(`${d}/${f}`);
}

const sitemap = [];
for (const rel of files) {
  const path = join(root, rel);
  if (!existsSync(path)) continue;
  let html = readFileSync(path, 'utf8');
  const m = html.match(/<title>([^<]*)<\/title>/);
  if (!m || /rel="canonical"/.test(html)) continue;
  const title = m[1].trim();
  const subject = SUBJECTS[rel.split('/')[0]];
  const url = rel === 'index.html' ? `${base}/` : `${base}/${rel}`;
  const noindex = NOINDEX.has(rel);

  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const lead = (t) => (title.startsWith(subject) ? cap(t) : `${subject}: ${t}`); // titulek často už začíná předmětem
  let desc;
  if (rel === 'index.html') {
    desc = 'Zdarma studijní materiály v češtině: dějepis, čeština, matika, fyzika, chemie, zeměpis, španělština, angličtina a přírodopis. Tahák, kartičky a kvíz. Funguje i offline.';
  } else if (/-tisk\.html$/.test(rel)) {
    desc = `${title}. ${lead('látka na listy A4 k vytištění, ke stažení i jako PDF.')} Zdarma.`;
  } else if (html.includes('id="qz"')) {
    desc = `${title}. ${lead('tahák, kartičky a kvíz s okamžitou zpětnou vazbou.')} Zdarma, jeden soubor, funguje i offline.`;
  } else {
    desc = `${title}. ${lead('studijní materiál zdarma, funguje i offline.')}`;
  }

  const tags = [];
  if (!/name="description"/.test(html)) tags.push(`<meta name="description" content="${esc(desc)}">`);
  tags.push(`<meta name="robots" content="${noindex ? 'noindex,follow' : 'index,follow'}">`);
  if (!noindex) {
    tags.push(`<link rel="canonical" href="${url}">`);
    tags.push(`<meta property="og:type" content="website">`);
    tags.push(`<meta property="og:site_name" content="${SITE}">`);
    tags.push(`<meta property="og:locale" content="cs_CZ">`);
    tags.push(`<meta property="og:title" content="${esc(title)}">`);
    tags.push(`<meta property="og:description" content="${esc(desc)}">`);
    tags.push(`<meta property="og:url" content="${url}">`);
    tags.push(`<meta name="twitter:card" content="summary">`);
    const ld = rel === 'index.html'
      ? { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE, url, inLanguage: 'cs', description: desc }
      : {
        '@context': 'https://schema.org', '@type': 'LearningResource', name: title, description: desc, url,
        inLanguage: 'cs', isAccessibleForFree: true, learningResourceType: 'study material',
        about: subject, isPartOf: { '@type': 'WebSite', name: SITE, url: `${base}/` },
      };
    tags.push(`<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  }
  html = html.replace(m[0], `${m[0]}\n${tags.join('\n')}`);
  writeFileSync(path, html);
  if (!noindex) sitemap.push({ url, mod: lastmod(rel) });
}

const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  + sitemap.map((s) => `  <url><loc>${s.url}</loc>${s.mod ? `<lastmod>${s.mod}</lastmod>` : ''}</url>`).join('\n') + '\n</urlset>\n';
writeFileSync(join(root, 'sitemap.xml'), xml);
writeFileSync(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
console.log(`SEO: ${sitemap.length} stránek v sitemap.xml, ${files.length - sitemap.length} s noindex nebo přeskočeno`);
