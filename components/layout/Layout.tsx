import { ReactNode } from 'react';
import { DOMAIN_NAME, FULL_ADDRESS } from '../../utils/constants';
import { Header } from '../header/Header';
import styles from './Layout.module.scss';
import { NextSeo } from 'next-seo';
import type { Locale } from '../../types/types';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  locale?: Locale;
  isHome?: boolean;
}

export const Layout = ({
  children,
  title,
  description,
  locale = 'en',
  isHome = false,
}: LayoutProps) => (
  <div className={styles.wrapper}>
    <NextSeo
      title={`${DOMAIN_NAME} | ${title}`}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            url: `${FULL_ADDRESS}/images/og-hero.${locale}.jpg`,
            alt: title,
            height: 630,
            width: 1200,
          },
        ],
      }}
    />
    <Header isHome={isHome} />
    <main>{children}</main>
  </div>
);
