import classNames from 'classnames';

import styles from './radio-button.module.css';

interface RadioButton {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioButtonProps {
  name: string;
  value: string;
  options: RadioButton[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const RadioButton = ({
  name,
  value,
  options,
  onChange,
  disabled = false,
  className,
}: RadioButtonProps) => {
  return (
    <div className={classNames(styles.group, className)} role="radiogroup">
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
              className={styles.input}
            />
            <span className={styles.circle} />
            <span className={styles.label}>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioButton;
export type { RadioButtonProps, RadioButton };
