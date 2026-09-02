import type { NavigateFunction } from 'react-router-dom';

import FacebookIcon from '@assets/icons/facebook.svg?react';
import InstagramIcon from '@assets/icons/instagram.svg?react';
import TelegramIcon from '@assets/icons/telegram.svg?react';
import fuelImage from '@assets/images/fuel.png';
import insuranceImage from '@assets/images/insurance.png';
import parkingImage from '@assets/images/parking.png';
import serviceImage from '@assets/images/service.png';
import type { SlideData } from '@shared/ui-kit/slider/slider';

export const socialLinks = [
  { url: '#', icon: TelegramIcon, label: 'Telegram' },
  { url: '#', icon: FacebookIcon, label: 'Facebook' },
  { url: '#', icon: InstagramIcon, label: 'Instagram' },
];

export const slides: SlideData[] = [
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

export const buildMenuItems = (
  navigate: NavigateFunction,
  onClose: () => void,
  activeSlideId?: string
) =>
  slides.map((slide) => ({
    label: slide.title,
    active: slide.id === activeSlideId,
    onClick: () => {
      navigate('/', { state: { slideId: slide.id } });
      onClose();
    },
  }));
