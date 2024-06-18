import { Button } from '@/components/Button';
import { useFormContext, useFieldArray } from '@/components/Form';
import { Input } from '@/components/Input';
import { InputCurrency } from '@/components/InputCurrency';
import { Select } from '@/components/Select';
import { cn } from '@/utils/className';
import React from 'react';

export interface MultipleTaxesProps extends React.HTMLAttributes<HTMLDivElement> { }

export const MultipleTaxes = React.forwardRef<HTMLDivElement, MultipleTaxesProps>(
  ({ children, className, ...props }, ref) => {
    const { control, register, formState: { errors } } = useFormContext();
    const { fields, append, remove } = useFieldArray({
      control,
      name: 'taxes'
    });

    const taxTypes = [
      {
        label: 'ICMS',
        value: 'ICMS',
      },
      {
        label: 'IPI',
        value: 'IPI',
      },
      {
        label: 'PIS',
        value: 'PIS',
      },
      {
        label: 'COFINS',
        value: 'COFINS',
      },
      {
        label: 'ISS',
        value: 'ISS',
      },
      {
        label: 'IRPJ',
        value: 'IRPJ',
      },
      {
        label: 'CSLL',
        value: 'CSLL',
      },
      {
        label: 'INSS',
        value: 'INSS',
      },
      {
        label: 'FGTS',
        value: 'FGTS',
      },
      {
        label: 'IPTU',
        value: 'IPTU',
      },
      {
        label: 'IPVA',
        value: 'IPVA',
      },
      {
        label: 'ITR',
        value: 'ITR',
      },
    ];

    return (
      <div className={'flex flex-col gap-2'} {...props} ref={ref}>
        {fields.map((field, index) => (
          <div key={field.id} className="relative group">
            <div className={cn('grid grid-flow-col grid-cols-12 gap-1', className)}>
              <Select
                className='col-span-4'
                options={taxTypes}
                {...register(`taxes.${index}.taxType`)}
                error={(errors.taxes as any)?.[index]?.taxType?.message}
              />
              <InputCurrency
                className='col-span-3'
                {...register(`taxes.${index}.taxValue`)}
                error={(errors.taxes as any)?.[index]?.value?.message}
              />
              <Input
                type='date'
                className='col-span-3'
                {...register(`taxes.${index}.dueDate`)}
                error={(errors.taxes as any)?.[index]?.dueDate?.message}
              />
              <InputCurrency
                className='col-span-2'
                {...register(`taxes.${index}.value`)} // To do: Fix onChange option
                // onChange={(e) => { }} // This one works
                error={(errors.taxes as any)?.[index]?.value?.message}
              />
            </div>
            <Button
              title='Remover'
              variant='link'
              icon='FaTrashAlt'
              size='icon'
              className='absolute top-0 -right-8 rounded-full transform translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-destructive'
              onClick={() => remove(index)}
            />
          </div>
        ))}
        <div className='col-span-4'>
          <Button
            variant='link'
            icon='FaPlusSquare'
            className='w-min px-0'
            onClick={() => append({})}
          >
            adicionar
          </Button>
        </div>
      </div>
    );
  });