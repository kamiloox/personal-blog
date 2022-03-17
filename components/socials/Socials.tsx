import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti';
import { externalRoutes } from '../../utils/routes';
import styles from './Socials.module.scss';

export const Socials = () => (
  <section className={styles.wrapper}>
    <p className={styles.nick}>@kamiloox</p>
    <div className={styles.icons}>
      <a href={externalRoutes.github} target="_blank" rel="noreferrer">
        <TiSocialGithub
          size={36}
          title="Github"
          className={`${styles.icon} ${styles.githubIcon}`}
        />
      </a>
      <a href={externalRoutes.linkedin} target="_blank" rel="noreferrer">
        <TiSocialLinkedin size={36} title="Linkedin" className={styles.icon} />
      </a>
    </div>
  </section>
);
