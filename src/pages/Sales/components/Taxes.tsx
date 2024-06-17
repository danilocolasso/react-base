import { Section } from '@/components/Section';
import React from 'react';
import { Textarea } from '@/components/Textarea';
import { MultipleTaxes } from './MultipleTaxes';
import { useFormContext } from 'react-hook-form';

export interface TaxesProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Taxes: React.FC<TaxesProps> = ({ children, ...props }) => {
  const { register, formState: { errors } } = useFormContext();

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
          <MultipleTaxes />
          <Textarea
            {...register('additionalInfo')}
            label='Informações complementares'
            error={errors.additionalInfo?.message as string}
          />
        </div>
      </div>
    </Section>
  );
};