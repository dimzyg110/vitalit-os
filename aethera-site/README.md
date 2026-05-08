# Aethera

Demo marketing site for **Aethera®** — a fictional studio for AI-powered web design.
Built with Vite + React + TypeScript + Tailwind, with motion via framer-motion and icons via lucide-react.

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS (custom HSL token theme)
- framer-motion (scroll-in animations)
- lucide-react (icons)
- HLS-ready video hero (with ambient cross-fade loop)

## Sections

| Component         | Anchor       | What it shows                                   |
|-------------------|--------------|-------------------------------------------------|
| `Navbar`          | —            | Sticky nav, scroll-state, mobile drawer         |
| `Hero`            | `#home`      | Fullscreen hero with CSS-driven aurora backdrop |
| `StartSection`    | `#services`  | "Where it begins" — 3-step process              |
| `FeaturesChess`   | —            | 4-up chessboard layout of disciplines           |
| `Work`            | `#work`      | Selected projects grid                          |
| `Journal`         | `#journal`   | Editorial-style entry list                      |
| `Blog`            | `#blog`      | Reading room — featured posts                   |
| `Footer`          | —            | CTA + studio links                              |

## Run it

```bash
cd aethera-site
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Notes

- The hero uses a CSS-driven "aurora" gradient (no external assets), so it never breaks on deploy. Swap it for video by reverting `src/components/Hero.tsx` and adding a `<video>` source you control.
- Imagery in `Work` / `Blog` uses Unsplash placeholders — replace with project assets before going live.
- The HSL CSS variables in `src/styles/globals.css` are wired into Tailwind tokens, so theming the whole site is a one-file change.
