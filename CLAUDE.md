# Jak mi dělat studijní materiály

## Kdo jsem
Uživatel má ADHD/ADD a lehčí formu autismu. Není to omluva ani handicap k řešení — je to
zadání pro formát materiálů. Materiály se tomu přizpůsobují, obsah se nezjednodušuje.

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
- Když sešit říká něco nepřesného, napiš obojí a označ to (co psát do testu vs. jak to bylo).
- Žádné „jak jistě víš“ nebo předpokládané znalosti. Řekni to celé.
- Doslovné formulace. Ironie, metafory a náznaky pryč — piš, co myslíš.

**Komunikace v chatu**
- Přímo a stručně. Odpověď první, vysvětlení potom, a jen když je potřeba.
- Jedna otázka najednou, ne pět naráz.
- Kroky číslované, ne v jednom odstavci.

## Soubory

Soubory jsou roztříděny do složek podle předmětu: `dejepis/`, `cestina/`,
`fyzika/`, `matika/`, `chemie/`, `zemepis/`, `spanelstina/`. V kořenové
složce zůstává jen tenhle `CLAUDE.md` a `qr-original-csob-20kc.jpg`.

- `dejepis/30leta-valka.html` — dějepis: třicetiletá válka, Valdštejn, Komenský (tahák + kartičky + kvíz).
- `cestina/cestina.html` — čeština na prověrku: 10 okruhů (učení → kartičky → cvičení → test).
- `fyzika/fyzika.html` — fyzika, zápis 16. 9.: práce, W = F · s (tahák → kartičky → kvíz).
  Kvíz umí i **číselné odpovědi** — tolerance, desetinná čárka i tečka, mezery v tisících.
  Tenhle vzor použij pro každý počítací předmět (matika, fyzika, chemie).
- `fyzika/fyzika-tisk.html` + `fyzika/fyzika-tisk.pdf` — stejná látka na **2 listy A4** k vlepení do učebnice
  (tahák + příklady + „Zkus sám“). Bez FAQ/QR/lišty, jen autor v patičce. Kontrola: PDF musí mít 2 strany.
- `cestina/cestina-skladba-tisk.html` + `cestina/cestina-skladba-tisk.pdf` — čeština na tisk, **3 listy A4**, jedno téma
  na list: přísudek (druhy) · shoda přísudku s podmětem · druhy vedlejších vět. Každý list má „Zkus sám“
  s výsledky. Pravidla shody ověřena v IJP (`?id=600`, `601`, `602`). Kontrola: PDF musí mít 3 strany.
- `cestina/prisudek.html` — čeština, druhy přísudku od nuly (tahák → kartičky → kvíz). Jádro je postup na
  **3 kroky** + seznam 7 sloves (musím, můžu, chci, smím, mám, začnu, přestanu). Kvíz: 38 vět, možnosti
  vždy ve stejném pořadí, u každé vysvětlení. Uživatel opakovaně chybuje v pasti `budu psát` → dává
  „složený“, správně je jednoduchý. Věty typu „Šel plavat“ vynechány (školy je určují různě).
- `cestina/cestina-chyby.html` — čeština, trénink na chyby z opravdových testů uživatele (tahák → kartičky → kvíz).
  Tahák začíná kartou „Než odevzdáš test — 6 kroků“. Kvíz má **výběr tématu** (`<select id="cat">`):
  zájmena · vzory · přídavná jména · číslovky · slovesa · tělo × věci · postup na test. Otázky mají
  `c` (téma) a volitelně `t` (šablona zadání + možností v objektu `T`). Nová otázka = jeden řádek v `Q`.
- `cestina/cestina-proverka-chyby.html` — čeština 8. ročník: chyby z prověrky (78/100) a diktátu 24. 9. (5).
  Stejné jádro kvízu jako `cestina-chyby.html`, 9 témat: druhy VV · přísudek (celý, S/J) · větné členy
  holý/rozvitý/několikanásobný · pád vztažných zájmen · tečky u čísel · celé tvary sloves · slovní druhy ·
  pravopis · zadání. Ověřeno v IJP: penězi, v konvi, tabulky jenž/jež. Pravopis prověrky se z fotky
  nedal přečíst po písmenech → procvičený celý text.
- `cestina/cestina-chyby-tisk.html` + `cestina/cestina-chyby-tisk.pdf` — stejná látka na **3 listy A4**: 1) postup na test
  + zájmena, 2) vzory, přídavná jména, číslovky, slovesa, tělo × věci, 3) „Zkus sám“ (28 úloh, výsledky dole
  v rámečku). Kontrola: PDF musí mít 3 strany.
