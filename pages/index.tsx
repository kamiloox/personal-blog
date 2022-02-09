import { InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getAllArticles, getLatestSnippets } from '../lib/articles';

const Home = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <Snippets />
    <MDXRemote {...articles[0].source} />
  </Layout>
);

export default Home;

export const getStaticProps = async () => {
  const articles = await getAllArticles();
  getLatestSnippets();
  console.log(articles[0].source);

  return {
    props: { articles },
  };
};
