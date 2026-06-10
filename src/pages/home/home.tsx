import { useState } from 'react';

import facebookIcon from '@assets/icons/facebook.png';
import instagramIcon from '@assets/icons/instagram.png';
import locationIcon from '@assets/icons/location.png';
import telegramIcon from '@assets/icons/telegram.png';
import fuelImage from '@assets/images/fuel.svg';
import insuranceImage from '@assets/images/insurance.svg';
import parkingImage from '@assets/images/parking.svg';
import serviceImage from '@assets/images/service.svg';
import {
  BurgerButton,
  BurgerMenu,
  ChangeLanguage,
  Button,
  Link,
} from '@shared/ui-kit';
import type { SlideData } from '@shared/ui-kit/slider/slider';
import Slider from '@shared/ui-kit/slider/slider';

import styles from './home.module.css';

const socialLinks = [
  { url: '#', icon: telegramIcon, label: 'Telegram' },
  { url: '#', icon: facebookIcon, label: 'Facebook' },
  { url: '#', icon: instagramIcon, label: 'Instagram' },
];

const slides: SlideData[] = [
  {
    id: 'parking',
    title: 'Бесплатная парковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешённых местах, не нарушая ПДД, а также в аэропортах.',
    image: parkingImage,
    buttonLabel: 'Подробнее',
    buttonVariant: 'green',
  },
  {
    id: 'insurance',
    title: 'Страховка',
    description: 'Полная страховка страховка автомобиля.',
    image: insuranceImage,
    buttonLabel: 'Подробнее',
    buttonVariant: 'blue',
  },
  {
    id: 'fuel',
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт.',
    image: fuelImage,
    buttonLabel: 'Подробнее',
    buttonVariant: 'red',
  },
  {
    id: 'service',
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО.',
    image: serviceImage,
    buttonLabel: 'Подробнее',
    buttonVariant: 'purple',
  },
];
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'RU' | 'ENG'>('RU');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const menuItems = slides.map((slide, index) => ({
    label: slide.title,
    active: activeSlideIndex === index,
    onClick: () => {
      setActiveSlideIndex(index);
      setIsMenuOpen(false);
    },
  }));

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <BurgerButton onClick={() => setIsMenuOpen(true)} />
        <ChangeLanguage
          label={language === 'RU' ? 'ENG' : 'RU'}
          onClick={() => setLanguage(language === 'RU' ? 'ENG' : 'RU')}
        />
      </aside>

      <header className={styles.mobileSidebar}>
        <BurgerButton onClick={() => setIsMenuOpen(true)} />
      </header>

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

      <aside className={styles.media}>
        <Slider
          slides={slides}
          activeIndex={activeSlideIndex}
          onSlideChange={setActiveSlideIndex}
        />
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