- `cestina/literarni-zanry.html` — literatura, žánry podle běžného učiva (bez zápisků ze třídy). Tahák začíná
  postupem „úryvek → žánr“. Kvíz má 4 režimy (`<select id="cat">`): úryvek → žánr (vlastní úryvky,
  ne citace), znak → žánr, žánr → druh, pasti. Stejné jádro kvízu jako `cestina-chyby.html`.
  Až uživatel pošle zápisky, sladit názvy a přidat kartu „Ověřeno — kde je sešit jiný“.
- `zemepis/mapa-evropy.html` — zeměpis, slepá mapa Evropy: 78 pojmů ze seznamu z hodiny (oceány, moře, průlivy,
  zálivy, poloostrovy, ostrovy, pohoří, řeky, jezera). Mapa je SVG z dat **Natural Earth** vložené
  přímo v souboru (offline). Kvíz: **drag & drop** názvů na čísla (pointer events → funguje i prstem,
  záloha „klikni na název, pak na číslo“) + režim „Kde je?“. Štítky se samy odsunou, když se překrývají.
  Generátor mapy: `build-map.mjs` (d3-geo, projekce azimutální, značky řek přichycené na čáru řeky).
  Neziderské jezero v datech chybí → jen bod. QR: `zemepis/qr-zemepis.png` (MSG `ZEMEPIS`, ověřeno).
- `matika/procenta.html` — matika, 7. ročník 3. díl, kapitola VIII: procenta (tahák → kartičky → kvíz).
  Obsahuje **výsledky celého pracovního sešitu A-1 až A-14** na sebekontrolu.
  Kvíz bere i zlomky: `3/4` se vyhodnotí stejně jako `0,75`.
- `matika/zlomky.html` — matika 7. ročník, zlomky od nuly (bez sešitu, podle běžného učiva): 9 témat
  s obrázky dílků, zlomky sázené pod sebou (`.fr`). Kvíz má typ `fr`: bere `3/4` i `1 1/2`
  a hlásí „hodnota sedí, ale zkrať“ / „chce se smíšené číslo“. Příští krok: uživatel pošle
  fotky testů → najít, jakou chybu dělá opakovaně, a doplnit ji do karty „Nejčastější chyby“.
- `chemie/chemie-uvod.html` — chemie, 1. zápis: co je chemie, chemický vs. fyzikální děj, obory,
  6 pravidel učebny, 9 symbolů GHS (kreslené v SVG, ne obrázky), historie, alchymie,
  periodická tabulka + karta „Ověřeno“ (tahák → kartičky → kvíz).
- `chemie/chemie-nadobi.html` — chemie: chemické nádobí a pomůcky (19 kusů, popis → název) + směsi
  (homogenní/heterogenní, roztok, oddělování: filtrace, destilace, krystalizace…). Kvíz na
  **psaní odpovědí** (`norm()`, pole `acc` s variantami), výběr tématu (`<select id="cat">`:
  nádobí / směsi). 38 karet, 59 otázek. Na ústní zkoušení 2. 10. QR: `chemie/qr-chemie2.png` (MSG `CHEMIE2`).
  Každý kus nádobí má **kreslený obrázek** (inline SVG v objektu `PIC`): galerie v taháku (`#gal`),
  obrázek na přední straně kartičky (3. prvek ve `FLASH`), téma kvízu `obr` „Obrázek → název“
  (19 otázek se generuje z popisných otázek s `img`).
- `spanelstina/spanelstina-jidlo.html` — španělština: comidas y bebidas (jídlo, pití, ovoce/zelenina, jídla dne)
  + sloveso GUSTAR celé (me/te/le/nos/os/les, gusta/gustan, negace, ¿Te gusta…?, a mí me gusta).
  Kvíz na psaní, akcenty/¿/¡ tolerantně přes `norm()`, ale ukáže správný tvar s akcenty.
  Témata: česky→španělsky (s členem, přísně) / španělsky→česky / gustar. 45 karet, 81 otázek.
  QR: `spanelstina/qr-spanelstina.png` (MSG `SPANELSTINA`). Ověřeno: Collins Spanish Grammar, SpanishDict,
  A1 slovní zásoba; regionální rozdíly (zumo/jugo, plátano/banano, almuerzo/comida) v kartě „Ověřeno“.
- `cestina/cestina-puvodni-zaloha.html` — původní verze češtiny před přestavbou. Smazat, až bude nová odladěná.
- QR na příspěvek (dají se poslat i samostatně do skupiny): `cestina/qr-cestina.png`, `dejepis/qr-dejepis.png`,
  `fyzika/qr-fyzika.png`, `matika/qr-matika.png`, `chemie/qr-chemie2.png`, `spanelstina/qr-spanelstina.png`,
  `zemepis/qr-zemepis.png`.
