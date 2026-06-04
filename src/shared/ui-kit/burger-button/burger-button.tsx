import burgerIcon from '@assets/icons/menu-btn.png';

import styles from './burger-button.module.css';

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <img src={burgerIcon} alt="" />
    </button>
  );
};

export default BurgerButton;
