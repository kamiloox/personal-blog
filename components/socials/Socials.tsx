import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti';
import { routes } from '../../utils/routes';
import styles from './Socials.module.scss';

export const Socials = () => (
  <section className={styles.wrapper}>
    <p className={styles.nick}>@kamiloox</p>
    <div className={styles.icons}>
      <a href={routes.github} target="_blank" rel="noreferrer">
        <TiSocialGithub
          size={36}
          title="Profil Github"
          className={`${styles.icon} ${styles.githubIcon}`}
        />
      </a>
      <a href={routes.linkedin} target="_blank" rel="noreferrer">
        <TiSocialLinkedin size={36} title="Profil Linkedin" className={styles.icon} />
      </a>
    </div>
  </section>
);
