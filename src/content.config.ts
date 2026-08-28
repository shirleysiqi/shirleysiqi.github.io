import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/portfolio',
  }),
});

export const collections = { portfolio };
