import { ThemeToggle } from '../../themeToggle/ThemeToggle';
import { Socials } from '../socials/Socials';
import styles from './Menu.module.scss';

export const Menu = () => (
  <div className={styles.wrapper}>
    <div className={styles.toggleWithSocials}>
      <ThemeToggle />
      <Socials />
    </div>
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="/about" className={styles.link}>
            about me
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="/articles" className={styles.link}>
            articles
          </a>
        </li>
      </ul>
    </nav>
  </div>
);
