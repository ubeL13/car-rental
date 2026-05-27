import { useState, useEffect, useRef } from 'react';

import closeIcon from '@assets/icons/close-icon.png';
import classNames from 'classnames';

import styles from './autocomplete.module.css';

interface AutocompleteProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  disabled?: boolean;
}

const Autocomplete = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled,
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().startsWith(value.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const showDropdown = isOpen && value.length > 0 && filteredOptions.length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={classNames(styles.wrapper, {
        [styles.disabled]: disabled,
      })}>
      <span className={styles.label}>{label}</span>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
        />
        {value && !disabled && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}>
            <img src={closeIcon} alt="" />
          </button>
        )}
        {showDropdown && (
          <ul className={styles.dropdown}>
            {filteredOptions.map((option) => (
              <li
                key={option}
                className={styles.option}
                onClick={() => handleSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
