import { Typography } from '../shared/components/typography/Typography';
import { MAIL } from '../../utils/constants';
import { Category as CategoryEnum } from '../../types/types';
import { Category } from '../shared/components/category/Category';
import styles from './About.module.scss';

export const About = () => (
  <section className={styles.wrapper}>
    <div>
      <Typography>
        Hej 👋 nazywam się Kamil. Aktualnie uczę się, żeby zostać w przyszłości frontend
        developerem. Najbardziej lubię ReactJS i Typescript. Czuję się też dobrze w CSS i HTML.
        Potrafię też coś napisać nieskomplikowanego na backendzie. Jakiś prosty design stronki też
        jestem w stanie stworzyć 🤓
      </Typography>
      <Typography>
        Można się kontaktować ze mną na moich socialach lub tutaj{' '}
        <a className={styles.link} href={`mailto:${MAIL}`}>
          napisz do mnie
        </a>{' '}
        💻
      </Typography>
    </div>
    <article className={styles.technologies}>
      <h2>moje umiejętności</h2>
      <div className={styles.technologiesIcons}>
        <Category category={CategoryEnum.Css} />
        <Category category={CategoryEnum.Html} />
        <Category category={CategoryEnum.Typescript} />
        <Category category={CategoryEnum.Javascript} />
      </div>
    </article>
  </section>
);
