import CheckMark from '@assets/icons/check-mark.svg?react';
import classNames from 'classnames';

import styles from './checkbox.module.css';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  className?: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  name,
  className,
  onChange,
}: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange?.(event.target.checked);
  return (
    <label
      className={classNames(
        styles.checkbox,
        { [styles.disabled]: disabled },
        className
      )}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        className={styles.input}
      />
      <span className={styles.box}>
        <CheckMark className={styles.check} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
export type { CheckboxProps };
