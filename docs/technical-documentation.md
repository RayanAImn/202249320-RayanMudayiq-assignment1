# Technical Documentation

## Architecture

This is a single-page portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools are required.

## File Overview

| File | Purpose |
|------|---------|
| `index.html` | Main page structure with all sections (Navbar, Hero, About, Work) |
| `css/styles.css` | All styles, animations, layout rules, and responsive breakpoints |
| `js/script.js` | Typing animations, scroll-driven effects, syntax highlighting, navbar logic |

## Key Features

### Typing Animation
Characters are revealed one-by-one using `setInterval`. The hero name types first, then the description begins after a callback fires.

### Scroll-Driven Effects
A single `scroll` event listener drives multiple effects:
- Hero section slides left and fades out
- Background code panel slides right and fades out
- About section fades in when scrolled past 60% of the viewport
- Work section fades in when scrolled into view
- Navbar active link updates based on scroll position

### Syntax Highlighting
A regex-based `syntaxHighlight()` function colorizes the background Dart code:
1. HTML entities are escaped
2. Strings and comments are extracted and replaced with placeholders
3. Keywords, types, classes, functions, variables, and numbers are wrapped in colored `<span>` tags
4. Strings and comments are restored with their own colors

### Gradient Orbs
Five absolutely-positioned `<div>` elements with radial gradients and CSS blur, each animated with a different floating keyframe animation.

## Browser Support

Tested on modern browsers (Chrome, Firefox, Edge, Safari). Requires CSS `animation`, `filter: blur()`, and `clip-path` support.
