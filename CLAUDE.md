# Jak dělat studijní materiály

## Pro koho
Materiály jsou psané tak, aby se z nich dobře učilo i při potížích se soustředěním.
Formát se tomu přizpůsobuje, obsah se nezjednodušuje.

## Pravidla pro každý studijní materiál

**Formát**
- Vždy jeden samostatný HTML soubor (offline, bez závislostí), ne dlouhý text v chatu.
- Krátké bloky. Jedna karta = jedno téma. Žádné odstavce delší než 3 řádky.
- Odrážky > souvislý text. Tučně/barevně jen klíčové slovo, ne celá věta.
- Datumy, jména a čísla vždy vizuálně odlišené (timeline, `key` span, tabulka).

**Struktura**
- Pořadí: Tahák (fakta) → Kartičky (aktivní vybavování) → Kvíz (test).
- Taby, ne nekonečné scrollování. Vždy vidět, kde jsem (progress bar, „3 z 20“).
- Kvíz: zamíchané otázky, okamžitá zpětná vazba po každé odpovědi, na konci
  seznam chyb + tlačítko „jen chyby“. Bez toho to nefunguje.

**Interakce**
- Okamžitá odezva na klik. Žádné „odpověz na 20 otázek a pak uvidíš výsledek“.
- Krátké session — materiál musí jít zavřít po 5 minutách a vrátit se k němu.
- Bez časových limitů a odpočtů. Stres výkon shazuje, nezvyšuje.
- Bez blikání, bez automatických animací na pozadí, bez zvuků.

**Obsah**
- Konkrétní věci před abstraktními. Datum + událost, ne „složité politické důvody“.
- Když je běžně uváděná verze nepřesná, napiš obojí a označ to (co psát do testu × jak to bylo).
- Žádné „jak jistě víš“ nebo předpokládané znalosti. Řekni to celé.
- Doslovné formulace. Ironie, metafory a náznaky pryč — piš, co myslíš.

**Komunikace v chatu**
- Přímo a stručně. Odpověď první, vysvětlení potom, a jen když je potřeba.
- Jedna otázka najednou, ne pět naráz.
- Kroky číslované, ne v jednom odstavci.

## Anonymita — pravidlo číslo 1 (platí od 4. 11. 2026)

Do materiálů, do repa ani do commitů **nepiš nic, podle čeho by šlo poznat autora**, kromě tří odkazů na sítě níže:
- žádné jméno, e-mail ani odkaz na GitHub,
- žádný řádek „Udělal …“ se jménem, žádný `author` v JSON-LD,
- žádnou třídu, ročník, školu, jméno učitele ani spolužáků, žádné zmínky o školním plánu,
- žádné výsledky testů, body, známky ani data konkrétních prověrek,
- **žádnou zmínku, že obsah je ze sešitu, zápisu, poznámek, fotek nebo tabule.**
  Místo toho piš „zjednodušená verze × jak to bylo“, nebo jen fakta.
- Do commit message a popisu PR taky nepiš „podle sešitu / fotek / poznámek“. Piš jen, co se změnilo.

**Jediná výjimka (4. 11. 2026): tři sítě.** Do každého materiálu (kromě anonymních kopií) patří:
1. řádek pod nadpisem `<p class="byline"><a href="#autor">sítě dole</a></p>`,
2. blok `<section class="author" id="autor">` nad FAQ s nadpisem „Kdo to udělal“, jednou větou
   („tenhle materiál jsem napsal a naprogramoval já, sám; není to práce nikoho jiného; když ho posíláš dál, nech ho celý i s tímhle blokem“)
   a třemi odkazy (`target="_blank" rel="noopener noreferrer"`, tlačítka min. 48 px):

   | síť | jméno | odkaz |
   |---|---|---|
   | TikTok | `@waffleninja7` | `https://www.tiktok.com/@waffleninja7` |
   | Telegram | `@TheWaffleNinja` | `https://t.me/TheWaffleNinja` |
   | Instagram | `angel_dust.mp4` | `https://www.instagram.com/angel_dust.mp4/` |

