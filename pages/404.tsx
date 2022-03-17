import { Layout } from '../components/layout/Layout';
import { Error } from '../components/shared/components/error/Error';
import { useIntl } from '../locales/IntlContext';

const Page404 = () => {
  const { t, locale } = useIntl('error');

  return (
    <Layout title={t('title404')} description={t('message404')} locale={locale}>
      <Error message={t('message404')} />
    </Layout>
  );
};

export default Page404;
