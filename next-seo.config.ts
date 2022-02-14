import type { DefaultSeoProps } from 'next-seo';
import { DOMAIN_NAME, FULL_ADDRESS } from './utils/constants';

const title = DOMAIN_NAME;
const description = 'Frontendowy blog głównie o tematyce Typescript i ReactJS';

export const SEO: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: FULL_ADDRESS,
    site_name: DOMAIN_NAME,
    title,
    description,
    images: [
      {
        url: `${FULL_ADDRESS}/images/og-hero.jpg`,
        alt: title,
        height: 628,
        width: 1200,
      },
    ],
  },
};
