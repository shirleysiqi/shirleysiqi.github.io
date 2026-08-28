# V5 Content Guide — How to add a new portfolio project

This version is designed so you normally **do not edit Astro page code**.

## 1. Choose a template

- ESG activity: `templates/ESG-TEMPLATE.md`
- Media event + earned coverage: `templates/MEDIA-EVENT-TEMPLATE.md`
- Other corporate communications work: `templates/CORPORATE-COMMS-TEMPLATE.md`

Copy it into:

`src/content/portfolio/`

Rename it with a short lowercase slug, for example:

`haitong-esg-community-day-2026.md`

The filename becomes the web address:

`/portfolio/haitong-esg-community-day-2026`

## 2. Create the matching image folder

Create:

`public/portfolio/haitong-esg-community-day-2026/`

Recommended structure:

```
public/portfolio/haitong-esg-community-day-2026/
├── cover.jpg
├── gallery/
│   ├── 01.jpg
│   ├── 02.jpg
│   ├── 03.jpg
│   └── 04.jpg
└── coverage/
    ├── bloomberg.jpg
    ├── scmp.jpg
    └── hket.jpg
```

### Automatic gallery

You do **not** need to list gallery photos in Markdown if you do not need captions.
Just place images in `gallery/` and name them `01.jpg`, `02.jpg`, `03.jpg` etc. The site auto-discovers them.

If you want bilingual captions, list them in the Markdown frontmatter using the example in the template.

## 3. News coverage: recommended format

Best public-portfolio format:

**cropped preview screenshot + media name + headline + date + original source link**

Why:

- screenshot preserves the portfolio record when a link later expires;
- original link makes the coverage verifiable;
- a `paywall: true` label warns visitors that a subscription may be required.

Do not publish a full high-resolution screenshot of a paywalled article unless you have permission. Monitoring-service clipping licences may be for internal use only; confirm public-display rights before publishing a full clipping.

## 4. Adding a news item

Put the screenshot in the project's `coverage/` folder, then add:

```yaml
coverage:
  - media: "Bloomberg"
    title: "Headline"
    date: "28 March 2026"
    image: "bloomberg.jpg"
    url: "https://..."
    paywall: true
```

If there is no public URL, omit `url`. The screenshot preview can still appear if you have the right to display it.

## 5. ESG projects

No “My Role” block is required. The ESG template focuses on:

- project story
- ESG themes
- activity photos
- engagement highlights
- optional public metrics

## 6. Media events

Media-event pages use the softer label **Communications Scope** rather than **My Role**. It is optional and can be deleted entirely.

## 7. Publish / hide a project

At the top of each `.md` file:

`draft: false` = visible

`draft: true` = hidden from the website

This is useful while you are preparing photos or coverage links.

## 8. GitHub web workflow

For a new project:

1. Copy a template into `src/content/portfolio/`.
2. Edit the text in GitHub.
3. Upload `cover.jpg` and event photos under `public/portfolio/[same-slug]/`.
4. Upload media preview screenshots under `coverage/` if needed.
5. Commit to `main`.
6. GitHub Actions rebuilds the site automatically.

## 9. Confidentiality checklist before publishing

Avoid uploading:

- internal presentations or pitchbooks;
- non-public client information;
- unpublished financial / regulatory information;
- internal email screenshots;
- personal contact lists;
- monitoring data that your provider does not license for public display;
- full copyrighted/paywalled articles without permission.

Prefer public event photography, cropped coverage previews, public source links, and anonymised/aggregated results.
