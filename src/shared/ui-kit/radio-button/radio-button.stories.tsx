import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'storybook/internal/preview-api';
import { fn } from 'storybook/test';

import RadioButton from './radio-button';

const options = [
  { value: 'minute', label: 'Поминутно, 7₽/мин' },
  { value: 'daily', label: 'На сутки, 1999 ₽/сутки' },
];

const meta = {
  title: 'UI-kit/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  args: { name: 'tariff', value: 'daily', options, onChange: fn() },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState('daily');
    return (
      <RadioButton
        {...args}
        name="tariff-interactive"
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Default: Story = {
  args: { value: 'daily', name: 'tariff-default' },
};

export const Disabled: Story = {
  args: { value: 'daily', disabled: true },
};

export const WithDisabledOption: Story = {
  args: {
    value: 'daily',
    options: [
      { value: 'minute', label: 'Поминутно, 7₽/мин', disabled: true },
      { value: 'daily', label: 'На сутки, 1999 ₽/сутки' },
    ],
  },
};
