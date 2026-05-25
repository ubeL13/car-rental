import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Component from './primary-component';

const meta = {
  title: 'UI-kit/Component',
  component: Component,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Забронировать',
  },
};
