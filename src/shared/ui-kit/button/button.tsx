import styles from './button.module.css';

type ButtonState = 'default' | 'loading' | 'disabled';

interface ButtonProps {
  label: string;
  state?: ButtonState;
  onClick?: () => void;
}

const Button = ({ label, state = 'default', onClick }: ButtonProps) => {
  const isDisabled = state === 'disabled' || state === 'loading';
  const isLoading = state === 'loading';

  return (
    <button
      className={`${styles.button} ${styles[state]}`}
      disabled={isDisabled}
      onClick={onClick}>
      {isLoading ? <div className={styles.loader} /> : label}
    </button>
  );
};
export default Button;
