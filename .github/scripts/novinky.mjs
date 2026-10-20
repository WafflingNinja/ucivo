// Zjistí, které materiály přibyly nebo se změnily od posledního oznámení,
// doplní novinky.json + novinky.html a připraví text zprávy pro skupinu.
// Použití: node .github/scripts/novinky.mjs <after> <baseUrl> <outDir>
import { execFileSync } from 'node:child_process';
import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const [after, baseArg, outDir] = process.argv.slice(2);
const base = baseArg.replace(/\/*$/, '/');

const SUBJECTS = {
  dejepis: 'Dějepis', cestina: 'Čeština', matika: 'Matika', fyzika: 'Fyzika', chemie: 'Chemie',
  zemepis: 'Zeměpis', spanelstina: 'Španělština', anglictina: 'Angličtina', prirodopis: 'Přírodopis',
};
// Anonymní kopie (viz CLAUDE.md, Anonymita) a záloha se nikdy neoznamují.
const IGNORE = new Set([
  'cestina/cestina-puvodni-zaloha.html',
  'prirodopis/genetika-pojmy.html',
  'zemepis/evropa-krajina.html',
]);

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' });
const data = JSON.parse(readFileSync('novinky.json', 'utf8'));

const changes = git('diff', '--no-renames', '--name-status', data.last, after, '--', '*/*.html')
  .split('\n').filter(Boolean).map((l) => l.split('\t'))
  .filter(([s, p]) => (s === 'A' || s === 'M') && /^[a-z]+\/[^/]+\.html$/.test(p)
    && SUBJECTS[p.split('/')[0]] && !IGNORE.has(p));

const items = changes.map(([s, p]) => {
  const subject = SUBJECTS[p.split('/')[0]];
  const m = readFileSync(p, 'utf8').match(/<title>([^<]*)<\/title>/);
  const title = (m ? m[1] : p).replace(new RegExp(`^${subject}\\s*—\\s*`, 'i'), '').trim();
  return { path: p, title, subject, kind: s === 'A' ? 'new' : 'update' };
});

const out = (k, v) => process.env.GITHUB_OUTPUT && appendFileSync(process.env.GITHUB_OUTPUT, `${k}=${v}\n`);
if (!items.length) { out('changed', 'false'); console.log('Nic k oznámení.'); process.exit(0); }

const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Prague' });
let day = data.days.find((d) => d.date === today);
if (!day) { day = { date: today, items: [] }; data.days.unshift(day); }
for (const it of items) {
  const old = day.items.find((x) => x.path === it.path);
  if (!old) day.items.push(it);
  else if (old.kind !== 'new') old.kind = it.kind;
}
data.last = after;
writeFileSync('novinky.json', JSON.stringify(data, null, 1) + '\n');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cz = (iso, year) => { const [y, m, d] = iso.split('-').map(Number); return `${d}. ${m}.${year ? ' ' + y : ''}`; };
const COLORS = {
  Dějepis: '#f5c14a', Čeština: '#fb7185', Matika: '#a3e635', Fyzika: '#60a5fa', Chemie: '#2dd4bf',
  Zeměpis: '#c084fc', Španělština: '#fb923c', Angličtina: '#38bdf8', Přírodopis: '#4ade80',
};

const html = data.days.map((d) => `<section class="day"><h2><time datetime="${d.date}">${cz(d.date, true)}</time></h2>\n` +
  d.items.map((i) => `<a class="item" style="--c:${COLORS[i.subject]}" href="${esc(i.path)}"><span class="tag ${i.kind}">${i.kind === 'new' ? 'Nové' : 'Upraveno'}</span><b>${esc(i.title)}</b><span class="dim">${i.subject}</span></a>`).join('\n') +
  '\n</section>').join('\n');

const START = '<!--NOVINKY:START-->', END = '<!--NOVINKY:END-->';
const page = readFileSync('novinky.html', 'utf8');
const a = page.indexOf(START), b = page.indexOf(END);
writeFileSync('novinky.html', page.slice(0, a + START.length) + '\n' + html + '\n' + page.slice(b));

const lines = (kind) => items.filter((i) => i.kind === kind).map((i) => `- ${i.subject}: ${i.title}\n  ${base}${i.path}`);
const block = (head, kind) => (lines(kind).length ? `${head}\n${lines(kind).join('\n')}\n\n` : '');
const message = `Novinky na Učivu (${cz(today)})\n\n${block('Nové:', 'new')}${block('Upraveno:', 'update')}Všechny novinky: ${base}novinky.html`;

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/message.txt`, message + '\n');
writeFileSync(`${outDir}/issue.md`, [
  '@WafflingNinja Na webu jsou nové věci. Do skupiny je pošleš takhle:',
  '',
  '1. Klepni na odkaz níže. Otevře se WhatsApp s hotovým textem.',
  '2. Vyber skupinu.',
  '3. Odešli.',
  '',
  `[Otevřít ve WhatsAppu](https://wa.me/?text=${encodeURIComponent(message)})`,
  '',
  'Kdyby odkaz nešel, zkopíruj tenhle text:',
  '',
  '```',
  message,
  '```',
  '',
].join('\n'));
out('changed', 'true');
out('date', cz(today));
console.log(message);
