import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default-radio',
  },
};

export const WithLabel: Story = {
  args: {
    name: 'labeled-radio',
    label: 'Radio option',
  },
};

export const Checked: Story = {
  args: {
    name: 'checked-radio',
    label: 'Checked radio',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled-radio',
    label: 'Disabled radio',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: 'disabled-checked-radio',
    label: 'Disabled checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    name: 'small-radio',
    label: 'Small radio',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    name: 'medium-radio',
    label: 'Medium radio (default)',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    name: 'large-radio',
    label: 'Large radio',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio size="sm" name="sizes" label="Small radio" />
      <Radio size="md" name="sizes" label="Medium radio (default)" />
      <Radio size="lg" name="sizes" label="Large radio" />
    </div>
  ),
};

// RadioGroup Stories
export const BasicGroup: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup name="basic-group" label="Choose an option">
      <Radio value="1" label="Option 1" />
      <Radio value="2" label="Option 2" />
      <Radio value="3" label="Option 3" />
    </RadioGroup>
  ),
};

export const WithDefaultValue: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup name="default-group" label="Select your plan" defaultValue="pro">
      <Radio value="free" label="Free" />
      <Radio value="pro" label="Pro (Selected)" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
};

export const Required: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup name="required-group" label="Required selection" required>
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </RadioGroup>
  ),
};

export const WithError: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup name="error-group" label="Choose one option" error="This field is required">
      <Radio value="1" label="Option 1" />
      <Radio value="2" label="Option 2" />
    </RadioGroup>
  ),
};

export const DisabledGroup: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup name="disabled-group" label="Disabled group" disabled defaultValue="2">
      <Radio value="1" label="Option 1" />
      <Radio value="2" label="Option 2 (Selected)" />
      <Radio value="3" label="Option 3" />
    </RadioGroup>
  ),
};

export const SmallGroup: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup name="small-group" label="Small size group">
      <Radio size="sm" value="1" label="Small option 1" />
      <Radio size="sm" value="2" label="Small option 2" />
      <Radio size="sm" value="3" label="Small option 3" />
    </RadioGroup>
  ),
};

export const LargeGroup: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup name="large-group" label="Large size group">
      <Radio size="lg" value="1" label="Large option 1" />
      <Radio size="lg" value="2" label="Large option 2" />
      <Radio size="lg" value="3" label="Large option 3" />
    </RadioGroup>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Basic Radio Group</h3>
        <RadioGroup name="showcase-basic" label="Select your preference">
          <Radio value="1" label="Option 1" />
          <Radio value="2" label="Option 2" />
          <Radio value="3" label="Option 3" />
        </RadioGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>With Default Selection</h3>
        <RadioGroup name="showcase-default" label="Subscription Plan" defaultValue="pro">
          <Radio value="free" label="Free - $0/month" />
          <Radio value="pro" label="Pro - $29/month" />
          <Radio value="enterprise" label="Enterprise - Contact us" />
        </RadioGroup>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <RadioGroup name="showcase-required" label="Required field" required>
            <Radio value="yes" label="Yes" />
            <Radio value="no" label="No" />
          </RadioGroup>

          <RadioGroup name="showcase-error" label="With error" error="Please select an option">
            <Radio value="1" label="Option 1" />
            <Radio value="2" label="Option 2" />
          </RadioGroup>

          <RadioGroup name="showcase-disabled" label="Disabled group" disabled defaultValue="2">
            <Radio value="1" label="Option 1" />
            <Radio value="2" label="Option 2" />
          </RadioGroup>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <RadioGroup name="showcase-small" label="Small size">
            <Radio size="sm" value="1" label="Small option 1" />
            <Radio size="sm" value="2" label="Small option 2" />
          </RadioGroup>

          <RadioGroup name="showcase-medium" label="Medium size (default)">
            <Radio size="md" value="1" label="Medium option 1" />
            <Radio size="md" value="2" label="Medium option 2" />
          </RadioGroup>

          <RadioGroup name="showcase-large" label="Large size">
            <Radio size="lg" value="1" label="Large option 1" />
            <Radio size="lg" value="2" label="Large option 2" />
          </RadioGroup>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Use Case: Survey Question</h3>
        <RadioGroup name="survey" label="How satisfied are you with our service?" required>
          <Radio value="5" label="Very Satisfied" />
          <Radio value="4" label="Satisfied" />
          <Radio value="3" label="Neutral" />
          <Radio value="2" label="Dissatisfied" />
          <Radio value="1" label="Very Dissatisfied" />
        </RadioGroup>
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
    label: 'Standard shipping',
    size: 'lg',
    name: 'mobile-shipping',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    layout: 'padded',
  },
};

export const MobileRadioGroup: Story = {
  render: () => (
    <RadioGroup name="mobile-payment" label="Payment Method" helperText="Choose your preferred payment method">
      <Radio value="credit" label="Credit Card" size="lg" />
      <Radio value="debit" label="Debit Card" size="lg" />
      <Radio value="paypal" label="PayPal" size="lg" />
      <Radio value="apple" label="Apple Pay" size="lg" />
    </RadioGroup>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
    layout: 'padded',
  },
};
