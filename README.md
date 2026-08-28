# Compliance & Controls Executive Portfolio

Astro static site designed for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Before deployment

1. Replace `YOUR_GITHUB_USERNAME` in `astro.config.mjs`.
2. Replace all placeholder name, employer, dates, metrics, email and LinkedIn links.
3. Create a GitHub repo named `YOUR_GITHUB_USERNAME.github.io`.
4. Push this project to `main`.
5. GitHub → Settings → Pages → Source: GitHub Actions.

If you use a normal project repository instead of `username.github.io`, add `base: '/repo-name'` to `astro.config.mjs` and update internal links accordingly.
