import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Article } from '../../components/article/Article';
import { Layout } from '../../components/layout/Layout';
import { getArticle, getArticlesPaths } from '../../lib/articles';
import { isLocale, parseParam } from '../../utils/helpers';
import type { ArticleMdx, Locale } from '../../types/types';

interface ArticlePageProps {
  article: ArticleMdx;
  locale: Locale;
}

const ArticlePage: NextPage<ArticlePageProps> = ({ article, locale }) => {
  return (
    <Layout title={article.meta.title} description={article.meta.excerpt} locale={locale}>
      <Article {...article} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug;

  if (!slug || !isLocale(locale)) {
    return {
      notFound: true,
    };
  }

  const article = await getArticle(parseParam(slug), locale);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article, locale },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getArticlesPaths();

  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
