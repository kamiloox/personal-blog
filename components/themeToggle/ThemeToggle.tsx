import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useMounted } from '../shared/hooks/useMounted';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useMounted();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id="theme-toggle"
        className={styles.input}
        onChange={isMounted ? handleThemeChange : () => {}}
        checked={theme === 'dark'}
      />
      <label htmlFor="theme-toggle" className={styles.toggle}>
        <FiMoon size={24} />
        <FiSun size={24} />
        <span className={styles.indicator} />
      </label>
    </div>
  );
};
