import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getSnippetsSortedByLatest } from '../lib/articles';

const Home = ({ snippets }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
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
