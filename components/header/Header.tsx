import { Navigation } from './navigation/Navigation';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import { Socials } from './socials/Socials';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.wrapper}>
    <article className={styles.about}>
      <h1 className={styles.heading}>
        <span>Kamil</span>
        <span>Troczewski</span>
      </h1>
      <p className={styles.description}>
        <span>frontend developer based in Poland</span>
        <span>mostly passionated with ReactJS and TypeScript</span>
      </p>
    </article>
    <div className={styles.rightControls}>
      <div className={styles.toggleWithSocials}>
        <ThemeToggle />
        <Socials />
      </div>
      <Navigation />
    </div>
  </header>
);
