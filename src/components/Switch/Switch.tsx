import React from 'react';
import { clsx } from 'clsx';
import './Switch.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Switch size
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Label text
   */
  label?: string;

  /**
   * Label position
   */
  labelPosition?: 'left' | 'right';
}

/**
 * Switch component for toggle controls
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = 'md',
      label,
      labelPosition = 'right',
      disabled,
      required,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const switchId = id || `ff-switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        className={clsx(
          'ff-switch-wrapper',
          {
            'ff-switch-wrapper--disabled': disabled,
            'ff-switch-wrapper--label-left': label && labelPosition === 'left',
          },
          className
        )}
      >
        {label && labelPosition === 'left' && (
          <label htmlFor={switchId} className={clsx('ff-switch-label', `ff-switch-label--${size}`)}>
            {label}
            {required && <span className="ff-switch-label__required">*</span>}
          </label>
        )}

        <div className="ff-switch-container">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={switchId}
            className={clsx('ff-switch', `ff-switch--${size}`)}
            disabled={disabled}
            required={required}
            aria-checked={props.checked || props.defaultChecked || false}
            {...props}
          />

          <span
            className={clsx('ff-switch-track', `ff-switch-track--${size}`)}
            aria-hidden="true"
          >
            <span className={clsx('ff-switch-thumb', `ff-switch-thumb--${size}`)} />
          </span>
        </div>

        {label && labelPosition === 'right' && (
          <label htmlFor={switchId} className={clsx('ff-switch-label', `ff-switch-label--${size}`)}>
            {label}
            {required && <span className="ff-switch-label__required">*</span>}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
