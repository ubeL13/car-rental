import styles from './burger-button.module.css';

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <span className={styles.icon} />
    </button>
  );
};

export default BurgerButton;
