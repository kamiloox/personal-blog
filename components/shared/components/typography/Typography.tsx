import { ReactNode } from 'react';
import styles from './Typography.module.scss';

interface TypographyProps {
  children: ReactNode;
}

export const Typography = ({ children }: TypographyProps) => (
  <p className={styles.typography}>{children}</p>
);
