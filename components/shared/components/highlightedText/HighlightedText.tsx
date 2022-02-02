import styles from './HighlightedText.module.scss';

interface HighlightedTextProps {
  children: string;
  variant: 'primary' | 'secondary';
}

export const HighlightedText = ({ children, variant }: HighlightedTextProps) => (
  <span className={`${styles.text} ${styles[variant]}`}>{children}</span>
);
