# Technical Documentation

## 1. Project Summary

This project is a single-page personal portfolio web application built with vanilla HTML, CSS, and JavaScript. It is fully client-side and requires no build system.

Assignment 4 objective: deliver a polished, responsive, presentation-ready application that demonstrates all course concepts and responsible AI usage.

## 2. Architecture

### 2.1 Runtime Model

- Static frontend, browser-only runtime
- Event-driven behavior via DOM listeners
- No third-party JS framework
- Local state stored in memory and `localStorage`

### 2.2 File Responsibilities

- `index.html`: semantic page structure and UI sections
- `css/styles.css`: theme variables, layout, responsive styles, animations
- `js/script.js`: interactions, state logic, API calls, validation, toasts
- `docs/`: AI report and technical documentation

## 3. Core Features

### 3.1 Visual/UX Features

- Typing hero intro (name + description)
- Scroll-driven reveal/parallax effects
- IDE-themed sections and animated visual background
- Responsive navbar with hamburger menu

### 3.2 Project Logic

- Category filtering (`all`, `web`, `mobile`)
- Level filtering (`all`, `beginner`, `advanced`)
- Sorting by year (`newest`, `oldest`)
- Combined multi-step logic applied to the same card dataset

### 3.3 API Integrations

- Advice API: `https://api.adviceslip.com/advice`
- GitHub API: `https://api.github.com/users/RayanAImn/repos?sort=updated&per_page=4`
- Graceful fallback messages on request failure
- Shared timeout-based fetch helper for resilience

### 3.4 Form + State

- Contact form validation (name/email/message)
- Inline error messages and styling
- Draft autosave to `localStorage`
- Toast notifications for success/error outcomes
- Theme persistence (`portfolioTheme`) in `localStorage`
- Session timer (`MM:SS`) updated every second

### 3.5 Assignment 4 Innovation

Quick Actions Palette:

- Trigger: `Ctrl + K` (Windows/Linux) or `Cmd + K` (macOS)
- Also accessible from navbar button
- Supports filtered action search
- Actions include:
  - Navigate to Home/About/Projects/Contact
  - Toggle theme
- `Enter` executes first visible action, `Esc` closes palette

## 4. Error Handling and Resilience

- API requests use try/catch and user-friendly fallback text
- Network calls use timeout control to avoid hanging fetches
- Form submit blocks invalid payloads and provides explicit field errors

## 5. Accessibility Notes

Implemented:

- Semantic section structure
- Input labels and `aria-label` for key controls
- Keyboard navigation support
- Keyboard shortcut support for quick actions

Recommended future improvements:

- Add `aria-live` announcements for toast and API status updates
- Expand keyboard focus management for command palette action navigation

## 6. Performance Notes

Implemented:

- Cached DOM references
- Scroll handler throttled via `requestAnimationFrame`
- Background code typing loop stops automatically when complete
- Transform/opacity-driven animations for smoother rendering

Potential future improvements:

- Lazy-load media if image count grows
- Further reduce inline style rules by consolidating style ownership in CSS files

## 7. Testing Checklist

Manual checks completed/recommended:

- Hero typing animation and glow sequence
- Scroll reveals and active navbar states
- Project filter/sort/level combinations
- Advice API success/failure behavior
- GitHub API success/failure behavior
- Contact validation and toast messaging
- Draft restoration after page refresh
- Theme persistence after reload
- Timer updates correctly
- Quick actions palette open/filter/run/close behavior
- Mobile menu open/close behavior
- Responsive layout on desktop/tablet/mobile widths

## 8. Known Limitations

- Contact form is UI-only (no backend submission endpoint)
- External API availability is not guaranteed
- Heavy visual effects may impact low-end mobile battery/performance

## 9. Presentation Deep-Dive Notes (for 5–7 min demo)

Resolved and implemented:

- Combined project filter/sort/level logic
- API fallback UX for unstable networks
- Persistent UI state with `localStorage`

Unresolved/not implemented:

- Backend-based contact message delivery
- Full automated cross-browser test suite

Planned future work:

- Backend API for contact submissions
- CI checks (lint + formatting + static analysis)
- Accessibility audit and improvements