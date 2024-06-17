import { Input, InputProps } from '@/components/Input';
import { cn } from '@/utils/className';
import { formatCurrency } from '@/utils/formatCurrency';
import React, { ChangeEvent, useState, useEffect } from 'react';

export interface InputCurrencyProps extends Omit<InputProps, 'value' | 'onChange'> {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputCurrency = React.forwardRef<HTMLInputElement, InputCurrencyProps>(
  ({
    name,
    value,
    className,
    inputClassName,
    onChange,
    ...props
  }, ref) => {
    const [formattedValue, setFormattedValue] = useState(() => formatCurrency(value || '0'));
    const [rawValue, setRawValue] = useState<number>(parseFloat(value || '0'));

    useEffect(() => {
      setFormattedValue(formatCurrency(value || '0'));
      setRawValue(parseFloat(value || '0'));
    }, [value]);

    const parseCurrencyInput = (value: string): number => {
      return parseFloat((value || '0').toString().replace(/\D/g, '')) / 100;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const newRawValue = parseCurrencyInput(inputValue);
      const formatted = formatCurrency(inputValue);

      setFormattedValue(formatted);
      setRawValue(newRawValue);

      if (onChange) {
        const customEvent = {
          ...e,
          target: {
            ...e.target,
            value: newRawValue.toString(),
          },
        };

        onChange(customEvent as ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <React.Fragment>
        <Input
          inputClassName={cn('text-right', inputClassName)}
          className={className}
          value={formattedValue}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        <input
          type='hidden'
          name={name}
          value={rawValue}
        />
      </React.Fragment>
    );
  }
);