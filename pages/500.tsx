import { Layout } from '../components/layout/Layout';
import { Error } from '../components/shared/components/error/Error';
import { useIntl } from '../locales/IntlContext';

const Page500 = () => {
  const { t, locale } = useIntl('error');

  return (
    <Layout title={t('title500')} description={t('message500')} locale={locale}>
      <Error message={t('message500')} />
    </Layout>
  );
};

export default Page500;
