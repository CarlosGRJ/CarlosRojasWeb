# CLAUDE.md — Carlos Rojas Portfolio

## Project Overview

Single-page bilingual portfolio (English / Spanish) built with Next.js 15 App Router. All sections live on one scrollable page with anchor links. No multi-page routing.

**Deployed on Vercel.** Analytics and Speed Insights are already wired up.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 + shadcn/ui (New York style, zinc base) |
| UI Primitives | Radix UI via shadcn |
| Icons | Lucide React, React Icons |
| Forms | React Hook Form + Zod |
| Toasts | Sonner |
| Email | EmailJS |
| CAPTCHA | Cloudflare Turnstile |
| Images | Cloudinary CDN |
| Gallery | Yet Another React Lightbox |
| Sitemap | next-sitemap (runs on postbuild) |
| Linting | ESLint 9 with Next.js config |

---

## Coding Standards — Apply These on Every Task

Act as a **senior developer**. All code must follow these rules without being asked:

- **Next.js 15** conventions (App Router, `use client` where needed)
- **TypeScript strict** — no `any`, proper types everywhere
- **Zod schemas** for all data validation
- **React Hook Form** with `<Form {...form}>`, `<FormField>`, `<FormItem>`, `<FormLabel>`, `<FormControl>` pattern
- **shadcn/ui** components first; only build custom when shadcn has no equivalent
- **Tailwind** utility classes; no inline styles; no custom CSS unless strictly necessary
- **Clean code** — small focused functions, descriptive names, no magic numbers
- **No comments** unless the WHY is non-obvious (hidden constraint, workaround, subtle invariant)
- **Semantic HTML** — use correct elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<button>`, etc.)
- **Accessibility** — `aria-label`, `aria-describedby`, `role` attributes where needed; keyboard navigation must work
- **SEO** — meaningful `<title>`, `<meta name="description">`, Open Graph tags, canonical URLs where relevant
- **UX/UI** — loading states, error states, disabled states, responsive design (mobile-first)
- **Error validation** — show field-level errors via `<FormMessage>`, never silent failures
- **Path alias** — always use `@/` imports, never relative `../../`

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, global providers
│   └── page.tsx            # Single home page (Client Component)
├── components/
│   ├── ui/                 # shadcn/ui primitives (Button, Card, Dialog…)
│   ├── navbar-01/          # Navbar, Logo, NavMenu, NavigationSheet
│   ├── hero1/              # Hero section
│   ├── hero34/             # About section
│   ├── contact-02/         # Contact form (EmailJS + Turnstile)
│   ├── footer-05/          # Footer
│   ├── svgs/               # Custom SVG icons (services, skills, branding)
│   ├── portfolio-section.tsx
│   ├── service-section.tsx
│   └── experience-section.tsx
├── context/
│   ├── TranslationProvider.tsx   # i18n context + toggle
│   └── ThemeProvider.tsx         # Dark/light mode
├── i18n/
│   ├── en.json             # English translations
│   ├── es.json             # Spanish translations
│   └── index.ts            # Synchronous loader, type-safe getDictionary()
├── constants/
│   ├── servicesData.tsx    # Services list
│   ├── projectsData.tsx    # Portfolio projects (EN)
│   └── projectsDataEs.tsx  # Portfolio projects (ES)
├── types/                  # portfolio.ts, language.ts, theme.ts
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
└── storage/                # localStorage helpers (theme persistence)
```

---

## Internationalization (i18n)

- Two locales: `en` (English) and `es` (Spanish)
- JSON dictionaries in `src/i18n/en.json` and `src/i18n/es.json`
- Access via `useTranslation()` hook → `{ t, locale, toggleLocale }`
- `t` is the full dictionary; use dot-notation to access keys, e.g. `t.Contact.title`
- Locale is persisted in `localStorage`, defaults to `'en'`

**Rule: every new user-facing string must be added to BOTH `en.json` and `es.json`.**

Translation key structure:
```
LanguageToggle, Header, Home, About, Services, Experience, Portfolio, Contact, Footer
```

---

## Page Sections (render order in `page.tsx`)

1. `<Navbar01Page />` — top nav with language/theme toggles
2. `<Hero1 />` — title, avatar, CTA
3. `<Hero34 />` — About section
4. `<ServicesSection />` — 6 services with SVG icons
5. `<ExperienceSection />` — work history
6. `<PortfolioSection />` — project cards with lightbox/dialog
7. `<Contact02Page />` — contact form
8. `<Footer05Page />` — copyright

---

## Key Conventions

- **Dark mode**: class-based (`dark:` prefix), toggled via `ThemeProvider`
- **Shadcn style**: New York, zinc base color, CSS variables for theming
- **Forms**: always React Hook Form + Zod — never uncontrolled inputs
- **Images**: use Cloudinary URLs; remote patterns are configured in `next.config.ts`
- **No Redux/Zustand** — React Context is sufficient for this project's scope
- **Client Components**: most components are `'use client'`; keep server components where possible (layout, metadata)

---

## Adding a New Section

1. Create component in `src/components/<section-name>/`
2. Add all strings to `src/i18n/en.json` and `src/i18n/es.json`
3. Import and render in `src/app/page.tsx` in correct order
4. Add a nav anchor link in `src/components/navbar-01/nav-menu.tsx`

## Adding a New shadcn Component

```bash
npx shadcn@latest add <component-name>
```

## Running Locally

```bash
npm run dev      # Turbopack dev server
npm run build    # Production build + sitemap generation
npm run lint     # ESLint
```
