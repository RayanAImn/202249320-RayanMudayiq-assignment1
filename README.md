# Rayan Mudhayiq — Personal Portfolio Website

A personal portfolio website built with **HTML**, **CSS**, and **JavaScript**.

## Description

This is a responsive, single-page portfolio website styled as an IDE/code-editor interface. It showcases my background, projects, and contact information through an interactive, scroll-driven experience with typing animations, parallax effects, and a syntax-highlighted code background.

## Features

- **Typing animation** on the hero section (name + description)
- **Scroll-driven effects**: parallax fade-out, section fade-in, background code reveal
- **Syntax-highlighted** Dart code background panel
- **Animated gradient orbs** background
- **IDE-styled** About, Projects, and Contact sections with line numbers and indent guides
- **Project showcase** with floating screenshots for web and mobile projects
- **Dynamic Project Filtering** (Assignment 2): Filter projects dynamically by Web, Mobile, or All with smooth enter/exit animations.
- **API Integration** (Assignment 2): Fetches and displays a random "Advice of the Day" using a public API (`fetch/async`).
- **Fully responsive** design with hamburger menu and mobile-optimized project cards
- **Advanced Contact Form** (Assignment 2): Features strict real-time validation with inline warning messages.
- **Local Storage Autosave** (Assignment 2): Automatically saves your contact form drafts to `localStorage` so messages are never lost on reload.
- **Toast Notifications** (Assignment 2): Provides animated UI popups for successful form submissions or validation errors.
- **Skills grid** with hover glow effects
- **Live GitHub API Integration** (Assignment 3): Fetches and displays recent public repositories from GitHub with graceful error handling.
- **Advanced Project Logic** (Assignment 3): Combines filtering (platform), sorting (newest/oldest), and level-based views (beginner/advanced).
- **State Management** (Assignment 3): Light/dark mode toggle persisted in `localStorage`.
- **Visitor Session Timer** (Assignment 3): Tracks and displays how long a user has stayed on the site.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/202249320-RayanMudayiq-assignment1.git
   cd 202249320-RayanMudayiq-assignment1
   ```

2. **Open directly** — just open `index.html` in any modern web browser. No build tools or dependencies required.

3. **Or use a local server** (optional, for a more accurate experience):
   ```bash
   npx -y http-server . -p 8080
   ```
   Then visit [http://localhost:8080](http://localhost:8080).

## User Guide

1. Use the top navigation to jump directly to **Home**, **About**, **Projects**, and **Contact**.
2. In **Projects**, use the `All`, `Web`, and `Mobile` tabs to filter project cards by platform.
3. In **Contact**, fill all fields with valid input:
   - Name must be at least 2 characters.
   - Email must follow a valid email format.
   - Message must be at least 10 characters.
4. Contact form drafts are auto-saved in your browser (`localStorage`) while typing, so refresh will not lose progress.
5. On submit, toast notifications show whether the message was sent successfully or needs correction.
6. Use the **Theme** button in the navbar to switch between dark/light modes (your choice is saved).
7. In **Projects**, combine category tabs with **Sort** and **Level** selectors for multi-step filtering logic.
8. The **Live GitHub Repositories** panel loads latest repositories and shows a fallback message on API failure.

## Assignment 3 Highlights

- **API integration**: Added GitHub repositories API data display for portfolio-relevant dynamic content.
- **Complex logic**: Added combined filter + sort + level logic for project cards.
- **State management**: Added persistent theme preference state in `localStorage`.
- **Additional advanced behavior**: Added real-time visitor timer to demonstrate runtime state updates.

## Project Structure

```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── kfupm_world1.png
│       ├── kfupm_world2.png
│       ├── kfupm_world3.png
│       ├── kvwu.png
│       └── venture_carft.png
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## AI Usage Summary

AI tools (GitHub Copilot, Claude) were used to assist with code generation, CSS styling, and responsive design implementation. Full details are documented in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Technologies

- HTML5
- CSS3 (custom properties, keyframe animations, grid, flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (JetBrains Mono)
