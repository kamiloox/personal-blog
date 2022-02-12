import { MDXRemote } from 'next-mdx-remote';
import type { ArticleMdx } from '../../types/types';
import { PageHead } from '../pageHead/PageHead';
import { Category } from '../category/Category';
import { mdxComponents } from './utils/mdxComponents';
import styles from './Article.module.scss';

type ArticleProps = ArticleMdx;

export const Article = ({ source, meta: { title, date, category, excerpt } }: ArticleProps) => (
  <main>
    <PageHead title={title} description={excerpt} />
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.info}>
          <Category category={category} reversed />
          <time dateTime={date} className={styles.date}>
            {date}
          </time>
        </div>
        <h2 className={styles.heading}>{title}</h2>
      </header>
      <MDXRemote {...source} components={mdxComponents} />
    </article>
  </main>
);
