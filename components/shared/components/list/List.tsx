import { ReactNode } from 'react';
import styles from './List.module.scss';

interface ListProps {
  children: ReactNode;
  variant: 'ol' | 'ul';
}

export const List = ({ children, variant }: ListProps) => {
  const List = variant;

  return <List className={styles.list}>{children}</List>;
};
