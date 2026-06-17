import type { FC, SVGProps } from 'react';

import CloseIcon from '@assets/icons/close-menu.svg?react';
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
  icon: FC<SVGProps<SVGSVGElement>>;
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
      <nav className={styles.menu}>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          <CloseIcon className={styles.closeIcon} />
        </button>
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
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.url} aria-label={link.label}>
                  <Icon />
                </a>
              );
            })}
          </div>
        )}
      </nav>
      <div className={styles.backdrop} />
    </div>
  );
};

export default BurgerMenu;
