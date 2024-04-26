import { cn } from '@/utils/className';
import React from 'react';
import { MessageVariantProps, messageVariants } from './messageVariants';

export interface MessageProps extends React.HTMLAttributes<HTMLSpanElement>, MessageVariantProps { }

export const Message = React.forwardRef<HTMLSpanElement, MessageProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      className={cn(messageVariants({ variant, size }), className)}
      {...props}
      ref={ref}
    />
  )
);
