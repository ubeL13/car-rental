import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ChangeLanguage from './change-language';

const meta = {
  title: 'ui-kit/ChangeLanguage',
  component: ChangeLanguage,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ChangeLanguage>;

export default meta;
type Story = StoryObj<typeof meta>;

const BackgroundDark: Decorator = (Story) => (
  <div
    style={{
      backgroundColor: 'var(--color-primary-black)',
      width: '64px',
      height: '195px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: '31px',
      boxSizing: 'border-box',
    }}>
    <Story />
  </div>
);

export const RU: Story = {
  decorators: [BackgroundDark],
  args: {
    language: 'RU',
  },
};

export const RUHover: Story = {
  decorators: [BackgroundDark],
  parameters: { pseudo: { hover: true } },
  args: {
    language: 'RU',
  },
};

export const RUPressed: Story = {
  decorators: [BackgroundDark],
  parameters: { pseudo: { active: true } },
  args: {
    language: 'RU',
  },
};

export const ENG: Story = {
  decorators: [BackgroundDark],
  args: {
    language: 'ENG',
  },
};

export const ENGHover: Story = {
  decorators: [BackgroundDark],
  parameters: { pseudo: { hover: true } },
  args: {
    language: 'ENG',
  },
};

export const ENGPressed: Story = {
  decorators: [BackgroundDark],
  parameters: { pseudo: { active: true } },
  args: {
    language: 'ENG',
  },
};
