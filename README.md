# The Coffee Atlas ☕

An in-depth reference app — and website — covering coffee's growing origins, botanical species,
processing methods, roasting, brewing, history, and terminology. Built with
[Expo Router](https://docs.expo.dev/router/introduction/), so the same codebase runs on iOS,
Android, and the web.

## What's inside

- **Growing Origins** — 13 countries/regions (Ethiopia, Yemen, Kenya, Rwanda & Burundi, Brazil,
  Colombia, Guatemala, Costa Rica, Panama, Indonesia, Vietnam, Papua New Guinea, Jamaica), each with
  altitude, harvest window, primary process, notable varieties, tasting notes, and history.
- **Species & Varieties** — Arabica, Robusta, Liberica, and Excelsa, with characteristics and
  notable cultivars (Bourbon, Typica, Geisha, SL28, and more).
- **Processing Methods** — washed, natural, honey, wet-hulled (Giling Basah), and anaerobic
  fermentation, with step-by-step breakdowns and flavor impact.
- **Roasting** — light/medium/dark roast profiles and the roast-chemistry timeline from drying
  through first and second crack.
- **Brewing Guide** — 7 methods (espresso, pour-over, French press, AeroPress, moka pot, cold brew,
  Turkish, siphon) with grind size, ratio, water temperature, steps, and tips.
- **History** — a timeline from the legend of Kaldi through third-wave specialty coffee.
- **Glossary** — a searchable list of coffee terminology.

All content lives in [`constants/coffee-data.ts`](./constants/coffee-data.ts) as plain, typed data —
edit it to add origins, brew methods, or glossary terms without touching any screen code.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

   Press `w` to open it as a website in your browser, or scan the QR code with Expo Go on
   iOS/Android.

3. Build the static website

   ```bash
   npx expo export -p web
   ```

   This outputs a deployable static site to `dist/`.

## Project structure

- `app/(tabs)/` — the four tab screens: Home, Origins, Brew Guide, Glossary
- `app/origins/[id].tsx`, `app/brewing/[id].tsx` — dynamic detail pages
- `app/species.tsx`, `app/processing.tsx`, `app/roasting.tsx`, `app/history.tsx` — deep-dive pages
- `constants/coffee-data.ts` — all coffee content and TypeScript types
- `components/nav-card.tsx` — reusable link card used on the home screen

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
