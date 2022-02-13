import Head from 'next/head';
import { DOMAIN_NAME } from '../../utils/constants';

interface PageHeadProps {
  title: string;
  description: string;
}

export const PageHead = ({ title, description }: PageHeadProps) => (
  <Head>
    <title>
      {DOMAIN_NAME} | {title}
    </title>
    <meta name="description" content={description} />
  </Head>
);
