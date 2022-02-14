import Head from 'next/head';
import { ReactNode } from 'react';
import { DOMAIN_NAME, FULL_ADDRESS } from '../../utils/constants';
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
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:url" content={FULL_ADDRESS} />
      <meta property="og:image" content={`${FULL_ADDRESS}/images/og-hero.jpg`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Frontendowy blog" />
    </Head>
    <Header isHome={isHome} />
    <main>{children}</main>
  </div>
);
