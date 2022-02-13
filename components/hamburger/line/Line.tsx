import { motion } from 'framer-motion';
import type { LineVariant } from '../types/types';
import { LINE_HEIGHT, WIDTH } from '../utils/constants';
import { lineVariants, getAnimateProp, linePosY } from '../utils/lineVariants';
import styles from './Line.module.scss';

interface LineProps {
  variant: LineVariant;
  isActive: boolean;
}

export const Line = ({ variant, isActive }: LineProps) => {
  const animate = getAnimateProp(isActive);

  return (
    <motion.rect
      variants={lineVariants[variant]}
      width={WIDTH}
      height={LINE_HEIGHT}
      rx={LINE_HEIGHT / 2}
      y1={linePosY[variant]}
      y2={linePosY[variant] + LINE_HEIGHT}
      className={styles.line}
      animate={animate}
      initial={false}
    />
  );
};
