import { serialize } from 'next-mdx-remote/serialize';
import { articleMetaSchema } from '../utils/schemas';
import path from 'path';
import matter from 'gray-matter';
import fs from 'node:fs/promises';

export const getMdxSource = async (filePath: string) => {
  try {
    const file = await fs.readFile(filePath, 'utf-8');

    const slug = path.basename(filePath).replace('.mdx', '');

    const { content, data } = matter(file);
    const mdxSource = await serialize(content, { scope: { ...data, slug } });

    const parsedArticleMeta = articleMetaSchema.parse(mdxSource.scope);

    return { meta: parsedArticleMeta, source: mdxSource };
  } catch (err) {
    throw new Error(`Cannot get mdx source\n ${err instanceof Error ? err.message : err}`);
  }
};
