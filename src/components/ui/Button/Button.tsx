import * as React from 'react';
import { cn } from '@/utils/className';
import { ButtonVariantProps, buttonVariants } from './buttonVariants';
import { useButton } from './useButton';
import { Icon, Icons } from '@/components/ui/Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  asChild?: boolean;
  loading?: boolean;
  icon?: keyof typeof Icons;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    icon,
    loading: isLoading,
    disabled,
    asChild = false,
    onClick,
    ...props
  }, ref) => {
    const { loading, handleClick } = useButton();

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClick) {
        handleClick(async () => onClick(e));
      }
    };

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        onClick={handleButtonClick}
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

Button.displayName = 'Button';

export { Button };
