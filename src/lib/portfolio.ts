import fs from 'node:fs';
import path from 'node:path';

export type PortfolioCategory = 'corporate-communications' | 'esg' | 'media-event';

export type GalleryItem = {
  src: string;
  caption?: string;
  captionZh?: string;
};

export type CoverageItem = {
  media: string;
  title: string;
  date?: string;
  image?: string;
  url?: string;
  paywall?: boolean;
  note?: string;
  noteZh?: string;
};

export type MetricItem = {
  value: string;
  label: string;
  labelZh?: string;
};

export type HighlightItem = {
  title: string;
  titleZh?: string;
  text?: string;
  textZh?: string;
};

export const categoryMeta: Record<PortfolioCategory, { en: string; zh: string; short: string; shortZh: string }> = {
  'corporate-communications': {
    en: 'Corporate Communications',
    zh: '企业传讯',
    short: 'Corporate Communications',
    shortZh: '企业传讯',
  },
  esg: {
    en: 'ESG & Corporate Engagement',
    zh: 'ESG与企业参与',
    short: 'ESG',
    shortZh: 'ESG',
  },
  'media-event': {
    en: 'Media Relations & Event Coverage',
    zh: '媒体关系与活动传播',
    short: 'Media & Events',
    shortZh: '媒体与活动',
  },
};

export function slugFromPath(filePath: string) {
  return filePath.split('/').pop()?.replace(/\.md$/, '') || '';
}

export function getPortfolioEntries() {
  const modules = import.meta.glob('../content/portfolio/*.md', { eager: true }) as Record<string, any>;
  return Object.entries(modules)
    .map(([filePath, mod]) => ({
      slug: slugFromPath(filePath),
      frontmatter: mod.frontmatter || {},
      Content: mod.Content,
    }))
    .filter((item) => !item.frontmatter.draft)
    .sort((a, b) => String(b.frontmatter.date || '').localeCompare(String(a.frontmatter.date || '')));
}

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

export function findDefaultCover(slug: string, configured?: string) {
  if (configured) return configured;
  const base = path.join(process.cwd(), 'public', 'portfolio', slug);
  for (const name of ['cover.jpg', 'cover.jpeg', 'cover.png', 'cover.webp', 'cover.avif']) {
    if (fs.existsSync(path.join(base, name))) return `/portfolio/${slug}/${name}`;
  }
  return '';
}

export function getGallery(slug: string, configured?: Array<string | GalleryItem>): GalleryItem[] {
  if (Array.isArray(configured) && configured.length) {
    return configured.map((item) => {
      if (typeof item === 'string') {
        const src = item.startsWith('/') ? item : `/portfolio/${slug}/gallery/${item}`;
        return { src };
      }
      const src = item.src?.startsWith('/') ? item.src : `/portfolio/${slug}/gallery/${item.src}`;
      return { ...item, src };
    });
  }

  const galleryDir = path.join(process.cwd(), 'public', 'portfolio', slug, 'gallery');
  if (!fs.existsSync(galleryDir)) return [];
  return fs.readdirSync(galleryDir)
    .filter((name) => IMAGE_EXTS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => ({ src: `/portfolio/${slug}/gallery/${name}` }));
}

export function normalizeCoverage(slug: string, coverage?: CoverageItem[]): CoverageItem[] {
  if (!Array.isArray(coverage)) return [];
  return coverage.map((item) => ({
    ...item,
    image: item.image
      ? (item.image.startsWith('/') ? item.image : `/portfolio/${slug}/coverage/${item.image}`)
      : undefined,
  }));
}
