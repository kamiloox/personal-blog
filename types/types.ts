export enum Breakpoint {
  Phone = '--bp-mobile',
  Tablet = '--bp-tablet',
}

export type Category = 'typescript' | 'javascript' | 'html' | 'css';

export interface ArticleMeta {
  title: string;
  excerpt: string;
  time: string;
  slug: string;
  category: Category;
}
