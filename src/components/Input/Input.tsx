import React, { useState } from 'react';
import { clsx } from 'clsx';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input variant
   */
  variant?: 'default' | 'error' | 'success';

  /**
   * Input size
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
   * Prefix icon or text
   */
  prefix?: React.ReactNode;

  /**
   * Suffix icon or text
   */
  suffix?: React.ReactNode;

  /**
   * Show clear button
   */
  clearable?: boolean;

  /**
   * Full width input
   */
  fullWidth?: boolean;

  /**
   * On clear callback
   */
  onClear?: () => void;
}

/**
 * Input component for text entry
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
      error,
      helperText,
      prefix,
      suffix,
      clearable = false,
      fullWidth = false,
      disabled,
      required,
      className,
      id,
      value,
      onChange,
      onClear,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const inputId = id || `ff-input-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;
    const hasValue = String(inputValue).length > 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      onClear?.();
    };

    const effectiveVariant = error ? 'error' : variant;
    const showClearButton = clearable && hasValue && !disabled;

    return (
      <div
        className={clsx(
          'ff-input-wrapper',
          {
            'ff-input-wrapper--full-width': fullWidth,
            'ff-input-wrapper--disabled': disabled,
          },
          className
        )}
      >
        {label && (
          <label htmlFor={inputId} className="ff-input-label">
            {label}
            {required && <span className="ff-input-label__required">*</span>}
          </label>
        )}

        <div
          className={clsx(
            'ff-input-container',
            `ff-input-container--${effectiveVariant}`,
            `ff-input-container--${size}`,
            {
              'ff-input-container--disabled': disabled,
              'ff-input-container--has-prefix': prefix,
              'ff-input-container--has-suffix': suffix || showClearButton,
            }
          )}
        >
          {prefix && <span className="ff-input-prefix">{prefix}</span>}

          <input
            ref={ref}
            id={inputId}
            className="ff-input"
            disabled={disabled}
            required={required}
            value={inputValue}
            onChange={handleChange}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={clsx(errorId, helperId).trim() || undefined}
            {...props}
          />

          {showClearButton && (
            <button
              type="button"
              className="ff-input-clear"
              onClick={handleClear}
              aria-label="Clear input"
            >
              ×
            </button>
          )}

          {suffix && !showClearButton && (
            <span className="ff-input-suffix">{suffix}</span>
          )}
        </div>

        {error && (
          <div id={errorId} className="ff-input-message ff-input-message--error">
            {error}
          </div>
        )}

        {helperText && !error && (
          <div id={helperId} className="ff-input-message ff-input-message--helper">
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
