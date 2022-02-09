import { getMdxSource } from './mdx';
import fs from 'node:fs/promises';
import path from 'path';

const ARTICLES_DIR = path.join(process.cwd(), 'articles');

const getArticlePath = (name: string) => path.join(ARTICLES_DIR, name);

const getArticlesSlugs = async () => {
  const slugs = await fs.readdir(ARTICLES_DIR);

  return slugs;
};

export const getAllArticles = async () => {
  const slugs = await getArticlesSlugs();

  return Promise.all(
    slugs.map((slug) => {
      return getMdxSource(getArticlePath(slug));
    }),
  );
};

export const getLatestSnippets = async () => {
  const articles = await getAllArticles();

  articles.map((article) => {
    console.log(new Date(article.meta.date).toLocaleDateString());
  });
};
