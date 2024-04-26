import * as React from 'react';
import { Label } from '@/components/ui/Label';
import { cn } from '@/utils/className';
import { uuid } from '@/utils/uuid';
import { Message } from '@/components/ui/Message';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    id,
    error,
    type = 'text',
    label,
    required,
    ...props
  }, ref) => {

    if (label && !id) {
      id = label.toLocaleLowerCase().replace(/\s+/g, '-') + '-' + uuid();
    }

    return (
      <div className='flex flex-col gap-1 w-full'>
        {label && <Label htmlFor={id} required={required}>{label}</Label>}
        <input
          type={type}
          id={id}
          className={cn(
            'flex h-9 w-full rounded-sm border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring !ring-primary disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <Message variant='destructive'>{error}</Message> }
      </div>
    );
  }
);
