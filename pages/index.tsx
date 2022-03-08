import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getSnippetsSortedByLatest } from '../lib/articles';
import { useIntl } from '../locales/IntlContext';
import { ArticleMeta } from '../types/types';
import { isLocale } from '../utils/helpers';

interface HomeProps {
  snippets: ArticleMeta[];
}

const HomePage: NextPage<HomeProps> = ({ snippets }) => {
  const { t, toggleLanguage } = useIntl('common');

  return (
    <Layout title={t('title')} description={t('description')} isHome>
      <button onClick={toggleLanguage}>toggle language</button>
      <Snippets snippets={snippets} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log(locale);

  if (!isLocale(locale)) {
    return {
      notFound: true,
    };
  }

  const snippets = await getSnippetsSortedByLatest(locale);

  return {
    props: { snippets },
  };
};

export default HomePage;
