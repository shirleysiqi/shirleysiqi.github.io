# Siqi Chen — Corporate Communications Portfolio V5

Astro + GitHub Pages portfolio, redesigned as a **content-driven professional archive**.

## V5 key feature

New ESG / media-event / corporate-communications case studies are created with Markdown files and image folders. Normal updates do not require editing Astro page code.

Start with `CONTENT_GUIDE.md`.

## Add content

Templates:

- `templates/ESG-TEMPLATE.md`
- `templates/MEDIA-EVENT-TEMPLATE.md`
- `templates/CORPORATE-COMMS-TEMPLATE.md`

Published project files go in:

`src/content/portfolio/`

Images go in:

`public/portfolio/[same-project-slug]/`

## Deployment

Repository: `shirleysiqi.github.io`

GitHub Pages source: **GitHub Actions**

Workflow: `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run dev
```

## V5.1 build fix

This version uses Astro 5's official Content Collections API (`src/content.config.ts`, `getCollection()`, and `render()`) for portfolio routes. This replaces the earlier `import.meta.glob()` implementation that could fail in `getStaticPaths()` with `modules is not defined` during GitHub Actions builds.
