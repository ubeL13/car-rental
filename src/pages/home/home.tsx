import { useState } from 'react';

import facebookIcon from '@assets/icons/facebook.png';
import instagramIcon from '@assets/icons/instagram.png';
import locationIcon from '@assets/icons/location.png';
import telegramIcon from '@assets/icons/telegram.png';
import carImage from '@assets/images/background-parking.png';
import {
  BurgerButton,
  BurgerMenu,
  ChangeLanguage,
  Button,
  Link,
} from '@shared/ui-kit';

import styles from './home.module.css';

const socialLinks = [
  { url: '#', icon: telegramIcon, label: 'Telegram' },
  { url: '#', icon: facebookIcon, label: 'Facebook' },
  { url: '#', icon: instagramIcon, label: 'Instagram' },
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'RU' | 'ENG'>('RU');
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    {
      label: 'Парковка',
      active: activeSection === 'Парковка',
      onClick: () => setActiveSection('Парковка'),
    },
    {
      label: 'Страховка',
      active: activeSection === 'Страховка',
      onClick: () => setActiveSection('Страховка'),
    },
    {
      label: 'Бензин',
      active: activeSection === 'Бензин',
      onClick: () => setActiveSection('Бензин'),
    },
    {
      label: 'Обслуживание',
      active: activeSection === 'Обслуживание',
      onClick: () => setActiveSection('Обслуживание'),
    },
  ];

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <BurgerButton onClick={() => setIsMenuOpen(true)} />
        <ChangeLanguage
          label={language === 'RU' ? 'ENG' : 'RU'}
          onClick={() => setLanguage(language === 'RU' ? 'ENG' : 'RU')}
        />
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.logo}>Need for drive</span>
          <div className={styles.location}>
            <img src={locationIcon} alt="" />
            <span className={styles.titleLocation}>Ульяновск</span>
          </div>
        </header>

        <section className={styles.hero}>
          <h1 className={styles.title}>
            Каршеринг
            <br />
            <span className={styles.titleAccent}>Need for drive</span>
          </h1>
          <p className={styles.subtitle}>
            Поминутная аренда авто твоего города
          </p>
          <div className={styles.buttonwrapper}>
            <Button label="Забронировать" onClick={() => {}} />
          </div>
        </section>

        <footer className={styles.footer}>
          <span>© 2016-2019 «Need for drive»</span>
          <Link
            label="8 (495) 234-22-44"
            href="tel:84952342244"
            variant="onLight"
          />
        </footer>
      </main>

      <aside className={styles.media}>
        <img src={carImage} alt="" className={styles.carImage} />
      </aside>

      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={menuItems}
        socialLinks={socialLinks}
      />
    </div>
  );
};

export default Home;
