import { useState, useEffect, useRef } from 'react';

import CloseIcon from '@assets/icons/close-icon.svg?react';
import classNames from 'classnames';

import styles from './autocomplete.module.css';

interface AutocompleteOption {
  id: string;
  label: string;
}

interface AutocompleteProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: AutocompleteOption[];
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
  const [query, setQuery] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((option) => option.id === value)?.label ?? '';

  const inputValue = isOpen ? query : selectedLabel;

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const showDropdown = isOpen && filteredOptions.length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSelect = (option: AutocompleteOption) => {
    onChange(option.id);
    setQuery('');
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setQuery('');
    setIsOpen(false);
  };

  const handleFocus = () => {
    setQuery('');
    setIsOpen(true);
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
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={disabled}
        />
        {value && !disabled && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        )}
        {showDropdown && (
          <ul className={styles.dropdown}>
            {filteredOptions.map((option) => (
              <li
                key={option.id}
                className={styles.option}
                onClick={() => handleSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
export type { AutocompleteOption };
