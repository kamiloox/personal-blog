import Link from 'next/link';
import { useIntl } from '../../../../locales/IntlContext';
import { routes } from '../../../../utils/routes';
import styles from './Error.module.scss';

interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps) => {
  const { t } = useIntl('common');

  return (
    <div className={styles.wrapper}>
      <p>{message}</p>
      <Link href={routes.home}>
        <a className={styles.link}>{t('goToHome')}</a>
      </Link>
    </div>
  );
};
