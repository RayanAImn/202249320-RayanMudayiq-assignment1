# Assignment 4 - Personal Web Application (Portfolio)

This repository contains my final polished personal portfolio web application for Assignment 4.

## Project Overview

The project is a responsive, single-page portfolio website built with vanilla HTML, CSS, and JavaScript. It combines all previous assignment features (API usage, advanced DOM logic, state management) and adds an Assignment 4 innovation feature: a quick-actions command palette (`Ctrl/Cmd + K`) for fast navigation and theme control.

## Key Features

- Responsive single-page portfolio layout
- Typing hero animation and scroll-driven reveal effects
- Project filtering by platform + level, plus year sorting
- Live API integration:
  - Advice API (fun fact section)
  - GitHub Repositories API (latest repos)
- Contact form with:
  - real-time draft autosave (`localStorage`)
  - field validation and inline errors
  - toast notifications
- Theme state management (dark/light persisted in `localStorage`)
- Visitor session timer
- Assignment 4 innovation: quick-actions palette (`Ctrl/Cmd + K`)

## Image Optimization (Grading Evidence)

To optimize website size and loading performance, I used `js/conver-images.js` to convert portfolio images from PNG to WebP.

- Converted files: `5`
- Total size before: `2.33 MB`
- Total size after: `216.1 KB`
- Overall reduction: `91%`

The website now serves `.webp` files directly in `index.html`.

## Assignment 4 Requirement Mapping

- Complete application: implemented and functional
- Professional quality: clean structure, error handling, responsive UI
- Innovation: quick-actions command palette
- AI integration: documented in `docs/ai-usage-report.md`
- Documentation: README + technical documentation included

## Run Locally

1. Clone the repository:

```bash
git clone <your-repo-url>
cd 202249320-RayanMudayiq-assignment1
```

2. Open `index.html` directly in a modern browser.

3. Optional local server:

```bash
npx -y http-server . -p 8080
```

Then open `http://localhost:8080`.

Optional: rerun image optimization

```bash
npm install
node js/conver-images.js
```

## Project Structure

```text
202249320-RayanMudayiq-assignment1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   └── conver-images.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── README.md
│   ├── slides.pdf            (manual deliverable)
│   └── demo-video.mp4        (manual deliverable)
└── .gitignore
```

## AI Tools Summary

AI tools were used for targeted engineering assistance (debugging, quality review, documentation refinement, and implementation support). Full details, modifications, and responsible-use notes are documented in:

- `docs/ai-usage-report.md`

## Technical Documentation

Detailed architecture, feature flow, implementation details, and testing checklist are in:

- `docs/technical-documentation.md`

## Optional Deployment

Add your live link here once deployed (GitHub Pages / Netlify / Vercel):

- Live URL: `TBD`
