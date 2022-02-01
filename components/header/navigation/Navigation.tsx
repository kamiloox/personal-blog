import { Socials } from '../socials/Socials';
import styles from './Navigation.module.scss';

export const Navigation = () => (
  <nav>
    <ul className={styles.list}>
      <li className={styles.socialsWrapper}>
        <Socials />
      </li>
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
);
