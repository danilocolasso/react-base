import * as React from 'react';
import { Label } from '@/components/Label';
import { cn } from '@/utils/className';
import { Message } from '@/components/Message';
import { generateRandomId } from '@/components/Form';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
  inputClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    inputClassName,
    id,
    error,
    type = 'text',
    label,
    required,
    ...props
  }, ref) => {
    if (label && !id) {
      id = generateRandomId(label);
    }

    return (
      <div className={cn('flex flex-col gap-1 w-full', className)}>
        {label && <Label htmlFor={id} required={required}>{label}</Label>}
        <input
          type={type}
          id={id}
          lang='pt-BR'
          className={cn(
            'flex h-9 w-full rounded-sm border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring !ring-primary disabled:cursor-not-allowed disabled:opacity-50',
            inputClassName
          )}
          ref={ref}
          {...props}
        />
        {error && <Message variant='destructive'>{error}</Message> }
      </div>
    );
  }
);
