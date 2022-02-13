import { ReactNode } from 'react';
import { Callout } from '../../shared/components/callout/Callout';
import { Heading } from '../../shared/components/heading/Heading';
import { Typography } from '../../shared/components/typography/Typography';

export const mdxComponents: Record<string, ReactNode> = {
  p: Typography,
  h1: Heading.h1,
  h2: Heading.h2,
  h3: Heading.h3,
  h4: Heading.h4,
  h5: Heading.h5,
  h6: Heading.h6,
  Callout,
} as const;
