# TCP Lab Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete English TCP Lab academic website that exports statically and can deploy to GitHub Pages.

**Architecture:** Scaffold a Next.js 15 App Router project with TypeScript and Tailwind CSS. Keep repeated UI in `src/components`, structured content in `src/data`, and page-level routes in `src/app`. Use client code only for the publications search/filter/sort interface.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, static export, GitHub Actions for Pages.

---

## File Structure

- `package.json`: scripts and dependencies.
- `next.config.ts`: static export and GitHub Pages-compatible image config.
- `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`: tooling config.
- `src/app/layout.tsx`: global shell metadata, font, nav, footer.
- `src/app/page.tsx`: home page.
- `src/app/team/page.tsx`: team page.
- `src/app/publications/page.tsx`: publications page.
- `src/app/outreach/page.tsx`: outreach page.
- `src/app/open-positions/page.tsx`: recruitment page.
- `src/app/globals.css`: Tailwind import, CSS variables, base styles.
- `src/components/*.tsx`: reusable layout, cards, placeholders, controls.
- `src/data/*.json`: research areas, news, team, publications, outreach articles, positions.
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow.
- `README.md`: development, build, deploy, and content update guide.

## Tasks

### Task 1: Scaffold Project Tooling

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `.gitignore`

- [ ] Create Next.js 15, TypeScript, Tailwind-compatible project configuration.
- [ ] Add scripts: `dev`, `build`, `start`, `lint`.
- [ ] Configure static export with unoptimized images.
- [ ] Run `npm install` to generate `package-lock.json`.

### Task 2: Add Global App Shell

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/globals.css`
- Create: `src/components/SiteHeader.tsx`
- Create: `src/components/SiteFooter.tsx`
- Create: `src/components/Container.tsx`
- Create: `src/components/ButtonLink.tsx`

- [ ] Implement global metadata and accessible HTML shell.
- [ ] Add responsive top navigation and mobile menu.
- [ ] Add footer with lab affiliation and page links.
- [ ] Add Tailwind theme tokens using the approved palette.

### Task 3: Add Shared Content Components

**Files:**
- Create: `src/components/SectionHeader.tsx`
- Create: `src/components/PlaceholderImage.tsx`
- Create: `src/components/InfoCard.tsx`
- Create: `src/components/ProfileCard.tsx`
- Create: `src/components/PublicationExplorer.tsx`

- [ ] Implement section headers, card primitives, and labeled placeholder visuals.
- [ ] Implement publication search, year filter, and sort as an isolated client component.

### Task 4: Add JSON Content

**Files:**
- Create: `src/data/research-areas.json`
- Create: `src/data/news.json`
- Create: `src/data/team.json`
- Create: `src/data/publications.json`
- Create: `src/data/outreach.json`
- Create: `src/data/positions.json`

- [ ] Add the required sample research areas, news, team members, alumni, publications, outreach articles, and position content.
- [ ] Keep data fields consistent with component props.

### Task 5: Build Pages

**Files:**
- Create: `src/app/page.tsx`
- Create: `src/app/team/page.tsx`
- Create: `src/app/publications/page.tsx`
- Create: `src/app/outreach/page.tsx`
- Create: `src/app/open-positions/page.tsx`

- [ ] Build Home with hero, about, research areas, news, and contact.
- [ ] Build Team with PI, graduate candidates, and alumni sections.
- [ ] Build Publications with grouped publications and controls.
- [ ] Build Outreach with WeChat, article cards, and public engagement.
- [ ] Build Open Positions with position categories and application workflow.

### Task 6: Add Deployment and Documentation

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

- [ ] Add GitHub Actions workflow for static Next.js deployment to Pages.
- [ ] Document local development, build, deployment, and content updates.

### Task 7: Verify

**Commands:**
- `npm run lint`
- `npm run build`

- [ ] Fix any lint, type, or build issues.
- [ ] Confirm static export succeeds.
- [ ] Start local dev server or preview server and provide URL.

## Self-Review

- Spec coverage: all five pages, structured JSON data, reusable components, placeholder assets, SEO metadata, static export, GitHub Actions, and README are covered.
- Placeholder scan: the only placeholders are required site content placeholders such as email, address, CV link, photos, QR code, and article covers.
- Type consistency: JSON fields will be aligned with component props during implementation.
