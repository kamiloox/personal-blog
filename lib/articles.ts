import { getMdxSource } from './mdx';
import fs from 'node:fs/promises';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

const ARTICLES_DIR = path.join(process.cwd(), 'articles');

const getArticlePath = (name: string) => {
  return path.join(process.cwd(), 'articles', name);
};

export const getAllArticles = async () => {
  const filePaths = await fs.readdir(ARTICLES_DIR);

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
  const articles = await getAllArticles();

  return articles.map(({ meta: { slug } }) => slug);
};

export const getArticle = async (slug: string) => {
  const slugs = await getArticlesSlugs();

  if (!slugs.includes(slug)) {
    return null;
  }

  const fileName = `${slug}.mdx`;
  const article = await getMdxSource(getArticlePath(fileName));

  if (isProduction && !article.meta.published) {
    return null;
  }

  return article;
};

export const getSnippetsSortedByLatest = async () => {
  const articles = await getAllArticles();

  return articles
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    })
    .map(({ meta }) => meta);
};
