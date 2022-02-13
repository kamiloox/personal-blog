import { ReactNode } from 'react';
import styles from './Heading.module.scss';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  type: HeadingType;
  children: ReactNode;
}

const Heading = ({ type, children }: HeadingProps) => {
  const HeadingComponent = type;

  return <HeadingComponent className={styles.heading}>{children}</HeadingComponent>;
};

const HeadingObject: Record<HeadingType, ({ children }: { children: ReactNode }) => JSX.Element> = {
  h1: ({ children }) => <Heading type="h1">{children}</Heading>,
  h2: ({ children }) => <Heading type="h2">{children}</Heading>,
  h3: ({ children }) => <Heading type="h3">{children}</Heading>,
  h4: ({ children }) => <Heading type="h4">{children}</Heading>,
  h5: ({ children }) => <Heading type="h5">{children}</Heading>,
  h6: ({ children }) => <Heading type="h6">{children}</Heading>,
} as const;

export { HeadingObject as Heading };
