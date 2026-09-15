# IITM Incubation Cell — website

Built from the supplied design system export (`Colour.png` / `Font.png` / `Button.png`) and
homepage mockup (`Home.png`) in `../source`. Stack: **React 18 + Vite + Tailwind CSS v4 +
Framer Motion + React Router** — same animation system (page-load fades, scroll reveals,
hover-lift, animated menus) as the Bodhan.AI rebuild.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Design tokens

Everything in `src/index.css`'s `@theme` block and utility classes (`.btn-primary`,
`.btn-secondary`, `.pill-badge`, `.text-hero/.text-h1/.text-s1/.text-p1/.text-p2/.text-p3`)
is transcribed directly from your Design System Builder export:

- **Primary** `#120A8F` (navy) · **Secondary** `#CD0222` (red, used for CTAs) · **Accent**
  `#00923F` (green — not yet used on the homepage, reserved) · surface `#E7EFFA` · muted text
  `#7F7F7F`
- Font: Arial, at the exact sizes/weights/line-heights from `Font.png`
- Buttons: 10px radius, exact padding/colors from `Button.png`

Change a token in one place (`src/index.css`) and it updates everywhere.

## What's built vs. placeholder

- **Homepage (`/`)**: every section, every line of copy, and every stat is transcribed
  directly from `Home.png` — hero, stats bar, about, testimonial, core pillars, 8 impact
  disciplines, "how we help" accordion, ecosystem org-chart, partner tabs + 26 real investor
  names, 3 portfolio startups, the red stats banner, 3 programs, 2 insight posts, and the
  newsletter footer.
- **Photos & logos**: the mockup shows real photography (building exterior, CEO portrait,
  startup product shots, program/event photos) and real partner/investor logos. None of
  those image files were supplied, so every image slot renders a labeled placeholder
  (`src/components/ImagePlaceholder.tsx`) — a soft brand-colored gradient with a caption
  saying what belongs there. **Drop real files into `public/images/` and swap the
  `ImagePlaceholder` for a plain `<img>`** in the relevant section of `src/pages/Home.tsx`
  once you have them. Partner logos are currently rendered as text wordmarks for the same
  reason.
- **Other pages** (`/about`, `/portfolio`, `/programs`, `/impact`, `/insights`, `/careers`,
  `/apply`, `/privacy`, `/terms`, `/accessibility`): simple "coming soon" placeholder pages
  with the header/footer wired up, since no design was supplied for them. Nav links, footer
  links, and buttons all point at real routes — build out each page's content in
  `src/pages/ComingSoon.tsx`'s place whenever you have a design for it.
- **Newsletter signup and "Login"** are non-functional UI only (no backend) — wire them up
  to whatever service you use for email capture / auth.
- The "How We Can Help" accordion's expanded body copy (one sentence per audience) was
  written by me to fill the mockup's collapsed `+` state, since the design never shows it
  expanded — treat it as a draft, not final copy.

## Structure

```
src/
  components/   Navbar, Footer, ImagePlaceholder
  data/         site.ts — every piece of real copy/stats/lists from the mockup
  lib/motion.ts Shared Framer Motion variants (fadeUp, staggerContainer, staggerGrid, revealProps)
  pages/        Home.tsx (the full built page), ComingSoon.tsx (placeholder pages)
public/
  images/       Empty — put real photos/logos here
  favicon.svg   Placeholder mark; swap for the real IITMIC crest
```
