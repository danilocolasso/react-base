import { Input, InputProps } from '@/components/Input';
import { formatCurrency } from '@/utils/formatCurrency';
import React, { ChangeEvent, useState } from 'react';

export interface InputCurrencyProps extends Omit<InputProps, 'value'> {
  value?: string;
}

export const InputCurrency = React.forwardRef<HTMLInputElement, InputCurrencyProps>(
  ({ name, value, onChange, ...props }, ref) => {
    const [formattedValue, setFormattedValue] = useState(() => formatCurrency(value));
    const [rawValue, setRawValue] = useState<number>(parseFloat(value || '0'));

    const parseCurrencyInput = (value: string): number => {
      return parseFloat((value || '0').toString().replace(/\D/g, '')) / 100;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const formatted = formatCurrency(inputValue);

      setFormattedValue(formatted);
      setRawValue(parseCurrencyInput(inputValue));

      if (onChange) {
        const customEvent = {
          ...e,
          target: {
            ...e.target,
            value: rawValue.toString(),
          },
        };

        onChange(customEvent as ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <React.Fragment>
        <Input
          inputClassName={'text-right'}
          value={formattedValue}
          onChange={handleChange}
          {...props}
          ref={ref}
        />
        <input
          name={name}
          type='hidden'
          value={rawValue}
        />
      </React.Fragment>
    );
  }
);