import { Typography } from '../shared/components/typography/Typography';
import { MAIL } from '../../utils/constants';
import { Category as CategoryEnum } from '../../types/types';
import { Category } from '../shared/components/category/Category';
import { useIntl } from '../../locales/IntlContext';
import styles from './About.module.scss';

export const About = () => {
  const { t } = useIntl('about');

  return (
    <section className={styles.wrapper}>
      <div>
        <Typography>{t('aboutMe')}</Typography>
        <Typography>
          {t('contactNote')}{' '}
          <a className={styles.link} href={`mailto:${MAIL}`}>
            {t('contactLink')}
          </a>{' '}
          💻
        </Typography>
      </div>
      <article className={styles.technologies}>
        <h2>{t('skillsHeader')}</h2>
        <div className={styles.technologiesIcons}>
          <Category category={CategoryEnum.Css} />
          <Category category={CategoryEnum.Html} />
          <Category category={CategoryEnum.Typescript} />
          <Category category={CategoryEnum.Javascript} />
        </div>
      </article>
    </section>
  );
};