3. u tiskových listů v patičce `TikTok @waffleninja7 · Telegram @TheWaffleNinja · IG angel_dust.mp4`.
Blok je vždy viditelný (v materiálech se `section{display:none}` potřebuje `section.author{display:block}`).
Barvy ber z proměnných daného souboru. Bez „follow me“, bez tlaku, bez počítadel.
**GitHub a jméno se nevracejí.**

Platí i pro nové materiály. Anonymní kopie (`prirodopis/genetika-pojmy.html`,
`zemepis/evropa-krajina.html`, `cestina/dopis-lakomec.html`) nemají ani sítě, a nesmí se na ně odkazovat z veřejných stránek ani ze sitemap.

Nejde to vzít zpět: git historie, staré issues a PR, cache vyhledávačů a to, co už lidé přeposlali.
Adresa webu a repa obsahuje jméno GitHub účtu. Skutečná anonymita = nový účet a nové repo.

## Ověřování faktů — povinné, ne volitelné

Materiály jdou do veřejných skupin a lidi za ně posílají peníze. Když se podle nich
někdo naučí blbost, schytá to autor. Proto u každého materiálu:

1. Projdi sporná místa proti zdrojům. Dějepis: Wikipedie. Čeština: **Internetová
   jazyková příručka ÚJČ** (`prirucka.ujc.cas.cz`) — ne vlastní paměť.
2. Zvlášť ověř: data, počty, tvary slov označené jako „spisovné", původ citátů a zásad.
3. Kde se běžně uváděná verze rozchází se skutečností, dej do materiálu kartu
   **„Ověřeno — kde to bývá nepřesné"**: co psát do testu (zjednodušená verze) a jak to bylo doopravdy.
4. Nikdy nesliboj známku. V FAQ musí zůstat jasné **NE** u otázky na garanci.
5. Nepiš, že je to oficiální materiál. FAQ říká opak: „Není to oficiální materiál.“

## Soubory

Soubory jsou roztříděny do složek podle předmětu: `dejepis/`, `cestina/`, `fyzika/`, `matika/`,
`chemie/`, `zemepis/`, `spanelstina/`, `anglictina/`, `prirodopis/`. V kořeni: `index.html` (lobby a myšlenková mapa),
`novinky.html`/`novinky.json`, `devmenu.html`, `CLAUDE.md` a `qr-original-csob-20kc.jpg`.

Co kde je (stručně; jeden materiál = tahák + kartičky + kvíz, pokud není psáno jinak):
- `dejepis/`: `30leta-valka.html`, `absolutismus-osvicenstvi.html` (8 témat, časová osa, roky bez mezery `y:true`),
  `baroko-tisk.html` (+ PDF, 1 list A4).
- `cestina/`: `cestina.html` (10 okruhů), `prisudek.html` (postup na 3 kroky, past `budu psát` = jednoduchý),
  `cestina-chyby.html` a `cestina-proverka-chyby.html` (výběr tématu `<select id="cat">`, otázky `c` + volitelně `t`),
  `cestina-chyby-tisk.html` (3 listy A4) a `cestina-skladba-tisk.html` (3 listy A4) včetně PDF,
  `literarni-zanry.html` (4 režimy), `funkcni-styly.html`, `lakomec.html` (čtenářský deník, kvíz 29 otázek),
  `dopis-lakomec.html` (anonymní, jak napsat dopis; pravidla ověřena v IJP).
- `fyzika/`: `fyzika.html` (**číselný kvíz**: tolerance, čárka i tečka, mezery v tisících — vzor pro každý počítací předmět),
  `fyzika-tisk.html` (+ PDF, 2 listy A4), `fyzika-vykon.html`, `kmity-rezonance.html`.
- `matika/`: `procenta.html` (včetně těžších úloh na základ, kvíz bere i zlomky `3/4`), `zlomky.html` (typ `fr`).
- `chemie/`: `chemie-uvod.html` (GHS v SVG), `chemie-nadobi.html` (19 kusů s kreslenými obrázky, kvíz na psaní, `norm()`),
  `chemie-deleni-smesi.html` (vlastnosti látek, stejnorodé × různorodé směsi, 6 metod dělení, kreslené SVG obrázky aparatur a směsí (`DG`, číslované části, i v kartičkách a kvízu), výběr metody;
  42 kartiček, 74 otázek).
