import { useState } from 'react';

import FacebookIcon from '@assets/icons/facebook.svg?react';
import InstagramIcon from '@assets/icons/instagram.svg?react';
import TelegramIcon from '@assets/icons/telegram.svg?react';
import fuelImage from '@assets/images/fuel.png';
import insuranceImage from '@assets/images/insurance.png';
import parkingImage from '@assets/images/parking.png';
import serviceImage from '@assets/images/service.png';
import { BurgerMenu } from '@shared/ui-kit';
import type { SlideData } from '@shared/ui-kit/slider/slider';
import Slider from '@shared/ui-kit/slider/slider';

import styles from './home.module.css';

const socialLinks = [
  { url: '#', icon: TelegramIcon, label: 'Telegram' },
  { url: '#', icon: FacebookIcon, label: 'Facebook' },
  { url: '#', icon: InstagramIcon, label: 'Instagram' },
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

interface SliderSectionProps {
  isMenuOpen: boolean;
  onCloseMenu: () => void;
  timeSwitch?: number;
}

const SliderSection = ({
  isMenuOpen,
  onCloseMenu,
  timeSwitch,
}: SliderSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = slides.map((slide, index) => ({
    label: slide.title,
    active: activeIndex === index,
    onClick: () => {
      setActiveIndex(index);
      onCloseMenu();
    },
  }));

  return (
    <>
      <aside className={styles.media}>
        <Slider
          slides={slides}
          activeIndex={activeIndex}
          onSlideChange={setActiveIndex}
          timeSwitch={timeSwitch}
        />
      </aside>

      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={onCloseMenu}
        items={menuItems}
        socialLinks={socialLinks}
      />
    </>
  );
};

export default SliderSection;
