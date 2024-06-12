import React from 'react';
import { cn } from '@/utils/className';
import { FormProvider, InferType, SubmitHandler, UseFormReturn } from '@/components/Form';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  orientation?: 'vertical' | 'horizontal';
  context: UseFormReturn<InferType<any>>;
  onSubmit: SubmitHandler<any>;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, orientation = 'vertical', onSubmit, context, ...props }, ref) => {
    return (
      <FormProvider {...context}>
        <form
          className={cn('flex gap-4', orientation === 'vertical' && 'flex-col')}
          onSubmit={context.handleSubmit(onSubmit)}
          {...props}
          ref={ref}
        >
          {children}
        </form>
      </FormProvider>
    );
  }
);
