import { MDXRemoteProps } from 'next-mdx-remote';
import Image from 'next/image';
import { Callout } from '../../shared/components/callout/Callout';
import { Heading } from '../../shared/components/heading/Heading';
import { List } from '../../shared/components/list/List';
import { ListItem } from '../../shared/components/listItem/ListItem';
import { Typography } from '../../shared/components/typography/Typography';

export const mdxComponents: MDXRemoteProps['components'] = {
  p: ({ children }) => <Typography>{children}</Typography>,
  h1: ({ children }) => <Heading.h1>{children}</Heading.h1>,
  h2: ({ children }) => <Heading.h2>{children}</Heading.h2>,
  h3: ({ children }) => <Heading.h3>{children}</Heading.h3>,
  h4: ({ children }) => <Heading.h4>{children}</Heading.h4>,
  h5: ({ children }) => <Heading.h5>{children}</Heading.h5>,
  h6: ({ children }) => <Heading.h6>{children}</Heading.h6>,
  ol: ({ children }) => <List variant="ol">{children}</List>,
  ul: ({ children }) => <List variant="ul">{children}</List>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  Image,
  Callout,
};
