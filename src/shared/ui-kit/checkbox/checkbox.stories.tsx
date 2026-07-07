import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'storybook/internal/preview-api';
import { fn } from 'storybook/test';

import Checkbox from './checkbox';

const meta = {
  title: 'UI-kit/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
        label="Полный бак"
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: { checked: false, label: 'Полный бак' },
};

export const Checked: Story = {
  args: { checked: true, label: 'Полный бак' },
};

export const Disabled: Story = {
  args: { checked: false, disabled: true, label: 'Полный бак' },
};
