import { Button } from '@shared/ui-kit';

import styles from './change-language.module.css';

interface ChangeLanguageProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ChangeLanguage = ({ label, onClick, disabled }: ChangeLanguageProps) => (
  <Button
    label={label}
    variant="ghost"
    size="icon"
    className={styles.button}
    state={disabled ? 'disabled' : 'default'}
    onClick={onClick}
  />
);

export default ChangeLanguage;
