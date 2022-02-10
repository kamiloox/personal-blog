import styles from './Hamburger.module.scss';
import { WIDTH, HEIGHT } from './utils/constants';
import { Line } from './line/Line';

interface HamburgerProps {
  isActive: boolean;
  onClick: () => void;
  menuId: string;
}

export const Hamburger = ({ isActive, onClick, menuId }: HamburgerProps) => (
  <button
    onClick={onClick}
    className={styles.wrapper}
    aria-haspopup="true"
    aria-expanded={isActive}
    aria-controls={menuId}
  >
    <svg width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} overflow="visible">
      <Line variant="top" isActive={isActive} />
      <Line variant="middle" isActive={isActive} />
      <Line variant="bottom" isActive={isActive} />
    </svg>
    <span className={styles.name}>menu</span>
  </button>
);
