import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti';
import styles from './Socials.module.scss';

export const Socials = () => (
  <section className={styles.wrapper}>
    <p className={styles.nick}>@kamiloox</p>
    <div className={styles.icons}>
      <a href="https://github.com/kamiloox" target="_blank" rel="noreferrer">
        <TiSocialGithub
          size={36}
          title="Github profile"
          className={`${styles.icon} ${styles.githubIcon}`}
        />
      </a>
      <a href="https://www.linkedin.com/in/kamiloox/" target="_blank" rel="noreferrer">
        <TiSocialLinkedin size={36} title="Linkedin profile" className={styles.icon} />
      </a>
    </div>
  </section>
);
