import { Menu } from '../menu/Menu';
import { HighlightedText } from '../shared/components/highlightedText/HighlightedText';
import Link from 'next/link';
import styles from './Header.module.scss';

interface HeaderProps {
  isHome?: boolean;
}

export const Header = ({ isHome = false }: HeaderProps) => (
  <header className={styles.wrapper}>
    <Link href="/">
      <a className={styles.link}>
        <h1 className={styles.heading}>
          <span>kamiloox</span>
          <span>
            <HighlightedText variant="primary">frontend blog</HighlightedText>
          </span>
        </h1>
      </a>
    </Link>
    <Menu />
    {isHome && (
      <p className={styles.description}>
        <span>blog o tematyce frontendowej 👀</span>
        <span>
          moje ulubione technologie to{' '}
          <HighlightedText variant="secondary">ReactJS</HighlightedText> oraz{' '}
          <HighlightedText variant="secondary">TypeScript</HighlightedText>
        </span>
      </p>
    )}
  </header>
);
