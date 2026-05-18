import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Button from './button';

const meta = {
  title: 'UI-kit/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    label: 'Button',
  },
};

export const Primary: Story = {
  render: (args) => (
    <div className="hover-wrapper">
      <Button {...args} />
    </div>
  ),
  parameters: { pseudo: { hover: '.hover-wrapper > *' } },
  args: {
    state: 'default',
    label: 'Button',
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
    label: 'Button',
  },
};

export const Selected: Story = {
  render: (args) => (
    <div className="hover-wrapper">
      <Button {...args} />
    </div>
  ),
  parameters: { pseudo: { hover: '.hover-wrapper > *' } },
  args: {
    state: 'default',
    label: 'Button',
  },
};

export const Loading: Story = {
  args: {
    state: 'loading',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    label: 'Button',
  },
};
