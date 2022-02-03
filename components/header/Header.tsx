import { Menu } from './menu/Menu';
import { HighlightedText } from '../shared/components/highlightedText/HighlightedText';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.wrapper}>
    <h1 className={styles.heading}>
      <span>Kamil</span>
      <span>
        <HighlightedText variant="primary">Troczewski</HighlightedText>
      </span>
    </h1>
    <Menu />
    <p className={styles.description}>
      <span>frontend developer based in Poland</span>
      <span>
        mostly passionated with <HighlightedText variant="secondary">ReactJS</HighlightedText> and{' '}
        <HighlightedText variant="secondary">TypeScript</HighlightedText>
      </span>
    </p>
  </header>
);
