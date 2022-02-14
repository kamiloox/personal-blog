import { ReactNode } from 'react';
import { DOMAIN_NAME } from '../../utils/constants';
import { Header } from '../header/Header';
import styles from './Layout.module.scss';
import { NextSeo } from 'next-seo';

interface LayoutProps {
  children: ReactNode;
  isHome?: boolean;
  title: string;
  description: string;
}

export const Layout = ({ children, title, description, isHome = false }: LayoutProps) => (
  <div className={styles.wrapper}>
    <NextSeo
      title={`${DOMAIN_NAME} | ${title}`}
      description={description}
      openGraph={{ title, description }}
    />
    <Header isHome={isHome} />
    <main>{children}</main>
  </div>
);
