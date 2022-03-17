import { Menu } from '../menu/Menu';
import { HighlightedText } from '../shared/components/highlightedText/HighlightedText';
import { routes } from '../../utils/routes';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useIntl } from '../../locales/IntlContext';

interface HeaderProps {
  isHome?: boolean;
}

export const Header = ({ isHome = false }: HeaderProps) => {
  const { t, locale } = useIntl('common');

  return (
    <header className={styles.wrapper}>
      <Link href={routes.home}>
        <a className={styles.link}>
          <h1 className={styles.heading}>
            <span>Kamil</span>
            <span>
              <HighlightedText variant="primary">Troczewski</HighlightedText>
            </span>
          </h1>
        </a>
      </Link>
      <Menu />
      {isHome && (
        <p className={styles.description}>
          <span>{t('headerDesc1')}</span>
          <span>
            {t('headerDesc2')} <HighlightedText variant="secondary">ReactJS</HighlightedText>
            {locale === 'en' ? ' and ' : ' oraz '}
            <HighlightedText variant="secondary">TypeScript</HighlightedText>
          </span>
        </p>
      )}
    </header>
  );
};
