export const routes = {
  github: 'https://github.com/kamiloox',
  linkedin: 'https://www.linkedin.com/in/kamiloox/',
  home: '/',
  about: '/about',
  article: (slug: string) => {
    return `/articles/${slug}`;
  },
} as const;
