import styles from './link.module.css';

type LinkVariant = 'onLight' | 'onDark' | 'onDarkAlt';

interface LinkProps {
  label: string;
  href: string;
  variant?: LinkVariant;
  disabled?: boolean;
  onClick?: () => void;
}

const Link = ({
  label,
  href,
  variant = 'onLight',
  disabled,
  onClick,
}: LinkProps) => {
  return (
    <a
      href={href}
      className={`${styles.link} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}>
      {label}
    </a>
  );
};
export default Link;
