import * as SelectPrimitive from '@radix-ui/react-select'
import { SelectTrigger } from './SelectTrigger'
import { SelectContent } from './SelectContent'
import { SelectItem } from './SelectItem'
import React from 'react'
import { cn } from '@/utils/className'
import { Label } from '@/components/Label'
import { uuid } from '@/utils/uuid'

const SelectBase = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

type HTMLAttributesWithoutDefaultValue = Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'dir'>;
export type SelectOption = {
  label: string;
  value: string | number;
};

export interface SelectProps extends React.ComponentProps<typeof SelectBase>, HTMLAttributesWithoutDefaultValue {
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({
    id,
    label,
    required,
    className,
    options,
    placeholder = 'Selecione',
    ...props
  }, ref) => {

    if (label && !id) {
      id = label.toLocaleLowerCase().replace(/\s+/g, '-') + '-' + uuid();
    }

    const empty = () => (
      <SelectItem disabled value='null'>
        Nenhum item encontrado
      </SelectItem>
    );

    return (
      <div className={cn('flex flex-col gap-1 w-full', className)} {...props} ref={ref}>
        {Label && <Label htmlFor={id} required={required}>{label}</Label>}
        <SelectBase>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              { options.length === 0 && empty() }
              { options.map(option => (
                <SelectItem key={option.value} value={option.value as string}>{option.label}</SelectItem>
              )) }
            </SelectGroup>
          </SelectContent>
        </SelectBase>
      </div>
    );
  }
);