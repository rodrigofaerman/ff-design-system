import React from 'react';
import { clsx } from 'clsx';
import './Radio.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Radio variant
   */
  variant?: 'default' | 'error' | 'success';

  /**
   * Radio size
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
}

export interface RadioGroupProps {
  /**
   * Radio group name
   */
  name: string;

  /**
   * Radio group variant
   */
  variant?: 'default' | 'error' | 'success';

  /**
   * Label text for the group
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
   * Currently selected value
   */
  value?: string;

  /**
   * Default value
   */
  defaultValue?: string;

  /**
   * On change callback
   */
  onChange?: (value: string) => void;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Required field
   */
  required?: boolean;

  /**
   * Radio buttons
   */
  children: React.ReactNode;

  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * Radio component for single selection
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
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
    const radioId = id || `ff-radio-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${radioId}-error` : undefined;
    const helperId = helperText ? `${radioId}-helper` : undefined;

    const effectiveVariant = error ? 'error' : variant;

    return (
      <div
        className={clsx(
          'ff-radio-wrapper',
          `ff-radio-wrapper--${effectiveVariant}`,
          {
            'ff-radio-wrapper--disabled': disabled,
          },
          className
        )}
      >
        <div className="ff-radio-container">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className={clsx('ff-radio', `ff-radio--${size}`)}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={clsx(errorId, helperId).trim() || undefined}
            {...props}
          />

          <span
            className={clsx('ff-radio-circle', `ff-radio-circle--${size}`)}
            aria-hidden="true"
          >
            <span className="ff-radio-dot" />
          </span>

          {label && (
            <label htmlFor={radioId} className={clsx('ff-radio-label', `ff-radio-label--${size}`)}>
              {label}
              {required && <span className="ff-radio-label__required">*</span>}
            </label>
          )}
        </div>

        {error && (
          <div id={errorId} className="ff-radio-message ff-radio-message--error">
            {error}
          </div>
        )}

        {helperText && !error && (
          <div id={helperId} className="ff-radio-message ff-radio-message--helper">
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

/**
 * RadioGroup component for managing multiple radio buttons
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  variant = 'default',
  label,
  error,
  helperText,
  value,
  defaultValue,
  onChange,
  disabled,
  required,
  children,
  className,
}) => {
  const groupId = `ff-radio-group-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = error ? `${groupId}-error` : undefined;
  const helperId = helperText ? `${groupId}-helper` : undefined;

  const effectiveVariant = error ? 'error' : variant;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Radio) {
      return React.cloneElement(child as React.ReactElement<RadioProps>, {
        name,
        disabled: disabled || child.props.disabled,
        required: required || child.props.required,
        checked: value !== undefined ? child.props.value === value : undefined,
        defaultChecked:
          defaultValue !== undefined ? child.props.value === defaultValue : undefined,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          child.props.onChange?.(e);
          handleChange(e);
        },
      });
    }
    return child;
  });

  return (
    <div
      className={clsx(
        'ff-radio-group',
        `ff-radio-group--${effectiveVariant}`,
        {
          'ff-radio-group--disabled': disabled,
        },
        className
      )}
      role="radiogroup"
      aria-labelledby={label ? `${groupId}-label` : undefined}
      aria-describedby={clsx(errorId, helperId).trim() || undefined}
      aria-required={required}
    >
      {label && (
        <div id={`${groupId}-label`} className="ff-radio-group-label">
          {label}
          {required && <span className="ff-radio-group-label__required">*</span>}
        </div>
      )}

      <div className="ff-radio-group-items">{childrenWithProps}</div>

      {error && (
        <div id={errorId} className="ff-radio-group-message ff-radio-group-message--error">
          {error}
        </div>
      )}

      {helperText && !error && (
        <div id={helperId} className="ff-radio-group-message ff-radio-group-message--helper">
          {helperText}
        </div>
      )}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';
