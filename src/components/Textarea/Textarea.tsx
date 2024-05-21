import { cn } from '@/utils/className';
import * as React from 'react';
import { Label } from '@/components/Label';
import { Message } from '@/components/Message';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
  };

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, required, error, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1 w-full', className)}>
        {label && <Label htmlFor={id} required={required}>{label}</Label>}
        <textarea
          className='flex min-h-[60px] w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring !ring-primary disabled:cursor-not-allowed disabled:opacity-50'
          ref={ref}
          {...props}
        />
        {error && <Message variant='destructive'>{error}</Message> }
      </div>
    );
  }
);
