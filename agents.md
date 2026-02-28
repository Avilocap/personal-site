# Agent Guide: personal_site

This file defines practical rules for AI coding agents working in this repository.

## Project Snapshot
- Stack: Astro 5 + Tailwind CSS 4.
- Site type: mostly static personal site with content collections.
- Package manager: npm (`package-lock.json` is present).

## Runbook
- Install deps: `npm install`
- Local dev: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Astro checks: `npm run astro -- check`

Before finishing any non-trivial change, run `npm run build`.

## Important Paths
- Pages: `src/pages`
- Shared layout: `src/layouts/BaseLayout.astro`
- Components: `src/components`
- Global styles: `src/styles/global.css`
- Content collections config: `src/content/config.ts`
- Blog content: `src/content/blog/*.md`
- Project/work content: `src/content/projects/*.md`
- Static assets: `public/`

Do not edit generated output in `dist/`.

## Content Rules
Content uses Astro Content Collections (`src/content/config.ts`).

### Blog entries (`src/content/blog`)
Frontmatter expected by schema:
- `title` (required, string)
- `date` (required, string parseable as date)
- `summary` (optional)
- `cover` with `src` and optional `alt` (optional)
- `tags` (optional string array)
- `draft` (optional, defaults to `false`)

### Work/projects entries (`src/content/projects`)
Frontmatter expected by schema:
- `title` (required, string)
- `summary` (optional)
- `date` (optional, string)
- `tags` (optional string array)
- `cover` (optional)
- `images` (optional array of `{ src, alt?, caption? }`)
- `links` (optional `{ site?, repo? }`, valid URLs)
- `draft` (optional, defaults to `false`)

If content should stay unpublished, set `draft: true`.

## UI and Code Conventions
- Reuse existing shared pieces before creating new ones:
  - `BaseLayout` for page shell
  - `Nav` and `Footer` via layout slots
  - `Link` component for text links and highlight behavior
  - `ContactSection` for CTA block
- Keep styling consistent with current design language:
  - Tailwind utility classes
  - black/gray/yellow palette and border-heavy look
  - `max-w-7xl mx-auto` container pattern
- Keep external links safe (`target="_blank"` + `rel="noopener noreferrer"`), or use `Link` with `external`.

## Change Scope Guidelines
- Keep edits focused on the requested task.
- Avoid broad refactors unless explicitly requested.
- Preserve existing route structure unless task requires route changes.
- When adding new media, place files in `public/img` (or existing relevant folder) and reference with `/img/...`.

## Final Validation Checklist
- Build succeeds: `npm run build`
- No content schema errors from frontmatter
- No broken imports/routes from touched files
- If UI changed, do a quick smoke check in dev server
