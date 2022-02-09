import { serialize } from 'next-mdx-remote/serialize';
import { articleMetaSchema } from '../utils/schemas';
import matter from 'gray-matter';
import fs from 'node:fs/promises';

export const getMdxSource = async (path: string) => {
  try {
    const file = await fs.readFile(path, 'utf-8');

    const { content, data } = matter(file);
    const mdxSource = await serialize(content, { scope: data });

    const parsedArticleMeta = articleMetaSchema.parse(mdxSource.scope);

    return { meta: parsedArticleMeta, source: mdxSource };
  } catch (err) {
    throw new Error(`Cannot get mdx source\n ${err instanceof Error ? err.message : err}`);
  }
};
