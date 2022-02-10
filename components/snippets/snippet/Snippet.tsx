import { ArticleMeta } from '../../../types/types';
import { Category } from '../../category/Category';
import Link from 'next/link';
import styles from './Snippet.module.scss';

interface SnippetProps extends ArticleMeta {
  latest?: boolean;
}

export const Snippet = ({ excerpt, date, slug, title, category, latest = false }: SnippetProps) => {
  const Heading = latest ? 'h2' : 'h3';

  return (
    <Link href={`/articles/${slug}`}>
      <a className={styles.linkWrapper}>
        <article className={styles.wrapper}>
          <header>
            <div className={styles.metaInfo}>
              <time dateTime={date}>{date}</time>
              <Category category={category} />
            </div>
            <Heading className={styles.heading}>{title}</Heading>
          </header>
          <div className={styles.excerpt}>{excerpt}</div>
        </article>
      </a>
    </Link>
  );
};
