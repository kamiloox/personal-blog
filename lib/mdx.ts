import { serialize } from 'next-mdx-remote/serialize';
import { articleMetaSchema } from '../utils/schemas';
import matter from 'gray-matter';
import path from 'path';
import fs from 'node:fs/promises';

// @mapbox/rehype-prism -> could not find a declaration file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import rehypePrism from '@mapbox/rehype-prism';

export const getMdxSource = async (filePath: string) => {
  try {
    const file = await fs.readFile(filePath, 'utf-8');

    const slug = path.basename(filePath).replace('.mdx', '');

    const { content, data } = matter(file);
    const mdxSource = await serialize(content, {
      scope: { ...data, slug },
      mdxOptions: { rehypePlugins: [rehypePrism] },
    });

    const parsedArticleMeta = articleMetaSchema.parse(mdxSource.scope);

    return { meta: parsedArticleMeta, source: mdxSource };
  } catch (err) {
    throw new Error(`Cannot get mdx source\n ${err instanceof Error ? err.message : err}`);
  }
};
