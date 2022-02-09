import { ReactNode } from 'react';
import { Header } from '../header/Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
  isHome?: boolean;
}

export const Layout = ({ children, isHome = false }: LayoutProps) => (
  <div className={styles.wrapper}>
    <Header isHome={isHome} />
    <main>{children}</main>
  </div>
);
