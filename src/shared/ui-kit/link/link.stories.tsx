import { MemoryRouter } from 'react-router-dom';

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Link from './link';

const WithRouter: Decorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

const meta = {
  title: 'UI-kit/Link',
  component: Link,
  tags: ['autodocs'],
  decorators: [WithRouter],
  args: { onClick: fn() },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

const BackgroundDark: Decorator = (Story) => (
  <div
    style={{ backgroundColor: 'var(--color-primary-black)', padding: '10px' }}>
    <Story />
  </div>
);

export const OnLight: Story = {
  args: {
    variant: 'onLight',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const OnLightHover: Story = {
  parameters: { pseudo: { hover: true } },
  args: {
    variant: 'onLight',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const OnLightSelected: Story = {
  parameters: { pseudo: { active: true } },
  args: {
    variant: 'onLight',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const OnDark: Story = {
  decorators: [BackgroundDark],
  args: {
    variant: 'onDark',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const OnDarkHover: Story = {
  decorators: [BackgroundDark],
  parameters: { pseudo: { hover: true } },
  args: {
    variant: 'onDark',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const OnDarkSelected: Story = {
  decorators: [BackgroundDark],
  parameters: { pseudo: { active: true } },
  args: {
    variant: 'onDark',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const OnDarkAlt: Story = {
  decorators: [BackgroundDark],
  args: {
    variant: 'onDarkAlt',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const OnDarkAltHover: Story = {
  decorators: [BackgroundDark],
  parameters: { pseudo: { hover: true } },
  args: {
    variant: 'onDarkAlt',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const OnDarkAltSelected: Story = {
  decorators: [BackgroundDark],
  parameters: { pseudo: { active: true } },
  args: {
    variant: 'onDarkAlt',
    label: '8 (495) 234-22-44',
    href: '#',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'onLight',
    label: '8 (495) 234-22-44',
    href: '#',
    disabled: true,
  },
};
