import type { Category as CategoryType } from '../../types/types';
import { icons } from './utils/icons';
import styles from './Category.module.scss';

interface CategoryProps {
  category: CategoryType;
  reversed?: boolean;
}

export const Category = ({ category, reversed = false }: CategoryProps) => {
  const CategoryIcon = icons[category];

  return (
    <div className={`${styles.wrapper} ${reversed ? styles.reversed : ''}`}>
      <span className={styles.categoryName}>{category}</span>
      <CategoryIcon className={styles.icon} size={24} />
    </div>
  );
};
