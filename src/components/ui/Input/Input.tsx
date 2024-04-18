import * as React from 'react';
import { Label } from '@/components/ui/Label';
import { cn } from '@/utils/className';
import { uuid } from '@/utils/uuid';
import useInput from './useInput';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  validator?: (value: string) => boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    id,
    type = 'text',
    label,
    required,
    validator,
    ...props
  }, ref) => {
    const { value, setValue, isValid } = useInput({ initialValue: props.value as string || '', validator });

    if (label && !id) {
      id = label.toLocaleLowerCase().replace(/\s+/g, '-') + '-' + uuid();
    }

    return (
      <div className='flex flex-col gap-1 w-full'>
        {label && <Label htmlFor={id} required={required}>{label}</Label>}
        <input
          type={type}
          id={id}
          value={value}
          onChange={e => setValue(e.target.value)}
          className={cn(
            'flex h-9 w-full rounded-sm border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring !ring-primary disabled:cursor-not-allowed disabled:opacity-50',
            className,
            !isValid && 'border-red-500'
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;