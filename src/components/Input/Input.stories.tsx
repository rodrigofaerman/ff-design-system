import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'John Doe',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'username',
    helperText: 'Choose a unique username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Invalid email address',
    defaultValue: 'invalid-email',
  },
};

export const Success: Story = {
  args: {
    label: 'Email',
    variant: 'success',
    defaultValue: 'user@example.com',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Website',
    placeholder: 'mysite.com',
    prefix: 'https://',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Domain',
    placeholder: 'mycompany',
    suffix: '.com',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    defaultValue: 'Search term',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '18',
    min: 0,
    max: 120,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input spans full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small size',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Input',
    placeholder: 'Medium size (default)',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large size',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input (default)" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <Input variant="default" label="Default" defaultValue="Default variant" />
      <Input variant="error" label="Error" defaultValue="Error variant" error="This is an error message" />
      <Input variant="success" label="Success" defaultValue="Success variant" />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Basic Inputs</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Text Input" placeholder="Enter text" />
          <Input label="Email Input" type="email" placeholder="you@example.com" />
          <Input label="Password Input" type="password" placeholder="Password" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="With Helper Text" placeholder="Enter value" helperText="This is a helpful hint" />
          <Input label="With Error" placeholder="Invalid value" error="This field is required" />
          <Input label="Success State" variant="success" defaultValue="Valid input" />
          <Input label="Disabled" placeholder="Cannot edit" disabled defaultValue="Disabled value" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Features</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="With Prefix" placeholder="mysite.com" prefix="https://" />
          <Input label="With Suffix" placeholder="mycompany" suffix=".com" />
          <Input label="Clearable" placeholder="Type to search..." clearable defaultValue="Search term" />
          <Input label="Required Field" placeholder="Required" required />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
