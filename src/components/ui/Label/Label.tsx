import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, ...props }, ref) => (
    <div className='flex items-center gap-1'>
      <LabelPrimitive.Root
        ref={ref}
        className={className}
        {...props}
      />
      {required && <span className='text-red-500'>*</span>}
    </div>
));

Label.displayName = 'Label';

export { Label };