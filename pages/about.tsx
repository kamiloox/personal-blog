import { GetStaticProps } from 'next';
import { About } from '../components/about/About';
import { Layout } from '../components/layout/Layout';
import { getTranslation } from '../locales/translations';
import { isLocale } from '../utils/helpers';

interface AboutProps {
  title: string;
  description: string;
}

const AboutPage = ({ title, description }: AboutProps) => {
  return (
    <Layout title={title} description={description}>
      <About />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!isLocale(locale)) {
    return {
      notFound: true,
    };
  }

  const t = getTranslation(locale, 'about');

  const [title, description] = [t('title'), t('description')];

  return {
    props: { title, description },
  };
};

export default AboutPage;
