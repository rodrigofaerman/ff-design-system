import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '../tokens';

const meta = {
  title: 'Design Tokens/Overview',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

// Colors showcase
export const Colors: StoryObj = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Color Palette</h2>

      {/* Primary */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Primary</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {Object.entries(tokens.colors.primary).map(([key, value]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: value,
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              />
              <div style={{ fontSize: '12px', marginTop: '4px' }}>{key}</div>
              <div style={{ fontSize: '10px', color: '#6b7280' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Colors */}
      {['success', 'warning', 'error'].map((colorName) => (
        <div key={colorName} style={{ marginBottom: '2rem' }}>
          <h3 style={{ textTransform: 'capitalize' }}>{colorName}</h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {Object.entries(tokens.colors[colorName as keyof typeof tokens.colors]).map(([key, value]) => (
              <div key={key} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: value as string,
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                  }}
                />
                <div style={{ fontSize: '10px', marginTop: '4px' }}>{key}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Gray Scale */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Gray Scale</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {Object.entries(tokens.colors.gray).map(([key, value]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: value,
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                }}
              />
              <div style={{ fontSize: '10px', marginTop: '4px' }}>{key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Spacing showcase
export const Spacing: StoryObj = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Spacing Scale</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(tokens.spacing).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', fontSize: '14px', fontWeight: 500 }}>
              {key}
            </div>
            <div
              style={{
                width: value,
                height: '24px',
                backgroundColor: '#3b82f6',
                borderRadius: '4px',
              }}
            />
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Typography showcase
export const Typography: StoryObj = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Typography</h2>

      {/* Font Sizes */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Font Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(tokens.typography.fontSize).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
              <div style={{ width: '80px', fontSize: '14px', fontWeight: 500 }}>
                {key}
              </div>
              <div style={{ fontSize: value }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginLeft: 'auto' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Font Weights</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(tokens.typography.fontWeight).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '120px', fontSize: '14px' }}>
                {key}
              </div>
              <div style={{ fontWeight: value, fontSize: '18px' }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginLeft: 'auto' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
