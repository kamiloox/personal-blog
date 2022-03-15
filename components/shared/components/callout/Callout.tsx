import { ReactNode } from 'react';
import { Typography } from '../typography/Typography';
import styles from './Callout.module.scss';

interface CalloutProps {
  children: ReactNode;
}

export const Callout = ({ children }: CalloutProps) => (
  <div className={styles.wrapper}>
    <div className={styles.icon}>💡</div>
    <div className={styles.textWrapper}>
      <Typography>{children}</Typography>
    </div>
  </div>
);
