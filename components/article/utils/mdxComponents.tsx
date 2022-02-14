import { MDXRemoteProps } from 'next-mdx-remote';
import { Callout } from '../../shared/components/callout/Callout';
import { Heading } from '../../shared/components/heading/Heading';
import { Typography } from '../../shared/components/typography/Typography';

export const mdxComponents: MDXRemoteProps['components'] = {
  p: ({ children }) => <Typography>{children}</Typography>,
  h1: ({ children }) => <Heading.h1>{children}</Heading.h1>,
  h2: ({ children }) => <Heading.h2>{children}</Heading.h2>,
  h3: ({ children }) => <Heading.h3>{children}</Heading.h3>,
  h4: ({ children }) => <Heading.h4>{children}</Heading.h4>,
  h5: ({ children }) => <Heading.h5>{children}</Heading.h5>,
  h6: ({ children }) => <Heading.h6>{children}</Heading.h6>,
  Callout,
};
