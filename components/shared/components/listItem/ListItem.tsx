import { ReactNode } from 'react';
import styles from './ListItem.module.scss';

interface ListItemProps {
  children: ReactNode;
}

export const ListItem = ({ children }: ListItemProps) => (
  <li className={styles.listItem}>{children}</li>
);
