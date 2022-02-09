import { Variants } from 'framer-motion';

export const menuVariants: Variants = {
  opened: {
    translateX: '0%',
  },
  closed: {
    translateX: '-100%',
  },
};

export const backdropVariants: Variants = {
  opened: {
    opacity: 1,
    display: 'block',
  },
  closed: {
    opacity: 0,
    display: 'none',
  },
};
