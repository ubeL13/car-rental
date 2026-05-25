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
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default ChangeLanguage;
