import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getSnippetsSortedByLatest } from '../lib/articles';
import { useIntl } from '../locales/IntlContext';
import { ArticleMeta } from '../types/types';

interface HomeProps {
  snippets: ArticleMeta[];
}

const HomePage: NextPage<HomeProps> = ({ snippets }) => {
  const { t, toggleLanguage } = useIntl('home');

  console.log(t('hello'));

  return (
    <Layout
      title="frontend blog"
      description="Frontendowy blog głównie o tematyce Typescript i ReactJS"
      isHome
    >
      <button onClick={toggleLanguage}>toggle language</button>
      <Snippets snippets={snippets} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await getSnippetsSortedByLatest();

  return {
    props: { snippets },
  };
};

export default HomePage;
