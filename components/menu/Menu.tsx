import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Hamburger } from '../hamburger/Hamburger';
import { ThemeToggle } from '../themeToggle/ThemeToggle';
import { Socials } from '../socials/Socials';
import { useMediaQuery } from '../shared/hooks/useMediaQuery';
import { menuVariantsDesktop, menuVariantsTablet, backdropVariants } from './utils/motionVariants';
import { Breakpoint } from '../../types/types';
import { routes } from '../../utils/routes';
import styles from './Menu.module.scss';

export const Menu = () => {
  const [isVisibleOnTablet, setIsVisibleOnTablet] = useState(false);
  const { matches: isTablet, isLoading } = useMediaQuery(Breakpoint.Tablet);
  const navWrapperRef = useRef<HTMLElement>(null);

  const handleToggleOnMobile = () => {
    setIsVisibleOnTablet(!isVisibleOnTablet);
  };

  const closeMenu = useCallback(() => {
    if (!isTablet && isVisibleOnTablet) {
      setIsVisibleOnTablet(false);
    }
  }, [isTablet, isVisibleOnTablet]);

  useEffect(() => {
    closeMenu();
  }, [closeMenu]);

  if (isLoading) {
    return null;
  }

  const animate = isTablet && isVisibleOnTablet ? 'opened' : 'closed';

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
        animate={animate}
        variants={isTablet ? menuVariantsTablet : menuVariantsDesktop}
        initial={false}
        id="menu"
      >
        <div className={styles.toggleWithSocials}>
          <ThemeToggle />
          <Socials />
        </div>
        <nav ref={navWrapperRef}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href={routes.home}>
                <a
                  className={styles.link}
                  onClick={closeMenu}
                  onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
                  role="link"
                  tabIndex={0}
                >
                  strona główna
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href={routes.about}>
                <a
                  className={styles.link}
                  onClick={closeMenu}
                  onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
                  role="link"
                  tabIndex={0}
                >
                  o mnie
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};
