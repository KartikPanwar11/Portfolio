# Kartik Panwar — Developer Portfolio

A responsive personal portfolio built with React, TypeScript, Tailwind CSS, and Vite. It introduces my background as an MCA student specializing in AI/ML, showcases my development projects, and provides ways to connect for software roles and freelance work.

## Features

- Fixed, rounded glass navigation with current-section highlighting and a mobile menu.
- Hero section with a developer code panel, GitHub and LinkedIn links, and a resume link slot.
- About section covering my interests and MCA specialization, with graduation expected in 2027.
- Skills carousel with automatic rotation, manual navigation, and a pause control.
- Project cards with expandable case studies using native HTML dialogs.
- Journey timeline covering education, hands-on learning, and next steps.
- Contact section with email, copy-email feedback, and social links.
- System, light, and dark themes with a saved preference and early theme initialization.
- Responsive layouts, keyboard focus indicators, semantic landmarks, and reduced-motion support.

## Tech stack

| Area | Technology |
| --- | --- |
| Interface | React, TypeScript |
| Styling | Tailwind CSS, custom CSS |
| Build tool | Vite |
| Code quality | ESLint, TypeScript compiler |
| Browser APIs | IntersectionObserver, Clipboard API, localStorage |

This portfolio does not require a backend or database. Redux, Node.js, Jest, and other technologies shown in the project cards describe the featured projects; they are not dependencies of this portfolio.

## Run locally

Use a current Node.js LTS version compatible with the installed Vite release, and npm.

Run these commands inside `kp-portfolio/`:

```sh
npm install
npm install -D tailwindcss @tailwindcss/vite
npm run dev
```

The explicit Tailwind installation ensures the project runs independently of the parent folder, where the current Tailwind dependencies were originally installed. Once these dependencies are recorded in this project's package files, subsequent clean installations can use `npm ci`.

Open the local URL printed by Vite.

## Available commands

```sh
npm run dev      # Start the development server
npm run build    # Check TypeScript and create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

Build output is written to `dist/`. Upload that directory to a static hosting provider. Local preview is not a production deployment.

## Project structure

```text
src/
  components/
    About.tsx
    Contact.tsx
    Footer.tsx
    Hero.tsx
    Icons.tsx
    Journey.tsx
    Navbar.tsx
    Projects.tsx
    Skills.tsx
    ThemeToggle.tsx
  App.tsx
  index.css
  main.tsx
  profile.ts
public/
index.html
vite.config.ts
```

## Personalize the content

| Change | File |
| --- | --- |
| Email, GitHub, LinkedIn, resume URL | `src/profile.ts` |
| Headline and developer panel | `src/components/Hero.tsx` |
| Biography and interests | `src/components/About.tsx` |
| Skill groups and planned learning | `src/components/Skills.tsx` |
| Project descriptions, technologies, URLs, case studies | `src/components/Projects.tsx` |
| Education and learning milestones | `src/components/Journey.tsx` |
| Contact text | `src/components/Contact.tsx` |
| Colors, glass effects, typography, theme rules | `src/index.css` |
| Browser title and metadata | `index.html` |

### Add a resume

Place your PDF at `public/resume.pdf`, then change `resume` in `src/profile.ts` from `null` to `'/resume.pdf'`.

### Update projects

FoodieZone is the real featured project. Task Manager and Learning Dashboard are explicitly labeled sample entries; replace them with completed work before using them as evidence of experience.

Each entry uses the `Project` TypeScript type. Update its description, technologies, highlights, challenge, and URLs. Set `liveUrl` to the actual deployed URL to display the Live demo link.

The current card previews are illustrative interface concepts, not screenshots of the featured applications. Replace the preview markup in `Projects.tsx` when adding real screenshots.

## Implementation notes

- **TypeScript:** Project data and component props are typed. Theme choices use the `'system' | 'light' | 'dark'` union, while refs specify their HTML element types.
- **Themes:** The default follows `prefers-color-scheme`. Manual choices are stored under `kp-theme`; the initialization script applies saved preferences before React mounts.
- **Navigation:** IntersectionObserver updates the highlighted section. The mobile menu supports Escape to close.
- **Carousel:** Advances every four seconds. Automatic rotation pauses on hover or keyboard focus, stops when paused, and is disabled for reduced-motion preferences.
- **Case studies:** Native dialogs support keyboard dismissal and restore focus to the preview button after closing.
- **Contact:** Say hello opens the visitor's email application. Copy email uses the Clipboard API, with visible fallback feedback if copying fails. No messages are sent or stored by the website.
- **Styling:** Tailwind utilities provide layout and responsive styles; custom CSS defines theme tokens, glass surfaces, typography, and motion.

## Development approach

Developed through hands-on implementation and iterative refinement, with AI-assisted guidance for component logic and visual styling. The interface was refined using Tailwind CSS and custom CSS to improve spacing, responsive behavior, typography, and theme consistency.

## Validation

The TypeScript check, production build, and ESLint checks passed during development. Browser checks covered manual themes, preference persistence, mobile navigation, email copying, and layouts from 320px to 1440px.

The portfolio currently has no automated unit-test suite. Testing tools mentioned on the FoodieZone card belong to that separate project.

## Author

**Kartik Panwar** — MCA, AI/ML specialization; expected graduation 2027.

- [GitHub](https://github.com/KartikPanwar11)
- [LinkedIn](https://www.linkedin.com/in/KartikPanwar11/)
- Email: Kartikpanwar1101@gmail.com
# Portfolio
