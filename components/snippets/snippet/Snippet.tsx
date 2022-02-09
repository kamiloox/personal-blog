import styles from './Snippet.module.scss';
import { ArticleMeta } from '../../../types/types';
import { Category } from '../../category/Category';

interface SnippetProps extends ArticleMeta {
  latest?: boolean;
}

export const Snippet = ({ excerpt, date, slug, title, category, latest = false }: SnippetProps) => {
  const Heading = latest ? 'h2' : 'h3';

  return (
    <a href={`article/${slug}`} className={styles.linkWrapper}>
      <article className={styles.wrapper}>
        <header>
          <div className={styles.metaInfo}>
            <span>{date}</span> {/*TODO: time tag*/}
            <Category category={category} />
          </div>
          <Heading className={styles.heading}>{title}</Heading>
        </header>
        <div className={styles.excerpt}>{excerpt}</div>
      </article>
    </a>
  );
};
