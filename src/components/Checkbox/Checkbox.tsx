import React from 'react';
import { clsx } from 'clsx';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Checkbox variant
   */
  variant?: 'default' | 'error' | 'success';

  /**
   * Checkbox size
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
   * Indeterminate state
   */
  indeterminate?: boolean;
}

/**
 * Checkbox component for selections
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
      error,
      helperText,
      indeterminate = false,
      disabled,
      required,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `ff-checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${checkboxId}-error` : undefined;
    const helperId = helperText ? `${checkboxId}-helper` : undefined;

    const effectiveVariant = error ? 'error' : variant;

    const internalRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = ref || internalRef;

    React.useEffect(() => {
      const element = (combinedRef as React.RefObject<HTMLInputElement>).current;
      if (element) {
        element.indeterminate = indeterminate;
      }
    }, [indeterminate, combinedRef]);

    return (
      <div
        className={clsx(
          'ff-checkbox-wrapper',
          `ff-checkbox-wrapper--${effectiveVariant}`,
          {
            'ff-checkbox-wrapper--disabled': disabled,
          },
          className
        )}
      >
        <div className="ff-checkbox-container">
          <input
            ref={combinedRef}
            type="checkbox"
            id={checkboxId}
            className={clsx('ff-checkbox', `ff-checkbox--${size}`)}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={clsx(errorId, helperId).trim() || undefined}
            {...props}
          />

          <span
            className={clsx(
              'ff-checkbox-box',
              `ff-checkbox-box--${size}`,
              {
                'ff-checkbox-box--indeterminate': indeterminate,
              }
            )}
            aria-hidden="true"
          >
            <svg
              className="ff-checkbox-icon"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {indeterminate ? (
                <path
                  d="M4 8H12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 8L6.5 11.5L13 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </span>

          {label && (
            <label htmlFor={checkboxId} className={clsx('ff-checkbox-label', `ff-checkbox-label--${size}`)}>
              {label}
              {required && <span className="ff-checkbox-label__required">*</span>}
            </label>
          )}
        </div>

        {error && (
          <div id={errorId} className="ff-checkbox-message ff-checkbox-message--error">
            {error}
          </div>
        )}

        {helperText && !error && (
          <div id={helperId} className="ff-checkbox-message ff-checkbox-message--helper">
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
