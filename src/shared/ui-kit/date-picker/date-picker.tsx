import { forwardRef } from 'react';

import CloseIcon from '@assets/icons/close-icon.svg?react';
import classNames from 'classnames';
import { ru } from 'date-fns/locale/ru';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './date-picker.module.css';

registerLocale('ru', ru);

interface DatePickerProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  error?: string;
  onBlur?: () => void;
}

interface FieldProps {
  value?: string;
  onClick?: () => void;
  onClear: () => void;
  placeholder?: string;
  disabled?: boolean;
}

const CustomField = forwardRef<HTMLInputElement, FieldProps>(
  ({ value, onClick, onClear, placeholder, disabled }, ref) => (
    <div className={styles.inputWrapper}>
      <input
        ref={ref}
        type="text"
        className={styles.input}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        disabled={disabled}
        readOnly
      />
      {value && !disabled && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}>
          <CloseIcon className={styles.closeIcon} />
        </button>
      )}
    </div>
  )
);

const DatePicker = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  minDate,
  error,
  onBlur,
}: DatePickerProps) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.disabled]: disabled,
        [styles.invalid]: Boolean(error),
      })}>
      <div className={styles.row}>
        <span className={styles.label}>{label}</span>
        <ReactDatePicker
          selected={value}
          onChange={onChange}
          onCalendarClose={onBlur}
          disabled={disabled}
          minDate={minDate}
          locale="ru"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Время"
          dateFormat="dd.MM.yyyy HH:mm"
          customInput={
            <CustomField
              onClear={() => onChange(null)}
              placeholder={placeholder}
            />
          }
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default DatePicker;
export type { DatePickerProps };
