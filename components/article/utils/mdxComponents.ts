import { ReactNode } from 'react';
import { Callout } from '../../shared/components/callout/Callout';
import { Typography } from '../../shared/components/typography/Typography';

export const mdxComponents: Record<string, ReactNode> = {
  p: Typography,
  Callout,
} as const;
