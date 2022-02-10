import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getSnippetsSortedByLatest } from '../lib/articles';

const Home = ({ snippets }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout isHome>
    <Head>
      <title>kamiloox.dev | frontend blog</title>
      <meta name="description" content="Frontendowy blog autorstwa kamiloox &copy;" />
    </Head>
    <Snippets snippets={snippets} />
  </Layout>
);

export default Home;

export const getStaticProps = async () => {
  const snippets = await getSnippetsSortedByLatest();

  return {
    props: { snippets },
  };
};
