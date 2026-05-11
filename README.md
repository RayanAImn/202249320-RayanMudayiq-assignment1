# Assignment 4 - Personal Web Application (Portfolio)

This repository contains my final Assignment 4 personal web application.

## Project Overview

The project is a responsive single-page portfolio website built with vanilla HTML, CSS, and JavaScript. It combines required course concepts (DOM logic, API integration, state management, validation, responsive design) in one polished app.

Live website: `https://rayanmudhayiq.vercel.app`

## Key Features

- Responsive single-page portfolio layout
- Typing hero animation and scroll-driven effects
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

I used `js/conver-images.js` to convert portfolio images from PNG to WebP.

- Converted files: `5`
- Total size before: `2.33 MB`
- Total size after: `216.1 KB`
- Overall reduction: `91%`

The website serves `.webp` assets directly in `index.html`.

## Assignment 4 Requirement Mapping

- Complete application: implemented and functional
- Professional quality: clean structure, error handling, responsive UI
- Innovation: quick-actions command palette
- AI integration: documented in `docs/ai-usage-report.md`
- Documentation: README + technical documentation included
- Deployment: live and publicly accessible on Vercel

## Run Locally

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <repo-folder>
```

2. Open directly:

- Open `index.html` in a modern browser.

3. Or run local server (recommended):

```bash
npm install
npm run dev
```

Then open `http://localhost:8080`.

4. Optional image optimization rerun:

```bash
npm run convert-images
```

## Project Structure

```text
id-name-assignment4/
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
│   ├── slides.pdf            (required manual deliverable)
│   └── demo-video.mp4        (required manual deliverable)
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Documentation

- AI report: `docs/ai-usage-report.md`
- Technical documentation: `docs/technical-documentation.md`

## Final Submission Notes

Before Blackboard submission, ensure:

- Repository is public and named in Assignment 4 format (`id-name-assignment4`)
- `presentation/slides.pdf` exists
- `presentation/demo-video.mp4` exists and is within size limits (GitHub limit is 100 MB per file)
- Blackboard text includes:
  - repository link
  - live website link (`https://rayanmudhayiq.vercel.app`)