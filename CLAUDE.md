# Still Studio — CLAUDE.md

## Project Overview
Still Studio is an enterprise AI training and multi-agent systems company. This is the marketing landing site targeting operational leaders in FMCG, manufacturing, and supply chain.

## Tech Stack
- **React 19** + **TypeScript** + **Vite 6**
- **Tailwind CSS v4** (`@theme` directive — no tailwind.config.js needed)
- **Motion (Framer Motion v12)** via `motion/react` import (NOT `framer-motion`)
- **React Router DOM v7** for routing
- **Lucide React** for icons (always use `strokeWidth={1.5}`)
- **react-intersection-observer** for scroll-triggered animations

## Node.js Requirement
**Vite 6 requires Node 18+.** The system Node is too old. Always run via nvm:
```bash
source ~/.nvm/nvm.sh && nvm use 22
```
Before any `npm run dev` or `npm run build`.

## Dev Server
```bash
source ~/.nvm/nvm.sh && nvm use 22 && npm run dev
# Runs on http://localhost:3000
```

## Design System

### Colors (defined in `src/index.css` via `@theme`)
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` / `text-primary` | `#0E3A27` | Forest green — brand, CTAs, headings |
| `bg-cream` | `#F6F4ED` | Section backgrounds, card fills |
| `bg-sage` | `#E6EECD` | Secondary CTA, category pills |
| `bg-live` | `#31EE33` | Live/active indicator dot |

### Fonts
- **Display / Headings**: `font-display` → Crimson Pro (serif), loaded from Google Fonts
- **Body**: `font-sans` → Plus Jakarta Sans, loaded from Google Fonts

### Custom Utilities (`src/index.css`)
- `.card-shadow` — Archio inset glass shadow (use on all cards)
- `.pill-shadow` — floating nav/pill shadow

### Border Radius Conventions
- Cards: `rounded-[16px]`
- Buttons (primary/secondary): `rounded-[10px]`
- Pills / tags / avatars: `rounded-[1000px]`
- Icons containers: `rounded-[8px]`

### Button Styles
```tsx
// Primary
<a className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity">

// Secondary
<a className="inline-flex items-center gap-2 bg-sage text-primary font-semibold text-sm px-6 py-3 rounded-[10px] hover:opacity-80 transition-opacity">
```

## File Structure
```
src/
  index.css          # Design tokens, @theme, custom utilities
  main.tsx           # Entry point
  App.tsx            # Routes + HomePage layout
  components/
    Navbar.tsx       # Fixed top header + floating pill nav + mobile overlay
    Hero.tsx         # Animated dashboard cards collage (no real photos)
    IndustrySolutions.tsx  # "What We Even Build" — 2x2 cards with images
    ProblemSection.tsx     # Dual-direction scrolling marquee + stats
    PlatformSection.tsx    # "Why Even Us?" — value cards + comparison table
    HowItWorks.tsx         # "Proven Process" — 3 numbered step cards
    BenefitSection.tsx     # Client testimonials — cream cards with glass shadow
    CaseStudies.tsx        # 3 horizontal cards (image left, content right)
    CourseCatalogue.tsx    # 6 course cards with color-coded category pills
    BlogSection.tsx        # 3 blog cards with grayscale→color hover images
    Footer.tsx             # Dark green bg, 4-column links, social icons
  pages/
    IndustryPage.tsx # Individual industry landing page (needs design update)
```

## Section Order (App.tsx)
Hero → IndustrySolutions → ProblemSection → CTA Strip → PlatformSection → HowItWorks → BenefitSection → CaseStudies → CourseCatalogue → BlogSection → Final CTA → Footer

## Animation Patterns
- All scroll sections use `useInView({ triggerOnce: true, threshold: 0.05 })` from `react-intersection-observer`
- Entrance: `initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}`
- Hero cards float: `animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, ease: 'easeInOut' }}`
- Marquee: CSS keyframes `marquee-left` / `marquee-right` defined in `index.css`

## Navbar
- Fixed top header, transparent background
- Floating pill nav (logo left | pill center | status badge + CTA right)
- Pill uses `pill-shadow` + `rounded-[100px]`
- Mobile: full-screen overlay with AnimatePresence

## Content / Brand
- Target audience: Enterprise operational leaders in FMCG, manufacturing, supply chain
- Key metrics used: 82% Day-30 adoption, 1,400+ leaders, 3.2× ROI, 6 industries
- Email: hello@still-studio.ai
- Tone: Enterprise-grade, precise, no fluff

## Known Issues / TODOs
- `IndustryPage.tsx` still uses old design system (blue/slate) — needs redesign
- `animations.ts` exports unused variants — can be deleted
- Accidental `.claire/` directory at project root — can be deleted
