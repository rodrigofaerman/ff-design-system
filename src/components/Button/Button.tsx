import React from 'react';
import { clsx } from 'clsx';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Full width button
   */
  fullWidth?: 'boolean';

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Button children
   */
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'ff-button',
          `ff-button--${variant}`,
          `ff-button--${size}`,
          {
            'ff-button--full-width': fullWidth,
            'ff-button--loading': loading,
          },
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="ff-button__spinner" />}
        <span className="ff-button__content">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
