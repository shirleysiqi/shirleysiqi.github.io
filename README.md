# Shirley CHEN Professional Profile — V8-GH

V8-GH is the GitHub-native version of Shirley CHEN's bilingual professional website.

## What changed

This version removes Supabase and does not require a third-party CMS/database.

The public website still runs on GitHub Pages. The hidden admin page connects directly to the GitHub REST API using a **fine-grained personal access token that you paste into the admin page**. The token is never committed to the repository and is not hard-coded into the website.

Admin URL after deployment:

`https://shirleysiqi.github.io/cases/admin/`

## Daily workflow

1. Open `/cases/admin/`.
2. Paste your GitHub fine-grained token and connect.
3. Add/edit/delete cases and upload images.
4. Click **發佈到網站**.
5. V8-GH creates one commit on `main` containing the updated `src/data/cases.json` and newly uploaded images.
6. GitHub Actions automatically redeploys GitHub Pages.

No ZIP export, manual file upload, or manual GitHub commit is required for normal case updates.

## Security model

- Do **not** put a token in source code, GitHub repository files, screenshots, or public messages.
- Use a fine-grained token restricted to the single repository `shirleysiqi/shirleysiqi.github.io`.
- Grant only `Contents: Read and write` repository permission.
- The admin page does not persist the token by default. If “只在目前分頁工作階段記住 Token” is checked, it uses `sessionStorage`, which is cleared when that browser tab/session ends.
- This static admin is convenient but the admin URL itself is public. Security comes from the GitHub token, not from hiding the URL.

## Search indexing

The site keeps the V7.2 privacy preference:

- `noindex`
- `nofollow`
- `noarchive`
- `nosnippet`
- `noimageindex`
- `robots.txt` uses `Disallow: /`

This discourages normal search-engine indexing. It does not make a public GitHub Pages URL private.

## First-time setup

Read `SETUP_GUIDE.md`.