- `qr-original-csob-20kc.jpg` — originál z ČSOB appky (pevných 20 Kč), záloha.

**Tři pasti při úpravách hotového HTML — všechny už jednou zabily:**

1. Kotvu nehledej přes `lastIndexOf('</div>')`. Ten řetězec je i uvnitř JavaScriptu
   a blok skončí rozsekaný uprostřed kódu. Vkládej před `<script>`.
2. Konce řádků kontroluj před úpravou. `30leta-valka.html` byl dřív CRLF (dnes už je
   LF) — když soubor CRLF je, kotva s `\n` nesedne, převeď `\r\n` na `\n`.
3. V `30leta-valka.html` platí `section{display:none}` (kvůli tabům). Nová
   `<section>` je proto neviditelná, dokud jí nedáš vlastní `display`.

Po každé úpravě: `node --check` na vytažený `<script>` **a** kontrola v prohlížeči
(Playwright chromium je nainstalovaný, `playwright-core` je v npx cache).

## Ověřování faktů — povinné, ne volitelné

Materiály jdou do třídní skupiny a lidi za ně posílají peníze. Když se podle nich
někdo naučí blbost, schytá to uživatel. Proto u každého materiálu:

1. Projdi sporná místa proti zdrojům. Dějepis: Wikipedie. Čeština: **Internetová
   jazyková příručka ÚJČ** (`prirucka.ujc.cas.cz`) — ne vlastní paměť.
2. Zvlášť ověř: data, počty, tvary slov označené jako „spisovné", původ citátů a zásad.
3. Kde se sešit rozchází se skutečností, dej do materiálu kartu **„Ověřeno — kde je
   sešit nepřesný"**: co psát do testu (verze ze sešitu) a jak to bylo doopravdy.
4. Nikdy nesliboj známku. V FAQ musí zůstat jasné **NE** u otázky na garanci.

## Autorství a sítě — dávej do každého materiálu

Materiály chodí po třídní skupině a lidi si je přeposílají. Musí být z nich vidět,
kdo je udělal, aby si je nikdo nepřivlastnil.

Do **každého** HTML patří dvě věci — dělej to automaticky, bez ptaní:

