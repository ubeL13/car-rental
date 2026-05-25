import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import PrimaryComponent from './primary-component';

const meta = {
  title: 'UI-kit/PrimaryComponent',
  component: PrimaryComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Забронировать',
  },
};
