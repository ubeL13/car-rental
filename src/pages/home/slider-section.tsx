import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();

  const initialIndex = slides.findIndex(
    (s) => s.id === location.state?.slideId
  );
  const [activeIndex, setActiveIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const findIndex = (slideId?: string) => {
    const idx = slides.findIndex((s) => s.id === slideId);
    return idx >= 0 ? idx : 0;
  };

  const [lastKey, setLastKey] = useState(location.key);

  if (location.key != lastKey) {
    setLastKey(location.key);
    const slideId = location.state?.slideId;
    if (slideId) setActiveIndex(findIndex(slideId));
  }

  const menuItems = slides.map((slide, index) => ({
    label: slide.title,
    active: index === activeIndex,
    onClick: () => {
      navigate('/', { state: { slideId: slide.id } });
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
