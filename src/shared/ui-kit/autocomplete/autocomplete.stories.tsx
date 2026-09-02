import { useState } from 'react';

import { cities } from '@shared/config/cities';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Autocomplete from './autocomplete';

const meta = {
  title: 'UI-kit/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: React.ComponentProps<typeof Autocomplete>) => {
  const [value, setValue] = useState(args.value);
  return <Autocomplete {...args} value={value} onChange={setValue} />;
};
const cityOptions = cities.map((c) => ({ id: c.id, label: c.name }));

export const Filled: Story = {
  render: Template,
  args: {
    label: 'Город',
    placeholder: 'Начните вводить пункт ...',
    value: 'Ульяновск',
    options: cityOptions,
    onChange: () => {},
  },
};

export const Empty: Story = {
  render: Template,
  args: {
    label: 'Город',
    placeholder: 'Начните вводить пункт ...',
    value: '',
    options: cityOptions,
    onChange: () => {},
  },
};

export const Typing: Story = {
  render: Template,
  args: {
    label: 'Город',
    placeholder: 'Начните вводить пункт ...',
    value: 'У',
    options: cityOptions,
    onChange: () => {},
  },
};
