import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'I agree to the terms',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept privacy policy',
    error: 'You must accept the privacy policy',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate state',
    indeterminate: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small checkbox',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium checkbox (default)',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large checkbox',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox (default)" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled defaultChecked />
      <Checkbox label="With Error" error="This field is required" />
    </div>
  ),
};

export const CheckboxList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Select your interests:</h3>
      <Checkbox label="Technology" />
      <Checkbox label="Design" />
      <Checkbox label="Business" />
      <Checkbox label="Marketing" />
      <Checkbox label="Science" />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Basic Checkboxes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Required field" required />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Checkbox label="Indeterminate state" indeterminate />
          <Checkbox label="With error" error="This field is required" />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Checkbox size="sm" label="Small checkbox" defaultChecked />
          <Checkbox size="md" label="Medium checkbox (default)" defaultChecked />
          <Checkbox size="lg" label="Large checkbox" defaultChecked />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Use Case: Form Agreement</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Checkbox label="I accept the terms and conditions" required />
          <Checkbox label="I agree to receive marketing emails" />
          <Checkbox label="Subscribe to newsletter" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Mobile & Responsive Examples
export const MobileSmall: Story = {
  args: {
    label: 'I agree to the terms and conditions',
    size: 'lg',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    layout: 'padded',
  },
};

export const MobileList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Checkbox label="Enable push notifications" size="lg" defaultChecked />
      <Checkbox label="Enable email notifications" size="lg" />
      <Checkbox label="Enable SMS notifications" size="lg" />
      <Checkbox label="Marketing communications" size="lg" helperText="Receive updates about new features" />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
    layout: 'padded',
  },
};
