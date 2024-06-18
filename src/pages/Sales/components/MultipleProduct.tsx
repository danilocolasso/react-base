import { Button } from '@/components/Button';
import { useFormContext, useFieldArray } from '@/components/Form';
import { Input } from '@/components/Input';
import { InputCurrency } from '@/components/InputCurrency';
import { cn } from '@/utils/className';
import { formatCurrency } from '@/utils/formatCurrency';
import React from 'react';

export interface MultipleProductProps extends React.HTMLAttributes<HTMLDivElement> {
  name: 'goodsForSale' | 'selfManufacturedGoods' | 'otherStocks' | 'services';
}

export const MultipleProduct = React.forwardRef<HTMLDivElement, MultipleProductProps>(
  ({ name, children, className, ...props }, ref) => {
    const { control, register, formState: { errors }, setValue, getValues } = useFormContext();
    const { fields, append, remove } = useFieldArray({
      control,
      name
    });

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      let quantity = parseInt(e.target.value || '0');
      setValue(`${name}.${index}.quantity`, quantity);
      calculateTotal(index);
    }

    const handlePriceChange = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      setValue(`${name}.${index}.price`, formatCurrency(e.currentTarget.value))
      calculateTotal(index);
    }

    const calculateTotal = (index: number) => {
      const quantity = getValues(`${name}.${index}.quantity`);
      let price = getValues(`${name}.${index}.price`);
      price = parseFloat((price || '0').toString().replace(/\D/g, '')) / 100;

      const total = quantity * price;
      setValue((`${name}.${index}.total`), formatCurrency(total.toFixed(2)));
    };

    const handleAdd = () => {
      append({});
      setTimeout(() => { calculateTotal(fields.length), 0 });
    }

    return (
      <div className={'flex flex-col gap-2'} {...props} ref={ref}>
        {fields.map((field, index) => (
          <div key={field.id} className="relative group">
            <div className={cn('grid grid-flow-col grid-cols-6 gap-1', className)}>
              <Input
                placeholder="Nome"
                className='col-span-3'
                {...register(`${name}.${index}.nome`, { required: true })}
                error={(errors[name] as any)?.[index]?.nome?.message}
              />
              <Input
                type='number'
                inputClassName='text-right'
                min={1}
                step={1}
                defaultValue={1}
                {...register(`${name}.${index}.quantity`, {
                  onChange: (e) => handleQuantityChange(e, index)
                })}
                error={(errors[name] as any)?.[index]?.quantity?.message}
              />
              <InputCurrency
                onKeyUp={(e) => handlePriceChange(e, index)}
                {...register(`${name}.${index}.price`)}
              />
              <Input
                inputClassName='text-right'
                disabled
                {...register(`${name}.${index}.total`)}
              />
              <Button
                title='Remover'
                variant='link'
                icon='FaTrashAlt'
                size='icon'
                className='absolute top-0 -right-8 rounded-full transform translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-destructive'
                onClick={() => remove(index)}
              />
            </div>
          </div>
        ))}
        <div className='col-span-4'>
          <Button
            variant='link'
            icon='FaPlusSquare'
            className='w-min px-0'
            onClick={handleAdd}
          >
            adicionar
          </Button>
        </div>
      </div>
    );
  });