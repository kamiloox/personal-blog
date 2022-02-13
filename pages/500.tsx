import { NextPage } from 'next';
import { Layout } from '../components/layout/Layout';
import { Error } from '../components/shared/components/error/Error';

const Page500: NextPage = () => {
  const message = 'Przepraszam, coś poszło nie tak. Strona nie działa, spróbuj ponownie poźniej 😕';

  return (
    <Layout title="Nie znaleziono" description={message}>
      <Error message={message} />
    </Layout>
  );
};

export default Page500;
