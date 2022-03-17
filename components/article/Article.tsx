import { MDXRemote } from 'next-mdx-remote';
import type { ArticleMdx } from '../../types/types';
import { Category } from '../shared/components/category/Category';
import { mdxComponents } from './utils/mdxComponents';
import styles from './Article.module.scss';
import { Callout } from '../shared/components/callout/Callout';
import { useIntl } from '../../locales/IntlContext';

type ArticleProps = ArticleMdx;

export const Article = ({ source, meta: { title, date, category } }: ArticleProps) => {
  const { t, toggleLanguage } = useIntl('common');

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.info}>
          <Category category={category} reversed />
          <time dateTime={date} className={styles.date}>
            {date}
          </time>
        </div>
        <h2 className={styles.heading}>{title}</h2>
        <Callout>
          {t('articleToggleLangNote')}{' '}
          <button onClick={toggleLanguage} className={styles.textButton}>
            {t('articleToggleLangButton')}
          </button>
        </Callout>
      </header>
      <MDXRemote {...source} components={mdxComponents} />
    </article>
  );
};
