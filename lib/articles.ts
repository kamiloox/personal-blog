import { getMdxSource } from './mdx';
import fs from 'node:fs/promises';
import path from 'path';

const ARTICLES_DIR = path.join(process.cwd(), 'articles');

const getArticlePath = (name: string) => {
  return path.join(process.cwd(), 'articles', name);
};

const getArticlesSlugs = async () => {
  const slugs = await fs.readdir(ARTICLES_DIR);

  return slugs;
};

export const getAllArticles = async () => {
  const slugs = await getArticlesSlugs();

  const articles = await Promise.all(
    slugs.map((slug) => {
      return getMdxSource(getArticlePath(slug));
    }),
  );

  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) {
    return articles.filter(({ meta }) => meta.published);
  }

  return articles;
};

export const getSnippetsSortedByLatest = async () => {
  const articles = await getAllArticles();

  return articles
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    })
    .map(({ meta }) => meta);
};
