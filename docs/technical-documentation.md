# Technical Documentation

## 1. Project Overview

This project is a single-page portfolio website built with vanilla HTML, CSS, and JavaScript. It is designed as a static front-end application with no backend service and no build pipeline.

## 2. Architecture

### 2.1 Runtime Model
- Client-side only (browser execution)
- Event-driven interactions using DOM event listeners
- No third-party JavaScript libraries
- No framework state management; state is held in local variables and DOM classes

### 2.2 High-Level Component Map
- `index.html`: semantic structure for Navbar, Hero, About, Projects, and Contact sections
- `css/styles.css`: theme tokens, layout, animations, breakpoints, and interaction states
- `js/script.js`: typing effect, scroll controller, navbar activation, filtering, API fetch, form validation, autosave, and toast notifications

## 3. Execution Flow

1. `DOMContentLoaded` fires.
2. Script caches required DOM elements.
3. Hero typing animation starts for the name, then description.
4. Background code panel begins progressive reveal (interval-based).
5. Scroll listener activates and drives section transitions + navbar state.
6. Project filter tab listeners are attached.
7. Advice API fetch runs asynchronously and injects response text.
8. Contact form draft values are restored from `localStorage`.
9. Input listeners continuously autosave form field values.
10. Submit handler validates fields and shows success/error toast.
11. Assignment 3 state and data features initialize (theme, timer, sorting/level logic, GitHub API).

## 3.1 Assignment 3 Additions

- Theme state initialization from `localStorage` (`portfolioTheme`).
- Live visitor timer updated every second.
- Multi-step project logic (filter + level + sort) applied to a single project dataset.
- External GitHub repositories API fetch and dynamic rendering with user-friendly fallback.

## 4. Detailed Feature Implementation

### 4.1 Typing Animation
- Implemented with `setInterval`.
- Name and description are typed sequentially.
- A temporary cursor element (`.typing-cursor`) is appended/removed dynamically.

### 4.2 Scroll-Driven UI Controller
A single scroll handler manages:
- Hero horizontal parallax + fade out
- Background code panel slide/fade
- Section reveal classes: `about--visible`, `work--visible`, `contact--visible`
- Active navbar item based on current scroll position

### 4.3 Syntax Highlighting
- Regex-based highlighter for Dart snippet.
- Workflow:
  1. Escape HTML entities
  2. Temporarily replace strings/comments with placeholders
  3. Highlight keywords/types/classes/functions/variables/numbers
  4. Restore placeholders with style spans

### 4.4 Project Filtering
- Tabs: `all`, `web`, `mobile`
- Each card uses `data-category`
- Filter logic toggles `show`/`hide` classes and delayed positioning to preserve transition smoothness

### 4.4.1 Project Sorting and Level Rules (Assignment 3)
- Sorting selector supports `newest` and `oldest` using `data-year`.
- Level selector supports `all`, `beginner`, and `advanced` using `data-level`.
- Final visible set is computed by combining:
  1. Platform filter
  2. Level filter
  3. Year sort
- A contextual message updates to explain current level mode.

### 4.5 API Integration (Advice Slip)
- Endpoint: `https://api.adviceslip.com/advice`
- Uses `fetch` with `async/await`
- On success: renders returned advice
- On failure: renders fallback quote and logs error to console

### 4.5.1 API Integration (GitHub Repositories - Assignment 3)
- Endpoint: `https://api.github.com/users/RayanAImn/repos?sort=updated&per_page=4`
- Purpose: display portfolio-relevant live repository data.
- Rendering:
  - repository name (linked to GitHub)
  - repository description
- Error handling:
  - shows friendly fallback message in UI
  - logs technical error to browser console

### 4.6 Contact Form Validation
Validation is enforced on submit:

| Field | Rule | Failure Message |
|------|------|-----------------|
| Name | Minimum 2 characters | `Name must be at least 2 characters.` |
| Email | Regex `^[^\s@]+@[^\s@]+\.[^\s@]+$` | `Please enter a valid email address.` |
| Message | Minimum 10 characters | `Message must be at least 10 characters.` |

- Invalid fields receive error text + red border.
- Valid submission triggers success toast and form reset.

### 4.7 Draft Autosave
`localStorage` keys used:
- `contactDraft_name`
- `contactDraft_email`
- `contactDraft_msg`

Behavior:
- Values are restored on page load.
- Values are updated on every `input` event.
- Values are cleared after successful submit.

### 4.8 Toast Notification System
- Toast container: `#toast-container`
- Dynamic element creation per message
- Types: `success`, `error`
- Auto-dismiss with exit animation

### 4.9 Theme State Management (Assignment 3)
- Theme toggle button switches between dark and light themes.
- Selected theme is persisted using `localStorage` key:
  - `portfolioTheme`
- On load, the saved theme is applied before interaction.

### 4.10 Visitor Timer (Assignment 3)
- Timer starts on page load.
- Updates once per second.
- Displays elapsed session time in `MM:SS` format.

## 5. Responsive Design Strategy

Breakpoints:
- `<= 1024px`: adjusts hero and layout spacing for tablets
- `<= 768px`: enables hamburger menu, simplifies IDE chrome, stacks project layout
- `<= 480px`: tighter spacing/font sizing for small phones

Additional responsive behavior:
- Desktop floating project images become stacked inline images on smaller screens.
- Background code panel is disabled on smaller viewports for readability.

## 6. Accessibility and UX Notes

Implemented:
- Semantic sectioning (`section`, headings, form labels)
- `aria-label` on hamburger button
- Keyboard-accessible links and form inputs
- Inline validation feedback and visible status toasts

Recommended future improvements:
- Add `aria-live` for toast announcements
- Improve color-contrast checks for secondary text
- Add skip link for keyboard navigation

## 7. Browser Compatibility

Test target: modern evergreen browsers (Chrome, Edge, Firefox, Safari).
Features relied on:
- CSS animations, transforms, filter blur
- `fetch`, `async/await`
- `localStorage`
- `requestAnimationFrame`

## 8. Performance Considerations

Current optimizations:
- DOM lookups are cached at startup
- Scroll updates are throttled through `requestAnimationFrame`
- UI effects are mostly transform/opacity based (GPU-friendly)
- Project sorting/filtering reuse existing DOM nodes instead of rebuilding full card markup

Potential improvements:
- Replace interval loops with frame-synced loops where appropriate
- Add lazy loading if project media set grows
- Reduce repeated style recalculations for large future content

## 9. Testing Checklist

Manual checks performed/recommended:
- Hero typing sequence completes correctly
- Scroll reveals trigger at expected viewport thresholds
- Navbar active state updates across sections
- Project tabs correctly show/hide matching categories
- API quote renders success and fallback paths
- Form validation blocks invalid input and displays errors
- Draft autosave survives page refresh
- Success and error toasts animate in/out
- Mobile menu opens/closes and collapses after link click
- Theme mode persists after page reload
- Sort order updates project card sequence correctly
- Level selector narrows result set and updates helper message
- GitHub API panel shows repository data or fallback status on failure

## 10. Known Limitations

- Contact form does not submit to a backend (UI-only submission).
- API quote depends on external endpoint availability.
- Regex highlighter is tailored to this snippet and not a full language parser.
- Heavy visual effects may cost extra battery/GPU on low-end mobile devices.
