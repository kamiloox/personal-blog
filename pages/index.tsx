import { GetStaticProps } from 'next';

import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getSnippetsSortedByLatest } from '../lib/articles';
import { getTranslation } from '../locales/translations';
import { ArticleMeta } from '../types/types';
import { isLocale } from '../utils/helpers';

interface HomeProps {
  snippets: ArticleMeta[];
  title: string;
  description: string;
}

const HomePage = ({ snippets, title, description }: HomeProps) => (
  <Layout title={title} description={description} isHome>
    <Snippets snippets={snippets} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!isLocale(locale)) {
    return {
      notFound: true,
    };
  }

  const snippets = await getSnippetsSortedByLatest(locale);

  const t = getTranslation(locale, 'common');

  const [title, description] = [t('title'), t('description')];

  return {
    props: { snippets, title, description },
  };
};

export default HomePage;
