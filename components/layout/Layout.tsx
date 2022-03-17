import { ReactNode } from 'react';
import { DOMAIN_NAME, FULL_ADDRESS } from '../../utils/constants';
import { Header } from '../header/Header';
import styles from './Layout.module.scss';
import { NextSeo } from 'next-seo';
import { useIntl } from '../../locales/IntlContext';

interface LayoutProps {
  children: ReactNode;
  isHome?: boolean;
  title: string;
  description: string;
}

export const Layout = ({ children, title, description, isHome = false }: LayoutProps) => {
  const { locale } = useIntl('common');

  return (
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
};
