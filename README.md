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
