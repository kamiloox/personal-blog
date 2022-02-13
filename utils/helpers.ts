import { z } from 'zod';

export const parseParam = (param: string | string[]) => z.string().parse(param);
