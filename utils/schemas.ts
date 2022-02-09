import { z, Schema } from 'zod';
import { ArticleMeta, Category } from '../types/types';

export const articleMetaSchema: Schema<ArticleMeta> = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  slug: z.string(),
  published: z.boolean(),
  category: z.nativeEnum(Category),
});
