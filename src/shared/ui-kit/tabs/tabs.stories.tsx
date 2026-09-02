import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Tabs from './tabs';
import type { TabItem } from './tabs';

const items: TabItem[] = [
  { id: 'location', label: 'Местоположение' },
  { id: 'model', label: 'Модель' },
  { id: 'additionally', label: 'Дополнительно' },
  { id: 'total', label: 'Итого' },
];

const meta = {
  title: 'UI-kit/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: { items, activeId: 'location', onChange: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: (args) => {
    const [activeId, setActiveId] = useState(args.activeId);

    return <Tabs {...args} activeId={activeId} onChange={setActiveId} />;
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      { id: 'location', label: 'Местоположение' },
      { id: 'model', label: 'Модель' },
      { id: 'additionally', label: 'Дополнительно', disabled: true },
      { id: 'total', label: 'Итого', disabled: true },
    ],
    activeId: 'model',
  },
};
