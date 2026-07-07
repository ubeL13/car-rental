import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import DatePicker from './date-picker';

const meta = {
  title: 'UI-kit/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: React.ComponentProps<typeof DatePicker>) => {
  const [value, setValue] = useState<Date | null>(args.value);
  return <DatePicker {...args} value={value} onChange={setValue} />;
};

export const Empty: Story = {
  render: Template,
  args: {
    label: 'С',
    placeholder: 'Введите дату и время',
    value: null,
    onChange: () => {},
  },
};

export const Filled: Story = {
  render: Template,
  args: {
    label: 'С',
    placeholder: 'Введите дату и время',
    value: new Date(2019, 5, 12, 12, 0),
    onChange: () => {},
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    label: 'По',
    placeholder: 'Введите дату и время',
    value: null,
    disabled: true,
    onChange: () => {},
  },
};
