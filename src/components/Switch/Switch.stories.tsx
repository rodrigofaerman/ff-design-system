import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Enable dark mode',
    labelPosition: 'left',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enabled switch',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled enabled',
    disabled: true,
    defaultChecked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Accept terms',
    required: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small switch',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium switch (default)',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large switch',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch (default)" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Unchecked" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
      <Switch label="Required field" required />
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Label on the right (default)" labelPosition="right" />
      <Switch label="Label on the left" labelPosition="left" />
    </div>
  ),
};

export const SwitchList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Notification Settings:</h3>
      <Switch label="Email notifications" defaultChecked />
      <Switch label="Push notifications" defaultChecked />
      <Switch label="SMS notifications" />
      <Switch label="Marketing emails" />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Basic Switches</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Switch label="Unchecked" />
          <Switch label="Checked" defaultChecked />
          <Switch label="Required field" required />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Label Positions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Switch label="Label on right (default)" labelPosition="right" defaultChecked />
          <Switch label="Label on left" labelPosition="left" defaultChecked />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Switch label="Disabled off" disabled />
          <Switch label="Disabled on" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Switch size="sm" label="Small switch" defaultChecked />
          <Switch size="md" label="Medium switch (default)" defaultChecked />
          <Switch size="lg" label="Large switch" defaultChecked />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Use Case: Settings Panel</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Notifications</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Switch label="Email notifications" defaultChecked />
              <Switch label="Push notifications" defaultChecked />
              <Switch label="SMS alerts" />
            </div>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Privacy</strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Switch label="Public profile" />
              <Switch label="Show online status" defaultChecked />
              <Switch label="Allow friend requests" defaultChecked />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Use Case: Feature Toggles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Switch label="Dark mode" labelPosition="left" defaultChecked />
          <Switch label="Compact view" labelPosition="left" />
          <Switch label="Auto-play videos" labelPosition="left" />
          <Switch label="High contrast" labelPosition="left" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
