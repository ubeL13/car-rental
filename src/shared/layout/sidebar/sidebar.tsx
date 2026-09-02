import MenuIcon from '@assets/icons/menu-btn.svg?react';
import { Button, ChangeLanguage } from '@shared/ui-kit';

import styles from './sidebar.module.css';

interface SidebarProps {
  onOpenMenu: () => void;
  language: 'RU' | 'ENG';
  onToggleLanguage: () => void;
}

const Sidebar = ({ onOpenMenu, language, onToggleLanguage }: SidebarProps) => {
  return (
    <>
      <aside className={styles.sidebar}>
        <Button
          icon={MenuIcon}
          variant="ghost"
          size="icon"
          className={styles.burger}
          aria-label="Открыть меню"
          onClick={onOpenMenu}
        />
        <ChangeLanguage
          label={language === 'RU' ? 'ENG' : 'RU'}
          onClick={onToggleLanguage}
        />
      </aside>
      <header className={styles.mobileSidebar}>
        <Button
          icon={MenuIcon}
          variant="ghost"
          size="icon"
          className={styles.burger}
          aria-label="Открыть меню"
          onClick={onOpenMenu}
        />
      </header>
    </>
  );
};

export default Sidebar;
export type { SidebarProps };
