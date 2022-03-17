import { GetStaticProps } from 'next';
import { About } from '../components/about/About';
import { Layout } from '../components/layout/Layout';
import { getTranslation } from '../locales/translations';
import { Locale } from '../types/types';
import { isLocale } from '../utils/helpers';

interface AboutProps {
  title: string;
  description: string;
  locale: Locale;
}

const AboutPage = ({ title, description, locale }: AboutProps) => (
  <Layout title={title} description={description} locale={locale}>
    <About />
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!isLocale(locale)) {
    return {
      notFound: true,
    };
  }

  const t = getTranslation(locale, 'about');

  const [title, description] = [t('title'), t('description')];

  return {
    props: { title, description, locale },
  };
};

export default AboutPage;
