import Head from 'next/head';
import { ReactNode } from 'react';
import { DOMAIN_NAME } from '../../utils/constants';
import { Header } from '../header/Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  isHome?: boolean;
  title: string;
  description: string;
}

export const Layout = ({ children, title, description, isHome = false }: LayoutProps) => (
  <div className={styles.wrapper}>
    <Head>
      <title>
        {DOMAIN_NAME} | {title}
      </title>
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:locale" content="pl_PL" />
      <meta name="og:image:url" content="/images/og-image-png" />
      <meta name="og:image:secure_url" content="/images/og-image.jpg" />
      <meta name="og:image:type" content="image/jpeg" />
      <meta name="og:image:width" content="781" />
      <meta name="og:image:height" content="316" />
      <meta name="og:image:alt" content="Frontendowy blog" />
    </Head>
    <Header isHome={isHome} />
    <main>{children}</main>
  </div>
);
