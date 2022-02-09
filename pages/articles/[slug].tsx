import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { Article } from '../../components/article/Article';
import { Layout } from '../../components/layout/Layout';
import { getArticle, getArticlesSlugs } from '../../lib/articles';

const ArticlePage = (article: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <Article {...article} />
  </Layout>
);

export default ArticlePage;

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const slug = params?.slug;

  if (!slug) {
    throw new Error(`Provided slug '${slug}' does not exists!`);
  }

  const article = await getArticle(slug);

  if (!article) {
    throw new Error(`Cannot find article with given slug ${slug}`);
  }

  return {
    props: article,
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
