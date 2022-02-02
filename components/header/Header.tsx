import { Navigation } from './navigation/Navigation';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import { Socials } from './socials/Socials';
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
    <div className={styles.rightControls}>
      <div className={styles.toggleWithSocials}>
        <ThemeToggle />
        <Socials />
      </div>
      <Navigation />
    </div>
    <p className={styles.description}>
      <span>frontend developer based in Poland</span>
      <span>
        mostly passionated with <HighlightedText variant="secondary">ReactJS</HighlightedText> and{' '}
        <HighlightedText variant="secondary">TypeScript</HighlightedText>
      </span>
    </p>
  </header>
);
