import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Autocomplete from './autocomplete';
import { cities } from './data';

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

export const Filled: Story = {
  render: Template,
  args: {
    label: 'Город',
    placeholder: 'Начните вводить пункт ...',
    value: 'Ульяновск',
    options: cities,
    onChange: () => {},
  },
};

export const Empty: Story = {
  render: Template,
  args: {
    label: 'Город',
    placeholder: 'Начните вводить пункт ...',
    value: '',
    options: cities,
    onChange: () => {},
  },
};

export const Typing: Story = {
  render: Template,
  args: {
    label: 'Город',
    placeholder: 'Начните вводить пункт ...',
    value: 'У',
    options: cities,
    onChange: () => {},
  },
};
