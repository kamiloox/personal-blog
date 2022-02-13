import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Article } from '../../components/article/Article';
import { Layout } from '../../components/layout/Layout';
import { getArticle, getArticlesSlugs } from '../../lib/articles';
import { ArticleMdx } from '../../types/types';
import { parseParam } from '../../utils/helpers';

interface ArticlePageProps {
  article: ArticleMdx;
}

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => (
  <Layout title={article.meta.title} description={article.meta.excerpt}>
    <Article {...article} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const article = await getArticle(parseParam(slug));

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getArticlesSlugs();

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
