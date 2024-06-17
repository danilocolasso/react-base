import * as SelectPrimitive from '@radix-ui/react-select';
import { SelectTrigger } from './SelectTrigger';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/className';
import { Label } from '@/components/Label';
import { InputSearch } from '@/components/InputSearch';
import { generateRandomId } from '@/components/Form';
import { Message } from '@/components/Message';
import { Controller, useFormContext } from 'react-hook-form';

const SelectBase = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

type HTMLAttributesWithoutDefaultValue = Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'dir'>;
export type SelectOption = {
  label: string;
  value: string | number;
};

export interface SelectProps extends React.ComponentProps<typeof SelectBase>, HTMLAttributesWithoutDefaultValue {
  name?: string;
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
  loading?: boolean;
  searchable?: boolean;
  onSearchChange?: (query: string) => void;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({
    id,
    name,
    label,
    required,
    className,
    options,
    loading = false,
    placeholder = 'Selecione',
    searchable = true,
    error,
    onSearchChange,
    ...props
  }, ref) => {
    const { control } = useFormContext();
    const [searchValue, setSearchValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>(options);

    if (label && !id) {
      id = generateRandomId(label);
    }
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchValue(value);
      if (onSearchChange) {
        onSearchChange(value);
        return;
      }

      setFilteredOptions(options.filter(option => option.label
        .toLowerCase()
        .includes(value.toLowerCase())
      ));
    };

    const handleOnOpenChange = (open: boolean) => {
      if (!open) {
        setSearchValue('');
        setFilteredOptions(options);
      }
      
      if (open && inputRef.current) {
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }

    const emptyOption = () => (
      <SelectItem disabled value='null'>
        Nenhum item encontrado
      </SelectItem>
    );

    const loadingOption = () => (
      <SelectItem disabled value='null'>
        Carregando...
      </SelectItem>
    );

    useEffect(() => {
      setFilteredOptions(options);
    }, [options]);

    return (
      <Controller
        name={name || ''}
        control={control}
        render={({ field }) => (
          <div className={cn('flex flex-col gap-1 w-full', className)} ref={ref}>
            {label && <Label htmlFor={id} required={required}>{label}</Label>}
            <SelectBase onValueChange={field.onChange} onOpenChange={handleOnOpenChange} {...props} >
              <SelectTrigger className='w-full' {...field}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {searchable && (
                  <div className="p-2">
                    <InputSearch
                      value={searchValue}
                      onChange={handleSearchChange}
                      placeholder="Buscar"
                      ref={inputRef}
                    />
                  </div>
                )}
                <SelectGroup>
                  {loading && loadingOption()}
                  {!loading && filteredOptions.length === 0 && emptyOption()}
                  {!loading && filteredOptions.map(option => (
                    <SelectItem key={option.value} value={option.value as string} className='px-4'>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </SelectBase>
            {error && <Message variant='destructive'>{error}</Message>}
          </div>
        )}
      />
    );
  }
);
