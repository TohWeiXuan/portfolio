# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site (Toh Wei Xuan) built from a Vue 2 + TypeScript static portfolio template (Vue CLI 4, vue-router 3, Less). It is deployed to GitHub Pages at https://tohweixuan.github.io/portfolio/.

## Commands

- `npm install`: install dependencies
- `npm run serve`: dev server with hot reload
- `npm run build`: production build into `dist/`
- `npm run lint`: ESLint (vue/essential + eslint:recommended + @vue/typescript/recommended). Note that `vue-cli-service lint` auto-fixes files by default; use `npx vue-cli-service lint --no-fix` to only report.

There is no test suite.

Webpack 4 (Vue CLI 4) fails on Node 17+ with `ERR_OSSL_EVP_UNSUPPORTED`. `.npmrc` sets `node-options=--openssl-legacy-provider` so npm scripts handle this automatically. If running `vue-cli-service` outside npm, set `$env:NODE_OPTIONS = '--openssl-legacy-provider'` (PowerShell) first.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` on Node 20 and publishes `dist/` to GitHub Pages. Pushing to `main` deploys the live site.

`vue.config.js` sets `publicPath` to `/portfolio/` in production (the repo name). Changing the repo name or moving to a user site (`<user>.github.io`) requires updating this and `VUE_APP_PRODUCTION_URL` in `.env`.

## Architecture

- **Content is mostly static markup in the views.** `src/views/` (About, Resume, Projects, Contact, 404) hold their text directly in templates. `Header.vue`/`Footer.vue` wrap every page via `App.vue`.
- **The projects page is data-driven.** `src/data/ProjectsData.ts` exports an array of `ProjectData` (`src/data/ProjectData.ts`). Each entry holds an id, a name, a thumbnail URL, an HTML description string, an accent color, and `isHigh`/`isWide` flags that make the thumbnail span 2 rows or 2 columns in the CSS grid. `ProjectsList.vue` renders the grid. Clicking a tile opens `ProjectDetailsOverlay.vue`, which injects the description with `v-html`.- **Styling for project descriptions lives globally.** The HTML in `ProjectsData.ts` is rendered through `v-html`, so scoped component styles don't apply to it. Any class used there (`.paragraph`, `.notice`, `.center`, `iframe.youtube`, etc.) must be defined under `.dialog-content` in `src/css/projects.less`. Theme colors are Less variables in `src/css/variables.less`. Both files are imported unscoped in `App.vue`.
- **Static assets go in `public/`** (`public/img/projects/` for thumbnails, `public/d/` for downloadables like the resume PDF). Reference them with **relative** paths (`img/...`, `d/...`, no leading slash) so they resolve under the `/portfolio/` base path. This works because the router uses the default hash mode.
- **Image preloading:** `App.vue` calls `Helpers.preloadImages([...])` with heavy project images so they're cached before the user opens the Projects tab. Keep this list in sync when adding or removing project thumbnails.
- **Site metadata** (title, description, OG tags, production URL) comes from `VUE_APP_*` variables in `.env`, which are interpolated into `public/index.html`. Restart `npm run serve` after editing `.env`.
- **Routing:** `src/router/index.ts` lazy-loads every view. Unknown paths redirect to `/404`. A new page needs a route here plus a link in `Header.vue`.
