import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const { theme: selectedTheme, setTheme, systemTheme } = useTheme();

  const isSystemThemeDark = systemTheme === 'dark' && selectedTheme === 'system';
  const isDark = selectedTheme === 'dark' || isSystemThemeDark;

  const handleThemeChange = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id="theme-toggle"
        className={styles.input}
        onChange={handleThemeChange}
        checked={isDark}
      />
      <label htmlFor="theme-toggle" className={styles.toggle}>
        <FiMoon size={24} />
        <FiSun size={24} />
        <span className={styles.labelText}>Przełącz motyw na {isDark ? 'jasny' : 'ciemny'}</span>
        <span className={styles.indicator} />
      </label>
    </div>
  );
};
