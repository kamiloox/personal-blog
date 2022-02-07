import { Snippet } from './snippet/Snippet';
import { testSnippets } from './utils/testSnippets';
import styles from './Snippets.module.scss';

export const Snippets = () => (
  <main className={styles.wrapper}>
    {testSnippets.map((snippet) => (
      <Snippet {...snippet} key={snippet.slug} />
    ))}
  </main>
);
