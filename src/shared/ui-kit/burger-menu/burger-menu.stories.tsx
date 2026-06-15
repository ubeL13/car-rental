import facebookIcon from '@assets/icons/facebook.svg?react';
import instagramIcon from '@assets/icons/instagram.svg?react';
import telegramIcon from '@assets/icons/telegram.svg?react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import BurgerMenu from './burger-menu';

const meta = {
  title: 'UI-kit/BurgerMenu',
  component: BurgerMenu,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof BurgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { label: 'Парковка', onClick: fn() },
  { label: 'Страховка', onClick: fn(), active: true },
  { label: 'Бензин', onClick: fn() },
  { label: 'Обслуживание', onClick: fn() },
];

const socialLinks = [
  { url: '#', icon: telegramIcon, label: 'Telegram' },
  { url: '#', icon: facebookIcon, label: 'Facebook' },
  { url: '#', icon: instagramIcon, label: 'Instagram' },
];

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    items,
    socialLinks,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: fn(),
    items,
    socialLinks,
  },
};
