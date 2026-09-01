import type { FC, SVGProps } from 'react';

import classNames from 'classnames';

import styles from './button.module.css';

type ButtonState = 'default' | 'loading' | 'disabled';
type ButtonVariant = 'green' | 'blue' | 'red' | 'purple' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large' | 'icon';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  label?: string;
  state?: ButtonState;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: FC<SVGProps<SVGSVGElement>>;
  'aria-label'?: string;
  className?: string;
  onClick?: () => void;
  type?: ButtonType;
}

const Button = ({
  label,
  state = 'default',
  variant = 'green',
  size = 'small',
  icon: Icon,
  'aria-label': ariaLabel,
  className,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const isDisabled = state === 'disabled' || state === 'loading';
  const isLoading = state === 'loading';
  const isDefault = state === 'default';

  return (
    <button
      aria-label={ariaLabel}
      className={classNames(
        styles.button,
        styles[variant],
        styles[size],
        {
          [styles.default]: isDefault,
          [styles.loading]: isLoading,
          [styles.disabled]: isDisabled,
        },
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
      type={type}>
      {isLoading ? (
        <div className={styles.loader} />
      ) : (
        <>
          {Icon && <Icon className={styles.glyph} />}
          {label}
        </>
      )}
    </button>
  );
};
export default Button;
export type { ButtonVariant };
