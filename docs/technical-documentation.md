# Technical Documentation

## 1. Project Summary

This project is a single-page personal portfolio web application built with vanilla HTML, CSS, and JavaScript.

Assignment 4 objective: deliver a complete, responsive, polished application that demonstrates technical implementation quality, clear documentation, AI-assisted workflow transparency, and presentation readiness.

## 2. Architecture

### 2.1 Runtime Model

- Frontend-focused application with browser-side interactions
- Event-driven behavior via DOM listeners
- Local state managed in memory and `localStorage`
- Deployed as static site with lightweight Node static server support (`server.js`) for host compatibility

### 2.2 File Responsibilities

- `index.html`: semantic page structure and content
- `css/styles.css`: theme tokens, layout, responsive rules, animations
- `js/script.js`: interactions, state logic, API calls, validation, toasts, innovation features
- `js/conver-images.js`: image conversion utility (PNG/JPG/HEIC -> WebP)
- `server.js`: static serving fallback for environments expecting Node `start`
- `docs/`: AI usage report and technical documentation

## 3. Core Features

### 3.1 Visual/UX Features

- Typing hero intro (name + description)
- Scroll-driven reveal/parallax effects
- IDE-style layout and animated background
- Responsive navigation with mobile hamburger menu

### 3.2 Project Logic

- Category filtering (`all`, `web`, `mobile`)
- Level filtering (`all`, `beginner`, `advanced`)
- Sorting by year (`newest`, `oldest`)
- Combined filter/sort logic applied to one project dataset

### 3.3 API Integrations

- Advice API: `https://api.adviceslip.com/advice`
- GitHub API: `https://api.github.com/users/RayanAImn/repos?sort=updated&per_page=4`
- Graceful fallback text on request failures
- Shared timeout-based helper for resilient fetch behavior

### 3.4 Form + State

- Contact validation for name/email/message
- Inline error messaging
- Draft autosave via `localStorage`
- Toast notifications for success/error
- Theme persistence (`portfolioTheme`) in `localStorage`
- Visitor timer (`MM:SS`) updated every second

### 3.5 Assignment 4 Innovation

Quick Actions Palette:

- Trigger: `Ctrl + K` / `Cmd + K`
- Searchable quick action menu
- Fast section navigation (Home/About/Projects/Contact)
- Theme toggle action
- Keyboard controls (`Enter` run action, `Esc` close)

## 4. Error Handling and Resilience

- API calls wrapped with try/catch and user-facing fallback states
- Request timeout control to prevent long-hanging external calls
- Validation blocks invalid form submission and gives explicit field-level errors

## 5. Accessibility Notes

Implemented:

- Semantic structure and form labels
- `aria-label` attributes for key controls
- Keyboard accessibility for navigation and quick actions

Recommended future improvements:

- Add `aria-live` announcements for toast/API status updates
- Improve command palette focus loop and arrow-key navigation

## 6. Performance Notes

Implemented:

- Cached DOM references
- Scroll handling throttled with `requestAnimationFrame`
- Background code typing interval stops once complete
- Transform/opacity-based animations for smoother rendering
- Image optimization to WebP:
  - before: `2.33 MB`
  - after: `216.1 KB`
  - reduction: `91%`

## 7. Deployment Status

- Live deployment URL: `https://rayanmudhayiq.vercel.app`
- HTTP status check: `200 OK` (verified on April 25, 2026)

## 8. Testing Checklist

Manual checks completed/recommended:

- Hero typing and visibility behavior
- Scroll reveals and active navbar state
- Filter + level + sort combinations in Projects section
- Advice API success/failure behavior
- GitHub API success/failure behavior
- Contact validation, autosave, and toast outputs
- Theme persistence after reload
- Session timer updates
- Quick actions open/filter/run/close behavior
- Mobile menu open/close behavior
- Responsive layout checks (desktop/tablet/mobile)

## 9. Known Limitations

- Contact form is UI-only (no backend submit endpoint)
- External APIs may fail or rate-limit depending on network/service state
- Heavy visual effects may affect low-end mobile battery/performance

## 10. Presentation Deep-Dive Notes (5–7 min)

Resolved and implemented:

- Combined filter/sort/level project logic
- API resilience with timeout + fallback UI
- Persistent UI state and quick keyboard actions

Unresolved/not implemented:

- Backend contact message delivery
- Full automated test suite and CI quality gates

Planned future work:

- Add backend form endpoint
- Add lint/test pipeline
- Expand accessibility testing and keyboard support