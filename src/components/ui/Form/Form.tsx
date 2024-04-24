import React from 'react';
import { cn } from '@/utils/className';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  orientation?: 'vertical' | 'horizontal';
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, orientation = 'vertical', ...props }, ref) => (
    <form
      className={cn('flex gap-4', orientation === 'vertical' && 'flex-col')}
      {...props}
      ref={ref}
      >
      {children}
    </form>
));

export { Form };