import { useState } from 'react';

// import LocationIcon from '@assets/icons/location.svg?react';
// import MenuIcon from '@assets/icons/menu-btn.svg?react';
// import ChangeLanguage from '@components/change-language';
import Header from '@shared/components/header/header';
import Sidebar from '@shared/components/sidebar/sidebar';
import { Button, Link } from '@shared/ui-kit';

import styles from './home.module.css';
import SliderSection from './slider-section';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'RU' | 'ENG'>('RU');

  return (
    <div className={styles.page}>
      <Sidebar
        onOpenMenu={() => setIsMenuOpen(true)}
        language={language}
        onToggleLanguage={() => setLanguage(language === 'RU' ? 'ENG' : 'RU')}
      />
      {/* 
      <header className={styles.mobileSidebar}>
        <Button
          icon={MenuIcon}
          variant="ghost"
          size="icon"
          className={styles.burger}
          aria-label="Открыть меню"
          onClick={() => setIsMenuOpen(true)}
        />
      </header> */}

      <main className={styles.main}>
        <Header />

        <section className={styles.hero}>
          <h1 className={styles.title}>
            Каршеринг
            <br />
            <span className={styles.titleAccent}>Need for drive</span>
          </h1>
          <p className={styles.subtitle}>
            Поминутная аренда авто твоего города
          </p>
          <div className={styles.buttonWrapper}>
            <Button label="Забронировать" size="medium" onClick={() => {}} />
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

      <SliderSection
        isMenuOpen={isMenuOpen}
        onCloseMenu={() => setIsMenuOpen(false)}
        timeSwitch={5000}
      />
    </div>
  );
};

export default Home;
