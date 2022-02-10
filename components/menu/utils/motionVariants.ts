import { Variants } from 'framer-motion';

export const menuVariantsDesktop: Variants = {
  closed: {
    translateX: '0%',
    transition: {
      duration: 0,
    },
  },
};

export const menuVariantsTablet: Variants = {
  opened: {
    translateX: '0%',
  },
  closed: {
    translateX: '100%',
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
