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
  return (
    <a
      href={href}
      className={classNames(styles.link, styles[variant], {
        [styles.disabled]: disabled,
      })}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}>
      {label}
    </a>
  );
};
export default Link;
