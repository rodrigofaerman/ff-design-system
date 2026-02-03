import React, { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import './Textarea.css';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Textarea variant
   */
  variant?: 'default' | 'error' | 'success';

  /**
   * Textarea size
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
   * Full width textarea
   */
  fullWidth?: boolean;

  /**
   * Auto-resize textarea based on content
   */
  autoResize?: boolean;

  /**
   * Show character counter
   */
  showCount?: boolean;

  /**
   * Maximum character count
   */
  maxLength?: number;
}

/**
 * Textarea component for multi-line text entry
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
      error,
      helperText,
      fullWidth = false,
      autoResize = false,
      showCount = false,
      maxLength,
      disabled,
      required,
      className,
      id,
      rows = 3,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const textareaId = id || `ff-textarea-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${textareaId}-error` : undefined;
    const helperId = helperText ? `${textareaId}-helper` : undefined;

    const internalRef = useRef<HTMLTextAreaElement>(null);
    const combinedRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

    const isControlled = value !== undefined;
    const textareaValue = isControlled ? value : internalValue;
    const charCount = String(textareaValue).length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const adjustHeight = () => {
      const element = combinedRef.current;
      if (element && autoResize) {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
      }
    };

    useEffect(() => {
      adjustHeight();
    }, [textareaValue, autoResize]);

    const effectiveVariant = error ? 'error' : variant;

    return (
      <div
        className={clsx(
          'ff-textarea-wrapper',
          {
            'ff-textarea-wrapper--full-width': fullWidth,
            'ff-textarea-wrapper--disabled': disabled,
          },
          className
        )}
      >
        {label && (
          <div className="ff-textarea-header">
            <label htmlFor={textareaId} className="ff-textarea-label">
              {label}
              {required && <span className="ff-textarea-label__required">*</span>}
            </label>
            {showCount && maxLength && (
              <span
                className={clsx('ff-textarea-count', {
                  'ff-textarea-count--over': charCount > maxLength,
                })}
              >
                {charCount}/{maxLength}
              </span>
            )}
          </div>
        )}

        <div
          className={clsx(
            'ff-textarea-container',
            `ff-textarea-container--${effectiveVariant}`,
            `ff-textarea-container--${size}`,
            {
              'ff-textarea-container--disabled': disabled,
              'ff-textarea-container--auto-resize': autoResize,
            }
          )}
        >
          <textarea
            ref={combinedRef}
            id={textareaId}
            className="ff-textarea"
            disabled={disabled}
            required={required}
            rows={autoResize ? 1 : rows}
            maxLength={maxLength}
            value={textareaValue}
            onChange={handleChange}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={clsx(errorId, helperId).trim() || undefined}
            {...props}
          />
        </div>

        {error && (
          <div id={errorId} className="ff-textarea-message ff-textarea-message--error">
            {error}
          </div>
        )}

        {helperText && !error && (
          <div id={helperId} className="ff-textarea-message ff-textarea-message--helper">
            {helperText}
          </div>
        )}

        {showCount && maxLength && !label && (
          <div className="ff-textarea-footer">
            <span
              className={clsx('ff-textarea-count', {
                'ff-textarea-count--over': charCount > maxLength,
              })}
            >
              {charCount}/{maxLength}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
