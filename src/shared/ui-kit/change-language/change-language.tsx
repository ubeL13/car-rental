import styles from './change-language.module.css';

type Language = 'RU' | 'ENG';

interface ChangeLanguageProps {
  language: Language;
  onClick?: () => void;
}

const ChangeLanguage = ({ language, onClick }: ChangeLanguageProps) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {language}
    </button>
  );
};

export default ChangeLanguage;
