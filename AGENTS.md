# AGENTS.md — Carlos Rojas Portfolio

This file is a companion to CLAUDE.md. It provides agent-specific guidance for AI assistants working in this codebase.

---

## Role

You are a **senior full-stack developer** working on a production bilingual portfolio. Approach every task with production quality: accessibility, performance, security, and clean code are non-negotiable, not optional.

---

## Non-Negotiable Rules

These apply to every file you touch, every time:

1. **Bilingual first** — every user-facing string goes into both `src/i18n/en.json` and `src/i18n/es.json`. Never hardcode display text.
2. **Forms = React Hook Form + Zod** — always use `<Form {...form}>`, `<FormField>`, `<FormItem>`, `<FormLabel>`, `<FormControl>`, `<FormMessage>`. No raw `<input>` or `useState` for form state.
3. **Validation** — define a Zod schema before writing the form. Surface field errors via `<FormMessage>`, never `alert()` or console-only.
4. **Accessibility** — add `aria-label` / `aria-describedby` / `role` where semantic HTML alone is insufficient. Keyboard navigation must be functional.
5. **Semantic HTML** — use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<button>` correctly. No `<div>` soup.
6. **shadcn/ui first** — check if a shadcn component exists before building custom. Install with `npx shadcn@latest add <component>`.
7. **Tailwind only** — use utility classes, `dark:` variants, and `cn()` for conditional classes. No inline styles.
8. **`@/` imports** — always use the path alias. Never `../../`.
9. **No `any`** — strict TypeScript everywhere. Define types in `src/types/` if reused across files.
10. **No orphan comments** — only write a comment when the WHY would genuinely surprise a future reader.

---

## i18n Workflow

When adding or editing any text:

```json
// src/i18n/en.json — add under the relevant section key
"Contact": {
  "newField": "English text here"
}

// src/i18n/es.json — mirror the exact same key path
"Contact": {
  "newField": "Texto en español aquí"
}
```

Then use it in the component:
```tsx
const { t } = useTranslation()
<p>{t.Contact.newField}</p>
```

**Never add a key to one file without adding it to the other.**

---

## Form Pattern (Canonical Example)

```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const schema = z.object({
  email: z.string().email({ message: 'Valid email required' }),
})

type FormValues = z.infer<typeof schema>

export function ExampleForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  })

  function onSubmit(values: FormValues) {
    // handle submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" aria-required="true" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

---

## Component Checklist

Before marking any component done:

- [ ] All display text uses `useTranslation()` — nothing hardcoded
- [ ] Both `en.json` and `es.json` updated
- [ ] Correct semantic HTML elements used
- [ ] `aria-*` attributes added where needed
- [ ] `dark:` variants applied for dark mode
- [ ] Mobile-responsive (test at sm, md, lg breakpoints mentally)
- [ ] Loading / error / empty states handled
- [ ] TypeScript types defined, no `any`
- [ ] `@/` path aliases used
- [ ] shadcn components used instead of custom where available

---

## SEO Guidelines

- Page `<title>` and `<meta name="description">` are set in `src/app/layout.tsx`
- Open Graph and Twitter card meta already configured — update them when changing page identity
- `next-sitemap` runs on `postbuild`; no manual sitemap changes needed
- Headings must follow a logical hierarchy (`h1` once per page, `h2` for sections, `h3` for subsections)

---

## Performance Guidelines

- Images: use Cloudinary URLs with `next/image` (remote patterns configured in `next.config.ts`)
- Keep Client Components minimal — push rendering to server where the component has no interactivity
- Do not add heavy dependencies without checking bundle impact first

---

## What NOT to Do

- Do not use `useState` to manage form inputs — use React Hook Form
- Do not add inline styles (`style={{}}`) — use Tailwind classes
- Do not hardcode any user-facing text — always go through `t.*`
- Do not create new global CSS unless Tailwind genuinely cannot solve it
- Do not install an alternative state management library (no Redux, Zustand, Jotai)
- Do not add a routing library — this is intentionally a single-page site
- Do not skip dark mode variants on any visible UI element
- Do not write empty `aria-label=""` — either write a meaningful value or omit it
