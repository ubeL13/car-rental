import MenuIcon from '@assets/icons/menu-btn.svg?react';

import styles from './burger-button.module.css';

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <MenuIcon className={styles.icon} />
    </button>
  );
};

export default BurgerButton;
