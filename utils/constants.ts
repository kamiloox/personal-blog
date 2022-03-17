import path from 'path';

export const DOMAIN_NAME = 'troczewski.dev';

export const FULL_ADDRESS = 'https://www.troczewski.dev';

export const MAIL = 'kamiltroczewski@gmail.com';

export const ARTICLES_DIR = path.join(process.cwd(), 'articles');

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
