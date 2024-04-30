import * as React from 'react';
import { cn } from '@/utils/className';
import { ButtonVariantProps, buttonVariants } from './buttonVariants';
import { Icon, Icons } from '@/components/Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  asChild?: boolean;
  loading?: boolean;
  icon?: keyof typeof Icons;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    icon,
    loading,
    disabled,
    asChild = false,
    onClick,
    ...props
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
        ref={ref}
      >
        <div className='flex gap-2 items-center'>
          { icon && !loading && <Icon name={icon} /> }
          { loading && <Icon name="FaSpinner" className="animate-spin" /> }
          { props.children }
        </div>
      </button>
    );
  }
);
