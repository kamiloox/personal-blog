import { getMdxSource } from './mdx';
import fs from 'node:fs/promises';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

const ARTICLES_DIR = path.join(process.cwd(), 'articles');

const getArticlePath = (name: string) => {
  return path.join(process.cwd(), 'articles', name);
};

const getArticlesFileNames = async () => {
  const slugs = await fs.readdir(ARTICLES_DIR);

  return slugs;
};

export const getAllArticles = async () => {
  const filePaths = await getArticlesFileNames();

  const articles = await Promise.all(
    filePaths.map((filePath) => {
      return getMdxSource(getArticlePath(filePath));
    }),
  );

  if (isProduction) {
    return articles.filter(({ meta }) => meta.published);
  }

  return articles;
};

export const getArticlesSlugs = async () => {
  const articles = await getArticlesFileNames();

  return articles.map((article) => article.replace('.mdx', ''));
};

export const getArticle = async (slug: string) => {
  const slugs = await getArticlesSlugs();

  if (!slugs.includes(slug)) {
    return null;
  }

  const fileName = `${slug}.mdx`;
  const source = await getMdxSource(getArticlePath(fileName));

  if (isProduction && !source.meta.published) {
    return null;
  }

  return source;
};

export const getSnippetsSortedByLatest = async () => {
  const articles = await getAllArticles();

  return articles
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    })
    .map(({ meta }) => meta);
};
