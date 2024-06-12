import { Section } from '@/components/Section';
import React, { useState } from 'react';
import { Textarea } from '@/components/Textarea';
import { useFormContext } from '@/components/Form';
import { DynamicElementAdder } from '@/components/DynamicElementAdder';
import { Input } from '@/components/Input';
import { InputCurrency } from '@/components/InputCurrency';
import { Select } from '@/components/Select';

export interface TaxesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Taxes: React.FC<TaxesProps> = ({ children, ...props }) => {
  const [index, setIndex] = useState(0);
  
  const { register, formState: { errors } } = useFormContext();

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
    <Section title='Impostos' {...props}>
      <div className='grid grid-flow-col grid-cols-12 gap-1'>
        <span className='col-span-4'>Tipo</span>
        <span className='col-span-3'>Provisão do tributo a recolher</span>
        <span className='col-span-3'>Data de vencimento</span>
        <span className='col-span-2'>Valor</span>
      </div>
      <div className='grid grid-flow-col gap-1'>
        <div className='col-span-4'>
        <DynamicElementAdder
          className='flex flex-col gap-2'
          onAdd={() => setIndex(index + 1)}
          onRemove={() => setIndex(index - 1)}
          {...props}
        >
          <div className='grid grid-flow-col grid-cols-12 gap-1'>
            <Select
              className='col-span-4'
              options={taxTypes}
              {...register(`taxes.${index}.tipo`)}
              error={(errors.taxes as any)?.[index]?.tipo?.message}
            />
            <InputCurrency
              className='col-span-3'
              {...register(`taxes.${index}.tributoRecolher`)}
              error={(errors.taxes as any)?.[index]?.valor?.message}
            />
            <Input
              type='date'
              className='col-span-3'
              {...register(`taxes.${index}.vencimento`)}
              error={(errors.taxes as any)?.[index]?.vencimento?.message}
            />
            <InputCurrency
              className='col-span-2'
              {...register(`taxes.${index}.valor`)} // To do: Fix onChange option
              onChange={(e) => {}} // This one works
              error={(errors.taxes as any)?.[index]?.valor?.message}
            />
          </div>
        </DynamicElementAdder>
          <Textarea
            name='additionalInfo'
            label='Informações complementares'
          />
        </div>
      </div>
    </Section>
  );
};