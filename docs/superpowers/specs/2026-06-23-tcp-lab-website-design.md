# TCP Lab Website Design

## Goal

Build a complete English academic laboratory website for Tsinghua Clinical Psychology Lab (TCP Lab), deployable as a static Next.js site on GitHub Pages.

## Audience

The site serves prospective graduate students, collaborators, public readers interested in psychology outreach, and visitors looking for the lab's publications, team, and recruitment information.

## Visual Direction

Use the approved "Institutional Research Lab" direction:

- Formal university laboratory tone.
- Left-aligned homepage hero with a supporting visual panel.
- White background with restrained blue accents.
- Primary color `#4A6FA5`, secondary `#6B8DB5`, accent `#E8F1FA`, text `#1F2937`.
- Minimal shadows, 8px-style rounded corners, clear academic typography, and smooth hover states.
- No decorative marketing-style gradients or oversized landing-page composition.

## Architecture

Use Next.js 15, TypeScript, Tailwind CSS, and the App Router. Configure `output: "export"` and `images.unoptimized: true` so the generated `out/` directory is compatible with GitHub Pages.

Use reusable components for layout, navigation, section headers, cards, placeholders, publication controls, and footer. Keep page content in JSON data files under `src/data` where practical, so future updates do not require rewriting page structure.

## Pages

### Home

The home page includes:

- Hero with title, subtitle, description, and buttons linking to Team and Publications.
- About Us section.
- Research Areas section with six cards:
  - Clinical Psychology
  - Mental Health
  - Psychological Assessment
  - Psychotherapy
  - Digital Mental Health
  - Cognitive and Emotional Processes
- News section with sample items from JSON data.
- Contact section with Department of Psychology, Tsinghua University, placeholder email, and placeholder address.

### Team

The team page includes:

- Principal Investigator profile card with labeled photo placeholder, name Professor XXX, title, biography, research interests, email, and CV link placeholder.
- Graduate Candidates section with four sample graduate student cards.
- Alumni section with four sample alumni cards including graduation year, current affiliation, and brief description.

### Publications

The publications page includes:

- Ten sample publications grouped by year.
- Search box matching title, author, or journal.
- Year filter.
- Sort control for newest or oldest year first.
- JSON-driven publication data.

### Outreach

The outreach page includes:

- WeChat Official Account section with QR-code placeholder and account-name placeholder.
- Six popular science article preview cards with cover placeholders, title, summary, and date.
- Public Engagement section describing science communication, public lectures, workshops, and education events.

### Open Positions

The recruitment page includes:

- Hero titled "Join TCP Lab".
- Sections for PhD Positions, Master's Positions, Research Assistant Positions, and Visiting Students.
- How to Apply section with placeholder email.
- Required materials:
  - CV
  - Transcript
  - Research statement
- Application process description.
- Prominent Apply Now button using a `mailto:` placeholder.

## Assets

Use a reusable placeholder image component for:

- PI photo.
- Graduate student photos.
- Alumni photos.
- WeChat QR code.
- Outreach article covers.
- Homepage lab/campus visual.

The placeholders must be clearly labeled and easy to replace with real files later.

## SEO

Add page-level metadata for title and description. Include sensible global metadata for TCP Lab, Department of Psychology, and Tsinghua University. Use semantic headings and accessible link labels.

## Deployment

Add:

- `next.config.ts` for static export.
- `.github/workflows/deploy.yml` for GitHub Pages deployment.
- `README.md` covering local development, build instructions, GitHub Pages deployment, and content update workflow.

## Verification

Run dependency installation if needed, then verify:

- TypeScript and lint checks pass.
- `npm run build` produces a static export.
- The generated site has no server-only features.
- A local preview or static server can display the exported output.
