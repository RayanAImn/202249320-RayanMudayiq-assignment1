# AI Usage Report

## Background

The portfolio website was already designed, developed, and fully functional before any AI tools were involved. The original version was built using **Next.js**, **React**, and **Tailwind CSS**. AI was then used to **refactor and convert** the existing codebase into native **HTML**, **CSS**, and **JavaScript** to meet the assignment requirements — the design, content, and structure are entirely original work.

## Tools Used & Use Cases

| Tool | Use Case |
|------|----------|
| **Claude (Anthropic)** | Code generation, converting React/Next.js components to vanilla HTML/CSS/JS, debugging layout issues, implementing responsive design |
| **GitHub Copilot** | Code completion and inline suggestions while writing CSS and JavaScript |

### Specific Uses

- **HTML Structure**: AI assisted in converting the original Next.js React components into semantic HTML, ensuring all interactive elements and content were preserved.
- **CSS Styling**: AI helped translate Tailwind CSS utility classes into vanilla CSS, including animations, responsive breakpoints, and the IDE-themed design system.
- **JavaScript Logic**: AI ported React hooks (`useState`, `useEffect`) and component lifecycle logic into vanilla JavaScript event listeners and DOM manipulation.
- **Responsive Design**: AI generated media queries for tablet (1024px), small tablet (768px), and mobile (480px) breakpoints, including the hamburger menu implementation.
- **Code Review**: AI was used to audit the project against assignment requirements and identify missing features.

## Benefits & Challenges

### Benefits
- **Speed**: AI significantly accelerated the conversion from Next.js to vanilla HTML/CSS/JS by handling repetitive translation tasks.
- **Consistency**: AI ensured consistent styling patterns across all sections (About, Work, Contact) by following the established IDE-themed design language.
- **Debugging**: AI quickly identified issues with scroll behavior and responsive layout that would have taken longer to find manually.

### Challenges
- **Over-generation**: AI sometimes produced more code than necessary, requiring manual trimming.
- **Context Limits**: When working on large CSS files, AI occasionally lost track of existing styles, leading to duplicate rules that needed cleanup.
- **Design Judgment**: AI defaults to generic designs unless given very specific visual direction — the IDE-themed aesthetic required explicit guidance.

## Learning Outcomes

- Gained understanding of how React component patterns (state, effects, refs) map to vanilla JavaScript equivalents (variables, event listeners, DOM queries).
- Learned the relationship between Tailwind utility classes and the underlying CSS properties they represent.
- Improved understanding of CSS architecture: organizing styles by component, using BEM-like naming, and structuring responsive breakpoints.
- Learned to use scroll-driven animations with `requestAnimationFrame`-style patterns using `setInterval` and scroll event listeners.

## Responsible Use & Modifications

- **All AI-generated code was reviewed** line by line before inclusion in the project.
- **Modifications made**: Adjusted color values, spacing, and animation timing to match the original design. Restructured CSS organization for clarity. Added meaningful comments to explain code purpose.
- **Understanding verified**: Each feature (typing animation, scroll parallax, syntax highlighting, form handling) was understood conceptually before accepting AI suggestions.
- **Originality**: The overall design concept, project content, and section structure are original work. AI was used as an implementation accelerator, not as the creative source.
