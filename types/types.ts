import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export enum Breakpoint {
  Phone = '--bp-mobile',
  Tablet = '--bp-tablet',
}

export enum Category {
  Typescript = 'typescript',
  Javascript = 'javascript',
  Html = 'html',
  Css = 'css',
}

export interface ArticleMeta {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  locale: string;
  published: boolean;
  category: Category;
}

export interface ArticleMdx {
  meta: ArticleMeta;
  source: MDXRemoteSerializeResult;
}

export type Locale = 'en' | 'pl';
