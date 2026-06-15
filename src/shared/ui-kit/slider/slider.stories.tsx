import { useState } from 'react';

import fuelImage from '@assets/images/fuel.png';
import insuranceImage from '@assets/images/insurance.png';
import parkingImage from '@assets/images/parking.png';
import serviceImage from '@assets/images/service.png';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Slider, { type SlideData } from './slider';

const meta = {
  title: 'UI-kit/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const slides: SlideData[] = [
  {
    id: 'parking',
    title: 'Бесплатная парковка',
    description: '...',
    image: parkingImage,
    buttonLabel: 'Подробнее',
    buttonVariant: 'green',
  },
  {
    id: 'insurance',
    title: 'Страховка',
    description: '...',
    image: insuranceImage,
    buttonLabel: 'Подробнее',
    buttonVariant: 'blue',
  },
  {
    id: 'fuel',
    title: 'Бензин',
    description: '...',
    image: fuelImage,
    buttonLabel: 'Подробнее',
    buttonVariant: 'red',
  },
  {
    id: 'service',
    title: 'Обслуживание',
    description: '...',
    image: serviceImage,
    buttonLabel: 'Подробнее',
    buttonVariant: 'purple',
  },
];

const Template = (args: React.ComponentProps<typeof Slider>) => {
  const [index, setIndex] = useState(args.activeIndex);
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <Slider {...args} activeIndex={index} onSlideChange={setIndex} />
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    slides,
    activeIndex: 0,
    onSlideChange: () => {},
  },
};
