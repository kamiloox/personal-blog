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
    </Head>
    <Header isHome={isHome} />
    <main>{children}</main>
  </div>
);
