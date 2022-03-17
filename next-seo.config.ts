import type { DefaultSeoProps } from 'next-seo';
import { DOMAIN_NAME, FULL_ADDRESS } from './utils/constants';

const title = DOMAIN_NAME;
const description = 'Frontend blog mainly focused on Typescript and ReactJS.';

export const SEO: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en',
    url: FULL_ADDRESS,
    site_name: DOMAIN_NAME,
    title,
    description,
    images: [
      {
        url: `${FULL_ADDRESS}/images/og-hero.en.jpg`,
        alt: title,
        height: 630,
        width: 1200,
      },
    ],
  },
  additionalMetaTags: [{ name: 'og:locale:alternate', content: 'pl' }],
  twitter: {
    cardType: 'summary_large_image',
  },
};
