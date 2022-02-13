import { NextPage } from 'next';
import { Layout } from '../components/layout/Layout';
import { Error } from '../components/shared/components/error/Error';

const Page404: NextPage = () => {
  const message = 'Ups, nie ma takiej strony o szukanym adresie. 😕';

  return (
    <Layout title="Nie znaleziono" description={message}>
      <Error message={message} />
    </Layout>
  );
};

export default Page404;
