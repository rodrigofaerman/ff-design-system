import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
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
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
  },
};

export const Required: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Your comments...',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Write a brief bio about yourself',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Your message...',
    error: 'Message is required',
    defaultValue: '',
  },
};

export const Success: Story = {
  args: {
    label: 'Feedback',
    variant: 'success',
    defaultValue: 'Thank you for your feedback!',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'This is disabled content',
  },
};

export const WithRows: Story = {
  args: {
    label: 'Large Text Area',
    placeholder: 'Enter text...',
    rows: 6,
  },
};

export const AutoResize: Story = {
  args: {
    label: 'Auto-resize Textarea',
    placeholder: 'Type and watch it grow...',
    autoResize: true,
    helperText: 'This textarea automatically adjusts its height',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Tweet',
    placeholder: 'What\'s happening?',
    showCount: true,
    maxLength: 280,
    helperText: 'Maximum 280 characters',
  },
};

export const CharacterCountNoLabel: Story = {
  args: {
    placeholder: 'Short message...',
    showCount: true,
    maxLength: 100,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Textarea',
    placeholder: 'This textarea spans full width',
    fullWidth: true,
    rows: 4,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Textarea',
    placeholder: 'Small size',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Textarea',
    placeholder: 'Medium size (default)',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Textarea',
    placeholder: 'Large size',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '400px' }}>
      <Textarea size="sm" label="Small" placeholder="Small textarea" />
      <Textarea size="md" label="Medium" placeholder="Medium textarea (default)" />
      <Textarea size="lg" label="Large" placeholder="Large textarea" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '400px' }}>
      <Textarea variant="default" label="Default" defaultValue="Default variant" />
      <Textarea variant="error" label="Error" defaultValue="Error variant" error="This is an error message" />
      <Textarea variant="success" label="Success" defaultValue="Success variant" />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '500px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem' }}>Basic Textarea</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textarea label="Comments" placeholder="Enter your comments..." />
          <Textarea label="Description" placeholder="Describe your experience..." rows={4} />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textarea
            label="With Helper Text"
            placeholder="Enter text..."
            helperText="This is a helpful hint"
          />
          <Textarea
            label="With Error"
            placeholder="Required field"
            error="This field is required"
            defaultValue=""
          />
          <Textarea
            label="Success State"
            variant="success"
            defaultValue="Your feedback has been saved!"
          />
          <Textarea
            label="Disabled"
            placeholder="Cannot edit"
            disabled
            defaultValue="Disabled content"
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Features</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Textarea
            label="Auto-resize"
            placeholder="Type and watch it grow..."
            autoResize
            helperText="Automatically adjusts height based on content"
          />
          <Textarea
            label="Character Counter"
            placeholder="What's on your mind?"
            showCount
            maxLength={280}
            helperText="Maximum 280 characters"
          />
          <Textarea
            label="Required Field"
            placeholder="Required"
            required
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem' }}>Use Cases</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Textarea
            label="Product Review"
            placeholder="Share your experience with this product..."
            rows={5}
            showCount
            maxLength={500}
            helperText="Help others by sharing detailed feedback"
          />
          <Textarea
            label="Support Ticket"
            placeholder="Describe your issue..."
            rows={4}
            required
            helperText="Please provide as much detail as possible"
          />
          <Textarea
            label="Quick Note"
            placeholder="Jot down your thoughts..."
            autoResize
            size="sm"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
