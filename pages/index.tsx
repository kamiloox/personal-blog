import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getSnippetsSortedByLatest } from '../lib/articles';
import { ArticleMeta } from '../types/types';

interface HomeProps {
  snippets: ArticleMeta[];
}

const HomePage: NextPage<HomeProps> = ({ snippets }) => (
  <Layout
    title="frontend blog"
    description="Frontendowy blog głównie o tematyce Typescript i ReactJS"
    isHome
  >
    <Snippets snippets={snippets} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await getSnippetsSortedByLatest();

  return {
    props: { snippets },
  };
};

export default HomePage;
