import classNames from 'classnames';

import styles from './radio-button.module.css';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioButtonProps {
  name: string;
  value: string;
  options: RadioOption[];
  onChange?: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  className?: string;
  direction?: 'column' | 'row';
  error?: string;
}

const RadioButton = ({
  name,
  value,
  options,
  onChange,
  onBlur,
  disabled = false,
  className,
  direction = 'column',
  error,
}: RadioButtonProps) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div
        className={classNames(styles.group, {
          [styles.row]: direction === 'row',
        })}
        role="radiogroup">
        {options.map((option) => {
          const isDisabled = disabled || option.disabled;
          return (
            <label
              key={option.value}
              className={classNames(styles.radio, {
                [styles.disabled]: isDisabled,
              })}>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                disabled={isDisabled}
                onChange={() => onChange?.(option.value)}
                onBlur={onBlur}
                className={styles.input}
              />
              <span className={styles.circle} />
              <span className={styles.label}>{option.label}</span>
            </label>
          );
        })}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default RadioButton;
export type { RadioButtonProps, RadioOption };
