import Link from 'next/link';
import { routes } from '../../../../utils/routes';
import styles from './Error.module.scss';

interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps) => (
  <div className={styles.wrapper}>
    <p>{message}</p>
    <Link href={routes.home}>
      <a className={styles.link}>Idź do strony głównej</a>
    </Link>
  </div>
);
