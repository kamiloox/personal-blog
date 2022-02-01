import { ReactNode } from 'react';
import { Header } from '../header/Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <Header />
    <main>{children}</main>
  </div>
);
