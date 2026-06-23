# Tsinghua Clinical Psychology Lab Website

This is a static academic laboratory website for Tsinghua Clinical Psychology Lab (TCP Lab), affiliated with the Department of Psychology at Tsinghua University.

The project uses Next.js 15, TypeScript, and Tailwind CSS. It is configured for static export and GitHub Pages deployment.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build Instructions

Run the production build:

```bash
npm run build
```

The site is exported to the `out/` directory. GitHub Pages can serve this directory as a static website.

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To deploy:

1. Push the project to a GitHub repository.
2. Go to the repository settings.
3. Open **Pages**.
4. Set the source to **GitHub Actions**.
5. Push to the `main` branch or run the workflow manually.

The workflow installs dependencies, builds the static site, uploads `out/`, and deploys it to GitHub Pages.

## Content Update Guide

Most website content is stored in JSON files under `src/data`.

- Research areas: `src/data/research-areas.json`
- News: `src/data/news.json`
- Team and alumni: `src/data/team.json`
- Publications: `src/data/publications.json`
- Outreach and popular science articles: `src/data/outreach.json`
- Open positions: `src/data/positions.json`

After editing content, run:

```bash
npm run build
```

If the build passes, commit and push the changes.

## Replacing Placeholder Images

The website currently uses labeled placeholder image components for:

- PI photo
- Graduate student photos
- Alumni photos
- WeChat QR code
- Outreach article covers
- Homepage lab or campus visual

To use real images, add image files under `public/` and replace the relevant `PlaceholderImage` components with Next.js `Image` components or standard image references.

## Project Structure

```text
src/
  app/
    page.tsx
    team/page.tsx
    publications/page.tsx
    outreach/page.tsx
    open-positions/page.tsx
    layout.tsx
    globals.css
  components/
  data/
```

## Notes

GitHub Pages hosts static files only. This site does not use API routes, server-side rendering, or a database, so it is compatible with static hosting.
