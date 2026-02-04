import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Select Country',
    children: (
      <>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </>
    ),
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Choose an option',
    placeholder: 'Select one...',
    defaultValue: '',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'Select one...',
    defaultValue: '',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Subscription Plan',
    helperText: 'Choose the plan that fits your needs',
    children: (
      <>
        <option value="free">Free</option>
        <option value="pro">Pro</option>
        <option value="enterprise">Enterprise</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Select Option',
    error: 'Please select a valid option',
    defaultValue: '',
    children: (
      <>
        <option value="">-- Select --</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    disabled: true,
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const WithOptgroups: Story = {
  args: {
    label: 'Choose Location',
    children: (
      <>
        <optgroup label="North America">
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="mx">Mexico</option>
        </optgroup>
        <optgroup label="Europe">
          <option value="uk">United Kingdom</option>
          <option value="fr">France</option>
          <option value="de">Germany</option>
        </optgroup>
        <optgroup label="Asia">
          <option value="jp">Japan</option>
          <option value="cn">China</option>
          <option value="in">India</option>
        </optgroup>
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Select',
    fullWidth: true,
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Select',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Select',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Select',
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </>
    ),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
      <Select size="sm" label="Small">
        <option value="1">Small select</option>
        <option value="2">Option 2</option>
      </Select>
      <Select size="md" label="Medium">
        <option value="1">Medium select (default)</option>
        <option value="2">Option 2</option>
      </Select>
      <Select size="lg" label="Large">
        <option value="1">Large select</option>
        <option value="2">Option 2</option>
      </Select>
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Basic Select</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Select label="Country">
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
          </Select>
          <Select label="With Placeholder" placeholder="Choose one..." defaultValue="">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Select label="With Helper Text" helperText="Select your preferred option">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>
          <Select label="With Error" error="This field is required" defaultValue="">
            <option value="">-- Select --</option>
            <option value="1">Option 1</option>
          </Select>
          <Select label="Disabled" disabled>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </Select>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Advanced</h3>
        <Select label="Grouped Options">
          <optgroup label="Group 1">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </optgroup>
        </Select>
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
    label: 'Country',
    placeholder: 'Select country',
    fullWidth: true,
    children: (
      <>
        <option value="">Select country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    layout: 'padded',
  },
};

export const MobileLarge: Story = {
  args: {
    label: 'Category',
    fullWidth: true,
    children: (
      <>
        <optgroup label="Electronics">
          <option value="phone">Phones</option>
          <option value="laptop">Laptops</option>
        </optgroup>
        <optgroup label="Clothing">
          <option value="shirts">Shirts</option>
          <option value="pants">Pants</option>
        </optgroup>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
    layout: 'padded',
  },
};
