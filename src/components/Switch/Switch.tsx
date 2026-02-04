import React from 'react';
import { clsx } from 'clsx';
import './Switch.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Switch variant
   */
  variant?: 'default' | 'error' | 'success';

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

  /**
   * Error message
   */
  error?: string;

  /**
   * Helper text
   */
  helperText?: string;
}

/**
 * Switch component for toggle controls
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
      labelPosition = 'right',
      error,
      helperText,
      disabled,
      required,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const switchId = id || `ff-switch-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${switchId}-error` : undefined;
    const helperId = helperText ? `${switchId}-helper` : undefined;

    const effectiveVariant = error ? 'error' : variant;

    return (
      <div className={clsx('ff-switch-field', className)}>
        <div
          className={clsx(
            'ff-switch-wrapper',
            `ff-switch-wrapper--${effectiveVariant}`,
            {
              'ff-switch-wrapper--disabled': disabled,
              'ff-switch-wrapper--label-left': label && labelPosition === 'left',
            }
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
            aria-checked={props.checked !== undefined ? props.checked : undefined}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={clsx(errorId, helperId).trim() || undefined}
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

        {error && (
          <div id={errorId} className="ff-switch-message ff-switch-message--error">
            {error}
          </div>
        )}

        {helperText && !error && (
          <div id={helperId} className="ff-switch-message ff-switch-message--helper">
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
