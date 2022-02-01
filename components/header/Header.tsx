import { Navigation } from './navigation/Navigation';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.wrapper}>
    <article className={styles.about}>
      <h1 className={styles.heading}>
        <span>Kamil</span>
        <span>Troczewski</span>
      </h1>
      <div className={styles.description}>
        <p className={styles.descriptionLine}>frontend developer based in Poland</p>
        <p className={styles.descriptionLine}>mostly passionated with ReactJS and TypeScript</p>
      </div>
    </article>
    <Navigation />
  </header>
);
