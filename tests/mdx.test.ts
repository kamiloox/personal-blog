import { getMdxSource } from '../lib/mdx';
import path from 'path';

const getArticlePath = (name: string) => {
  return path.join(process.cwd(), 'tests', 'articles', name);
};

test('reads successfully frontmatter data', async () => {
  const { meta } = await getMdxSource(getArticlePath('valid.mdx'));

  expect(meta.category).toBe('typescript');
  expect(meta.title).toEqual(expect.any(String));
  expect(meta.excerpt).toEqual(expect.any(String));
  expect(meta.date).toEqual(expect.any(String));
  expect(meta.slug).toEqual(expect.any(String));
});

test('reads article with invalid category', async () => {
  const articlePath = getArticlePath('invalid-category.mdx');
  try {
    await getMdxSource(articlePath);
  } catch (err) {
    expect(err).toBeInstanceOf(Error);
  }
});