- `zemepis/`: `mapa-evropy.html` (slepá mapa, 78 pojmů, SVG z Natural Earth, drag & drop; Neziderské jezero v datech chybí → jen bod),
  `evropa-priroda.html`, `evropa-krajina.html` (anonymní).
- `spanelstina/spanelstina-jidlo.html` (comidas y bebidas + gustar, kvíz na psaní, akcenty tolerantně).
- `anglictina/past-modals.html`, `prirodopis/genetika-uvod.html`, `prirodopis/genetika-pojmy.html` (anonymní).
- `cestina/cestina-puvodni-zaloha.html` — záloha staré verze, na web se nenasazuje. Smazat, až bude jistota.
- QR na příspěvek: `qr-*.png` v každé složce.
- `index.html` — lobby + myšlenková mapa (SVG `#g`). **Nový materiál se do mapy nedoplňuje sám**, viz past 4.
- `novinky.html` + `novinky.json` + `.github/scripts/novinky.mjs` — „co je nového“. Po pushi do `master` (`pages.yml`)
  skript přidá nové/změněné `*/*.html` mezi značky `NOVINKY:START/END` (ručně tam nepiš) a otevře GitHub issue s odkazem
  `wa.me/?text=…`. Přeskakuje anonymní kopie a zálohu (seznam `IGNORE`) — nový anonymní materiál přidej tam.
- `.github/scripts/build-pdf.mjs` — přegeneruje všech 5 PDF (`fyzika-tisk` 2 strany, `cestina-chyby-tisk` 3, `cestina-skladba-tisk` 3,
  `baroko-tisk` 1, `mapa-evropy` 3) z HTML; PDF mapy staví z dat v `mapa-evropy.html`. **Po každé úpravě tiskového HTML nebo textu
  v něm PDF přegeneruj** — PDF jsou hotové soubory a samy se neaktualizují (po úpravě textů v nich zůstalo staré jméno).
  Spuštění: `NODE_PATH="$(npm root -g)" node .github/scripts/build-pdf.mjs`, pak `pdfinfo` na počet stran a `pdftotext | grep` na zakázané texty.
  Listy mají pevnou výšku s `overflow:hidden` — co se nevejde, se potichu ořízne (patička se sítěmi), kontroluj text v PDF.
- `.github/scripts/seo.mjs` — při nasazení doplní do `_site` popisky, canonical, Open Graph, JSON-LD (bez autora),
  `robots.txt` a `sitemap.xml`. Anonymní kopie, `devmenu.html` a `novinky.html` mají `noindex` a nejsou v sitemap —
  nový anonymní materiál přidej do `NOINDEX` v tom skriptu **i** do `IGNORE` v novinky.mjs.
  Nová složka předmětu = přidat do cyklu `for d in …` v `pages.yml` (chybějící `anglictina` dělala na webu 404) a do `SUBJECTS`.
  Do Google Search Console se web musí přidat ručně.
- `devmenu.html` — tajné dev menu (otevírá se z lobby: ↑↑↓↓←→←→BA nebo 5× klepnout na bublinu „Učivo“). Počítá návštěvy
  jen v localStorage daného prohlížeče. Publikuje se přes `pages.yml` (cp řádek).

**Čtyři pasti při úpravách hotového HTML — všechny už jednou zabily:**

1. Kotvu nehledej přes `lastIndexOf('</div>')`. Ten řetězec je i uvnitř JavaScriptu
   a blok skončí rozsekaný uprostřed kódu. Vkládej před `<script>`.
2. Konce řádků kontroluj před úpravou. Když je soubor CRLF, kotva s `\n` nesedne, převeď `\r\n` na `\n`.
3. V `30leta-valka.html` a `procenta.html` platí `section{display:none}` (kvůli tabům). Nová
   `<section>` je proto neviditelná, dokud jí nedáš vlastní `display`.
