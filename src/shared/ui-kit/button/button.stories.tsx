import MenuIcon from '@assets/icons/menu-btn.svg?react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Button from './button';

const meta = {
  title: 'UI-kit/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    label: 'Ок',
  },
};

export const Hover: Story = {
  render: (args) => (
    <div className="hover-wrapper">
      <Button {...args} />
    </div>
  ),
  parameters: { pseudo: { hover: '.hover-wrapper > *' } },
  args: {
    state: 'default',
    label: 'Ок',
  },
};

export const Focused: Story = {
  render: (args) => (
    <div className="focus-wrapper">
      <Button {...args} />
    </div>
  ),
  parameters: { pseudo: { focus: '.focus-wrapper > *' } },
  args: {
    state: 'default',
    label: 'Ок',
  },
};

export const Selected: Story = {
  render: (args) => (
    <div className="active-wrapper">
      <Button {...args} />
    </div>
  ),
  parameters: { pseudo: { active: '.active-wrapper > *' } },
  args: {
    state: 'default',
    label: 'Ок',
  },
};

export const Loading: Story = {
  args: {
    state: 'loading',
    label: 'Ок',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    label: 'Ок',
  },
};

export const IconGhost: Story = {
  args: {
    icon: MenuIcon,
    variant: 'ghost',
    size: 'icon',
    'aria-label': 'Меню',
  },
  parameters: { backgrounds: { default: 'dark' } },
};
