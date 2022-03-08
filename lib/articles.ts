import { getMdxSourceAllLocales } from './mdx';
import { ARTICLES_DIR, IS_PRODUCTION } from '../utils/constants';
import type { ArticleMdx, Locale } from '../types/types';
import fs from 'node:fs/promises';

const getArticleForCurrentEnvironment = (article: ArticleMdx | null) => {
  if (IS_PRODUCTION && !article?.meta.published) {
    return null;
  }

  return article;
};

export const getAllArticles = async (locale?: Locale) => {
  try {
    const articlesDirs = await fs.readdir(ARTICLES_DIR);

    const articles = await Promise.all(
      articlesDirs.map((slug) => {
        return getMdxSourceAllLocales(slug);
      }),
    );

    const articlesForCurrentEnvironment = articles
      .flat()
      .map((article) => {
        return getArticleForCurrentEnvironment(article);
      })
      .filter((article): article is ArticleMdx => !!article);

    if (locale) {
      return articlesForCurrentEnvironment.filter(({ meta }) => {
        return meta.locale.includes(locale);
      });
    }

    return articlesForCurrentEnvironment;
  } catch (err) {
    console.error('Cannot get all articles', err);
    return [];
  }
};

export const getArticlesPaths = async () => {
  const articles = await getAllArticles();

  const paths = articles.map(({ meta }) => ({ params: { slug: meta.slug }, locale: meta.locale }));

  return paths;
};

export const getArticle = async (slug: string, locale: Locale) => {
  const articles = await getAllArticles(locale);

  const article = articles.find(({ meta }) => meta.slug.includes(slug));

  return article;
};

export const getSnippetsSortedByLatest = async (locale: Locale) => {
  const articles = await getAllArticles(locale);

  return articles
    .sort((a, b) => {
      return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
    })
    .map(({ meta }) => meta);
};