4. Myšlenková mapa v `index.html` (SVG `#g`): nový materiál = ručně uzel `<a><g>…` + čára `<path>` od předmětu.
   Čáru vlož před první `<a` **uvnitř `<g id="vp">`**, ne před první `<a href=…>` v souboru, jinak se vykreslí mimo mapu.
   Po přidání zkontroluj, že každý odkaz v seznamu pod mapou má i uzel v SVG.

Po každé úpravě: `node --check` na vytažený `<script>` **a** kontrola v prohlížeči
(Playwright chromium je nainstalovaný, `playwright-core` je v npx cache).

## FAQ — dávej ho do každého materiálu

Sbalený blok `<section class="faq">` nad QR kódem, šest otázek:
musím platit · proč bych ti posílal peníze · zaručuje mi to známku (odpověď **Ne**,
včetně „Není to oficiální materiál“) · jak víš, že tam nejsou chyby ·
můžu to poslat dál · kam ty peníze jdou. Bez zmínek o škole, třídě, učiteli a sešitu.

## QR kód na příspěvek — dávej ho do každého materiálu

Na konec každého HTML patří nenápadný blok s QR platbou. Ne paywall, ne prosba navíc —
jedna věta a QR kód. Materiál musí fungovat i pro toho, kdo nepošle nic.

**Údaje k platbě** (ČSOB):
- IBAN: `CZ9703000000000300369512` (= 300369512 / 0300)
- Zpráva pro příjemce: název předmětu bez diakritiky, u každého materiálu jiná
  (`CESTINA`, `DEJEPIS`, `FYZIKA`, …) — podle ní pozná, za co peníze přišly
- **Částka je pevná: `AM:20.00`.** Prázdnou částku nepoužívej. Text u QR musí částku říkat nahlas
  („částka 20 Kč se vyplní sama").
- Bez diakritiky v `MSG` a bez mezer.

**Postup:**
1. SPAYD řetězec: `SPD*1.0*ACC:<IBAN>*CC:CZK*AM:20.00*MSG:<ZPRAVA>`
2. PNG: `npx -y qrcode -o qr.png -w 600 -m 2 -e M "<řetězec>"`
3. **Ověř, že se dá přečíst** (jsQR + pngjs ve scratchpadu, ne v projektu). Tenhle krok nepřeskakuj.
4. Vlož do HTML jako data URI (`<img src="data:image/png;base64,…" alt="QR kód pro platbu" width="180" height="180">`).
5. Text vedle QR, bez tlaku: „Dělal jsem to hlavně pro sebe, tak si to klidně vezmi. Kdyby chtěl někdo přihodit na kafe,
   tady je QR. Nemusí nikdo, funguje to všem stejně.“

## Lišta s příspěvkem

Každý materiál má dole lištu `#tipbar` ve stylu cookie banneru:
- naskočí **po 45 sekundách**, ukáže se **jen jednou** (`S.tipSeen`); výjimka: po dokončení kvízu (`finish()` volá `window.__tipbar.afterQuiz()`)
- **během kvízu nevyskočí vůbec**
- „Ukázat QR" ji vypne a odroluje na QR blok; „Teď ne" → „oka.... 😓" a 1,6 s pomalu mizí
  (kdo má omezené animace, dostane okamžité zmizení)
- v tmavých materiálech je potřeba `.tipbar [hidden]{display:none!important}`
- pozici nad spodními taby si dopočítá JS podle skutečné výšky navigace
Frekvenci nezvyšuj. **Nedělej:** paywall, zamčené kapitoly, „odemkni za 50 Kč", vymyšlená počítadla dárců,
modální okna přes obsah, odpočty, guilt-trip texty.

## Ověřené parametry
- Taby dole na mobilu (palec), nahoře na desktopu. Tlačítka min. 48 px na výšku.
- Kvíz po kolech po 6 otázkách, pauza mezi koly, stav v `localStorage`.
- Kartičky: „umím / ještě ne" + filtr „jen co neumím".
- Testovat v prohlížeči na 390×844 px: žádný vodorovný přetok, žádné animace.