1. **Řádek pod nadpisem** (`<p class="byline">`):
   > Udělal **Rosťa Čermák** · [sítě dole](#autor)

2. **Blok `<section class="author" id="autor">` nad FAQ** — nadpis „Kdo to udělal“,
   jedna věta („tenhle materiál jsem napsal a naprogramoval já, sám; není to práce
   nikoho jiného; když ho posíláš dál, nech ho celý i s tímhle blokem“) a odkazy na sítě:

   | síť | jméno | odkaz |
   |---|---|---|
   | GitHub | `WafflingNinja` | `https://github.com/WafflingNinja` |
   | TikTok | `@waffleninja7` | `https://www.tiktok.com/@waffleninja7` |
   | Telegram | `@TheWaffleNinja` | `https://t.me/TheWaffleNinja` |
   | Instagram | `angel_dust.mp4` | `https://www.instagram.com/angel_dust.mp4/` |

Pravidla:
- Odkazy vždy `target="_blank" rel="noopener noreferrer"`, tlačítka min. 48 px na výšku.
- Blok je **vždy viditelný**, nezávisle na tom, jaký tab nebo téma je otevřené.
  Pozor v `chemie-uvod.html`: blok `#extras` (FAQ + QR) se schovává, dokud nedojdeš
  na poslední téma taháku. Autorský blok proto stojí staticky mimo `#extras`.
- Pozor v `30leta-valka.html` a `procenta.html`: platí `section{display:none}`, takže
  nová sekce potřebuje vlastní `section.author{display:block}`.
- Barvy ber z proměnných daného souboru, ne napevno — každý materiál má jinou paletu
  (`--panel/--dim/--text/--accent` vs. `--card/--ink2/--ink`).
- Bez „follow me“, bez tlaku, bez počítadel. Je to cedulka s autorem, ne reklama.

## FAQ — dávej ho do každého materiálu

Sbalený blok `<section class="faq">` nad QR kódem, šest otázek:
musím platit · proč bych ti posílal peníze · zaručuje mi to známku (odpověď **Ne**,
včetně „není to oficiální materiál od školy") · jak víš, že tam nejsou chyby ·
můžu to poslat dál · kam ty peníze jdou.

## QR kód na příspěvek — dávej ho do každého materiálu

Na konec každého HTML patří nenápadný blok s QR platbou. Ne paywall, ne prosba navíc —
jedna věta a QR kód. Materiál musí fungovat i pro toho, kdo nepošle nic.

**Údaje k platbě** (ověřené, ČSOB):
- IBAN: `CZ9703000000000300369512` (= 300369512 / 0300)
- Zpráva pro příjemce: název předmětu bez diakritiky, u každého materiálu jiná
  (`CESTINA`, `DEJEPIS`, `FYZIKA`, …) — podle ní pozná, za co peníze přišly
- **Částka je pevná: `AM:20.00`.** Prázdnou částku nepoužívej — uživatel ji nechce,
  protože při ručním psaní může někdo omylem poslat řádově jinou sumu.
  Text u QR musí částku říkat nahlas („částka 20 Kč se vyplní sama").
- Bez diakritiky v `MSG` a bez mezer — ČSOB je kóduje jako `%C5%99` apod.
- Hotové PNG jsou ve složce: `qr-cestina.png`, `qr-dejepis.png`, `qr-fyzika.png`.
  Pro nový předmět vygeneruj nový se správnou zprávou a stejnou částkou.

**Postup — ověřený, funguje offline po prvním stažení balíčku:**

1. Sestav SPAYD řetězec (český standard pro QR platbu, banky ho čtou):
   ```
   SPD*1.0*ACC:<IBAN>*CC:CZK*MSG:<ZPRAVA>
   ```
   Velká písmena, bez diakritiky. Volitelně `*AM:50.00` pro pevnou částku, `*X-VS:123` pro variabilní symbol.

2. Vygeneruj PNG:
   ```
   npx -y qrcode -o qr.png -w 600 -m 2 -e M "SPD*1.0*ACC:...*CC:CZK*MSG:..."
   ```

3. **Ověř, že se dá přečíst** — tenhle krok nepřeskakuj, špatný QR nikdo nenahlásí:
   ```
   node -e "const fs=require('fs'),{PNG}=require('pngjs'),jsQR=require('jsqr');
   const p=PNG.sync.read(fs.readFileSync('qr.png'));
   console.log(jsQR(new Uint8ClampedArray(p.data),p.width,p.height).data);"
   ```
   (`npm i jsqr pngjs` ve scratchpadu, ne v projektu.)

4. Vlož do HTML jako data URI, ať zůstane jeden soubor bez závislostí:
   ```html
   <img src="data:image/png;base64,<BASE64>" alt="QR kód pro platbu" width="180" height="180">
   ```
   PNG 600 px má v base64 asi 5 kB — na velikosti souboru nezáleží.

5. Text vedle QR, přesně v tomhle duchu, bez tlaku:
   > Dělal jsem to hlavně pro sebe, tak si to klidně vezmi. Kdyby chtěl někdo přihodit na kafe, tady je QR. Nemusí nikdo, funguje to všem stejně.

## Lišta s příspěvkem — rozhodnutí uživatele

Každý materiál má dole lištu `#tipbar` ve stylu cookie banneru:

- naskočí **po 45 sekundách** na stránce, ne hned po otevření
- ukáže se **jen jednou** — volba se uloží do `S.tipSeen` a po dalším otevření už nevyskočí
- **jediná výjimka:** po dokončení kvízu (`finish()` volá `window.__tipbar.afterQuiz()`)
- **během kvízu nevyskočí vůbec**, aby nerušila při počítání — časovač počká
- „Ukázat QR" ji vypne do konce a odroluje na QR blok; pak už ani po kvízu
- „Teď ne" → text zmizí, zůstane **„oka.... 😓"** a lišta se 1,6 s pomalu vytrácí.
  Kdo má v systému omezené animace, dostane okamžité zmizení bez fade.
  Pozor: `[hidden]` v tmavých materiálech přebíjí `display:flex`, proto je tam
  potřeba pravidlo `.tipbar [hidden]{display:none!important}`.
- pozici nad spodními taby si dopočítá JS podle skutečné výšky navigace,
  protože `30leta-valka.html` spodní taby vůbec nemá (má pilulky nahoře)

Historie rozhodnutí: uživatel nejdřív chtěl opakování po 12 minutách, pak to vzal zpět
s tím, ať to lidi neotravuje. Nezvyšuj frekvenci zpátky.

**Nedělej:** paywall, zamčené kapitoly, „odemkni za 50 Kč", vymyšlená počítadla dárců,
modální okna přes obsah, odpočty, guilt-trip texty. Materiál je zadarmo.

## Ověřené parametry (drž se jich u dalších materiálů)
- Taby dole na mobilu (palec), nahoře na desktopu. Tlačítka min. 48 px na výšku.
- Kvíz po kolech po 6 otázkách, pauza mezi koly, stav v `localStorage`.
- Kartičky: „umím / ještě ne" + filtr „jen co neumím".
- Testovat v prohlížeči na 390×844 px: žádný vodorovný přetok, žádné animace.
