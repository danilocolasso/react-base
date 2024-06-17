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

    const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      let quantidade = parseInt(e.target.value || '0');
      setValue(`${name}.${index}.quantidade`, quantidade);
      calculateTotal(index);
    }

    const handleValorUnitarioChange = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      setValue(`${name}.${index}.valorUnitario`, formatCurrency(e.currentTarget.value))
      calculateTotal(index);
    }

    const calculateTotal = (index: number) => {
      const quantidade = getValues(`${name}.${index}.quantidade`);
      let valorUnitario = getValues(`${name}.${index}.valorUnitario`);
      valorUnitario = parseFloat((valorUnitario || '0').toString().replace(/\D/g, '')) / 100;

      const total = quantidade * valorUnitario;
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
                {...register(`${name}.${index}.quantidade`, {
                  onChange: (e) => handleQuantidadeChange(e, index)
                })}
                error={(errors[name] as any)?.[index]?.quantidade?.message}
              />
              <InputCurrency
                onKeyUp={(e) => handleValorUnitarioChange(e, index)}
                {...register(`${name}.${index}.valorUnitario`)}
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