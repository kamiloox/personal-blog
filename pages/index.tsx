import { GetStaticProps } from 'next';

import { Layout } from '../components/layout/Layout';
import { Snippets } from '../components/snippets/Snippets';
import { getSnippetsSortedByLatest } from '../lib/articles';
import { getTranslation } from '../locales/translations';
import type { ArticleMeta, Locale } from '../types/types';
import { isLocale } from '../utils/helpers';

interface HomeProps {
  snippets: ArticleMeta[];
  title: string;
  description: string;
  locale: Locale;
}

const HomePage = ({ snippets, title, description, locale }: HomeProps) => (
  <Layout title={title} description={description} locale={locale} isHome>
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
    props: { snippets, title, description, locale },
  };
};

export default HomePage;
