import classNames from 'classnames';

import styles from './change-language.module.css';

interface ChangeLanguageProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ChangeLanguage = ({ label, onClick, disabled }: ChangeLanguageProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default ChangeLanguage;
