import { Variants } from 'framer-motion';
import { LineVariant } from '../types/types';
import { BOTTOM, CENTER, TOP } from './constants';

export const lineVariants: Record<LineVariant, Variants> = {
  top: {
    opened: {
      y: CENTER,
      rotate: -45,
    },
    closed: {
      y: TOP,
      rotate: 0,
    },
  },
  middle: {
    opened: {
      y: CENTER,
      opacity: 0,
      transition: { duration: 0.15 },
    },
    closed: {
      y: CENTER,
      opacity: 1,
      transition: { duration: 0.15 },
    },
  },
  bottom: {
    opened: {
      y: CENTER,
      rotate: 45,
    },
    closed: {
      y: BOTTOM,
      rotate: 0,
    },
  },
};

export const getAnimateProp = (isActive: boolean) => {
  return isActive ? 'opened' : 'closed';
};
