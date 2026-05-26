import { Link as RouterLink } from 'react-router-dom';

import classNames from 'classnames';

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
  const isOnLight = variant === 'onLight';
  const isOnDark = variant === 'onDark';
  const isOnDarkAlt = variant === 'onDarkAlt';
  return (
    <RouterLink
      to={href}
      className={classNames(styles.link, {
        [styles.onLight]: isOnLight,
        [styles.onDark]: isOnDark,
        [styles.onDarkAlt]: isOnDarkAlt,
        [styles.disabled]: disabled,
      })}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}>
      {label}
    </RouterLink>
  );
};
export default Link;
