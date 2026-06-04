import closeIcon from '@assets/icons/close-menu.png';
import classNames from 'classnames';

import styles from './burger-menu.module.css';

interface MenuItem {
  label: string;
  onClick: () => void;
  active?: boolean;
}

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  socialLinks?: SocialLinks[];
}

interface SocialLinks {
  icon: string;
  url: string;
  label: string;
}

const BurgerMenu = ({
  isOpen,
  onClose,
  items,
  socialLinks,
}: BurgerMenuProps) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <button type="button" className={styles.closeButton} onClick={onClose}>
        <img src={closeIcon} alt="" />
      </button>
      <nav className={styles.menu}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className={classNames(styles.item, {
                  [styles.active]: item.active,
                })}
                onClick={item.onClick}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {socialLinks && socialLinks.length > 0 && (
          <div className={styles.social}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} aria-label={link.label}>
                <img src={link.icon} alt="" />
              </a>
            ))}
          </div>
        )}
      </nav>
      <div className={styles.backdrop} />
    </div>
  );
};

export default BurgerMenu;
