import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import BurgerButton from './burger-button';

const meta = {
  title: 'ui-kit/BurgerButton',
  component: BurgerButton,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof BurgerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const BackgroundDark: Decorator = (Story) => (
  <div
    style={{
      backgroundColor: 'var(--color-primary-black)',
      width: '64px',
      height: '810px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '32px',
      boxSizing: 'border-box',
    }}>
    <Story />
  </div>
);

export const Default: Story = {
  decorators: [BackgroundDark],
};
