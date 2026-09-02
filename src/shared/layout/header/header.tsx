import LocationIcon from '@assets/icons/location.svg?react';

import styles from './header.module.css';

interface HeaderProps {
  city?: string;
}

const Header = ({ city = 'Ульяновск' }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Need for drive</span>
      <div className={styles.location}>
        <LocationIcon className={styles.locationIcon} />
        <span className={styles.titleLocation}>{city}</span>
      </div>
    </header>
  );
};

export default Header;
export type { HeaderProps };
