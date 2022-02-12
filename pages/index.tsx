import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getSnippetsSortedByLatest } from '../lib/articles';
import { PageHead } from '../components/pageHead/PageHead';

const Home = ({ snippets }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout isHome>
    <PageHead
      title="frontend blog"
      description="Frontendowy blog głównie o tematyce Typescript i ReactJS"
    />
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
