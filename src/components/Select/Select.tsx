import React from 'react';
import { clsx } from 'clsx';
import './Select.css';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Select variant
   */
  variant?: 'default' | 'error' | 'success';

  /**
   * Select size
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Label text
   */
  label?: string;

  /**
   * Error message
   */
  error?: string;

  /**
   * Helper text
   */
  helperText?: string;

  /**
   * Full width select
   */
  fullWidth?: boolean;

  /**
   * Placeholder option text
   */
  placeholder?: string;

  /**
   * Children (options or optgroups)
   */
  children: React.ReactNode;
}

/**
 * Select component for dropdown selection
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
      error,
      helperText,
      fullWidth = false,
      placeholder,
      disabled,
      required,
      className,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || `ff-select-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${selectId}-error` : undefined;
    const helperId = helperText ? `${selectId}-helper` : undefined;

    const effectiveVariant = error ? 'error' : variant;

    return (
      <div
        className={clsx(
          'ff-select-wrapper',
          {
            'ff-select-wrapper--full-width': fullWidth,
            'ff-select-wrapper--disabled': disabled,
          },
          className
        )}
      >
        {label && (
          <label htmlFor={selectId} className="ff-select-label">
            {label}
            {required && <span className="ff-select-label__required">*</span>}
          </label>
        )}

        <div
          className={clsx(
            'ff-select-container',
            `ff-select-container--${effectiveVariant}`,
            `ff-select-container--${size}`,
            {
              'ff-select-container--disabled': disabled,
            }
          )}
        >
          <select
            ref={ref}
            id={selectId}
            className="ff-select"
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={clsx(errorId, helperId).trim() || undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {children}
          </select>

          <span className="ff-select-icon" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {error && (
          <div id={errorId} className="ff-select-message ff-select-message--error">
            {error}
          </div>
        )}

        {helperText && !error && (
          <div id={helperId} className="ff-select-message ff-select-message--helper">
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
