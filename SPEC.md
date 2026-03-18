# Tamminen Konsult AB - Webbplats Spec v0.1

## 1. Syfte
Skapa en modern, ljus och trovärdig webbplats for Tamminen Konsult AB som:
- presenterar verksamheten kortfattat och professionellt
- guidar besokaren vidare till ratt sektion med tydlig struktur
- driver kontaktforfragan via en stark CTA i hero-sektionen

Primart mal: fler kvalificerade kontaktforfragan.

## 2. Målgrupp
- Fastighetsagare, BRF:er och forvaltare
- Byggherrar och entreprenorer
- Bestallare med behov av fuktsakkunskap, byggledning eller projektledning

## 3. Positionering och budskap
Tamminen Konsult AB ar ett enmansforetag drivet av Rebecka Tamminen:
- Diplomerad Fuktsakkunnig
- Projektledare
- Byggledare
- Byggdoktor

Ton: trygg, tydlig, sakkunnig, tillganglig.

## 4. Informationsarkitektur (sidor)
Primar meny:
1. Startsida
2. Tjanster
3. Referensuppdrag
4. Om oss
5. Kontakt

Footer ska innehalla sitemap med lankar till samtliga ovanstaende sidor.

## 5. Startsida - innehallsordning (AIDA)
Startsidan byggs i foljande ordning:

1. Hero (Attention + Action)
2. Kort summering om foretaget (Interest)
3. Tjanster (Interest + Desire)
4. Referensuppdrag (Desire)
5. Om oss (Desire + Trust)
6. Kontakt (Action)
7. Footer med sitemap

## 6. Sektion-spec for startsidan
### 6.1 Hero
**Mal:** Fanga uppmarksamhet pa 3-5 sekunder och skapa tydlig vag till kontakt.

**Innehall:**
- H1 med tydligt vardelofte
- Kort ingress (1-2 meningar)
- Primar CTA: "Kontakta oss" (mycket tydlig)
- Sekundar CTA (valfritt): "Se tjanster" eller "Se referensuppdrag"
- Visuell yta till hoger (foto/illustration/kort med styrkor)

**Foreslagen CTA-beteende:**
- Primar CTA scrollar till kontaktsektionen pa startsidan
- Alternativt lank till `/kontakt`

### 6.2 Kort summering om foretaget
**Mal:** Snabbt bygga forstaende och trovardighet.

**Innehall:**
- Kort beskrivning av vad bolaget gor
- 3-4 punkter med nyckelstyrkor (ex. erfarenhet, kvalitet, tydlig kommunikation)

### 6.3 Tjanster
**Mal:** Visa erbjudandet tydligt och lattscannat.

**Innehall:**
- Sektionstitel + kort intro
- Tjanstekort i grid (3-6 kort initialt)
- Varje kort: titel, kort beskrivning, lank till fordjupning pa `/tjanster`

Exempel pa tjanstekategorier:
- Fuktsakkunnig
- Projektledning
- Byggledning
- Byggdoktor / utredning

### 6.4 Referensuppdrag
**Mal:** Starka social proof och resultat.

**Innehall:**
- 2-4 utvalda referenscase i kortformat
- Per case: uppdragstyp, utmaning, insats, resultat
- CTA: "Se alla referensuppdrag"

### 6.5 Om oss
**Mal:** Bygga personligt fortroende.

**Innehall:**
- Kort presentation av Rebecka Tamminen
- Roller/certifieringar synligt presenterade
- Fokus pa arbetssatt och varderingar

### 6.6 Kontakt
**Mal:** Omvandla besokare till kontakt.

**Innehall:**
- Rubrik med tydlig uppmaning
- Kort text om svarstid/typ av forfragan
- Kontaktvagar: e-post, telefon, ev. formulär
- Ev. knapp for att boka ett forsta samtal

### 6.7 Footer + sitemap
**Innehall:**
- Foretagsnamn
- Snabblankar: Startsida, Tjanster, Referensuppdrag, Om oss, Kontakt
- Kontaktuppgifter i kortformat

## 7. Designriktlinjer
### 7.1 Visuell riktning
- Ljus, luftig och professionell design
- Orange som accentfarg (CTA, highlights, ikoner/detaljer)
- Inspireras av referensbildens struktur:
  - tydlig hero
  - kortbaserade sektioner
  - mjuka ytor, bra spacing, hog lasbarhet

### 7.2 Typografi
- Rubriker: Space Grotesk
- Brodtext/UI-text: Inter

### 7.3 Stilprinciper
- Hoga kontraster for CTA
- Tydliga rubrikhierarkier (H1-H3)
- Mjuka radier och diskreta skuggor
- Mobil-forst och responsivt fran start

## 8. Teknisk riktning
- Ramverk: Next.js
- Struktur byggs sa att Sanity CMS kan kopplas pa senare
- Ingen Sanity-implementation i detta steg

## 9. Forberedelse for framtida Sanity (utan implementation nu)
Bygg komponenter datadrivet redan nu, sa att hardkodad data enkelt kan bytas mot CMS-data senare.

Foreslagna framtida content-typer:
- `siteSettings` (global info, nav, footer, kontakt)
- `service` (tjanster)
- `case` (referensuppdrag)
- `person` (om oss)
- `page` (meta/seo/innehall)

## 10. Leverans i nasta steg
Nasta steg efter godkand spec:
1. Initiera Next.js-projekt
2. Satta global design foundation (farger, typografi, spacing)
3. Bygga startsida med sektionerna i overenskommen ordning
4. Skapa undersidor (tjanster, referensuppdrag, om oss, kontakt)
5. Finjustera copy och CTA med dina faktiska texter

## 11. Skapad mapp for logotyp och ikon
Placera filer har:
- `public/brand/`

Foreslagen namnstandard:
- `public/brand/logo.svg`
- `public/brand/logo-dark.svg` (om behov finns)
- `public/brand/icon.svg`
- `public/brand/favicon.ico` (senare)
