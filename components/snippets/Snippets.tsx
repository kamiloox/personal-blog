import { Snippet } from './snippet/Snippet';
import type { ArticleMeta } from '../../types/types';
import styles from './Snippets.module.scss';

interface SnippetsProps {
  snippets: ArticleMeta[];
}

export const Snippets = ({ snippets }: SnippetsProps) => (
  <main className={styles.wrapper}>
    {snippets.map((snippet, i) => (
      <Snippet {...snippet} key={snippet.slug} latest={i === 0} />
    ))}
  </main>
);
