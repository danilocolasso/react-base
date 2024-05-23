import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import React from 'react';
import { useSales } from './useSales';
import { Textarea } from '@/components/Textarea';

export interface TaxesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Taxes: React.FC<TaxesProps> = ({ children, ...props }) => {
  const { register, errors } = useSales();

  return (
    <Section title='Impostos' {...props}>
      <div className='grid grid-flow-col gap-1'>
        <Label className='col-span-4'>Tipo</Label>
        <Label>Provisão do tributo a recolher</Label>
        <Label>Data de vencimento</Label>
        <Label>Valor</Label>
      </div>
      <div className='grid grid-flow-col gap-1'>
        <div className='col-span-4'>
          <Button
            variant='link'
            icon='FaPlusSquare'
            className='w-min px-0'
            // onClick={}
            >
            adicionar imposto
          </Button>
          <Textarea
            label='Informações complementares'
            { ...register('additionalInfo') }
            error={errors.additionalInfo?.message}
          />
        </div>
      </div>
    </Section>
  );
};