import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hamburger } from '../hamburger/Hamburger';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import { Socials } from '../socials/Socials';
import { useMediaQuery } from '../shared/hooks/useMediaQuery';
import { menuVariants, backdropVariants } from './utils/motionVariants';
import { Breakpoint } from '../../types/types';
import styles from './Menu.module.scss';
import Link from 'next/link';

export const Menu = () => {
  const [isVisibleOnTablet, setIsVisibleOnTablet] = useState(false);
  const { matches: isTablet, isLoading } = useMediaQuery(Breakpoint.Tablet);

  const handleToggleOnMobile = () => {
    setIsVisibleOnTablet(!isVisibleOnTablet);
  };

  if (isLoading) {
    return null;
  }

  const animate = isVisibleOnTablet ? 'opened' : 'closed';

  return (
    <div>
      <motion.div
        className={styles.backdrop}
        animate={animate}
        variants={backdropVariants}
        initial={false}
      />
      <div className={styles.hamburgerWrapper}>
        <Hamburger isActive={isVisibleOnTablet} onClick={handleToggleOnMobile} menuId="menu" />
      </div>
      <motion.div
        className={styles.allControls}
        animate={isTablet ? animate : { translateX: '0%' }}
        variants={menuVariants}
        initial={false}
        id="menu"
      >
        <div className={styles.toggleWithSocials}>
          <ThemeToggle />
          <Socials />
        </div>
        <nav>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/about">
                <a className={styles.link}>about me</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/articles">
                <a className={styles.link}>articles</a>
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};
