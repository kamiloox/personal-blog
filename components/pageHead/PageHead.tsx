import Head from 'next/head';

interface PageHeadProps {
  title: string;
  description: string;
}

export const PageHead = ({ title, description }: PageHeadProps) => (
  <Head>
    <title>troczewski.dev | {title}</title>
    <meta name="description" content={description} />
  </Head>
);
