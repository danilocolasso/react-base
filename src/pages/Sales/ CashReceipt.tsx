import { Section } from '@/components/Section';
import { Select, SelectOption } from '@/components/Select';
import React from 'react';
import { useSales } from './useSales';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';

export interface CashReciptProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CashRecipt: React.FC<CashReciptProps> = ({ children, ...props }) => {
  const { register, errors } = useSales();

  const receivingMethodOptions: SelectOption[] = [
    {
      label: 'Receiving 1',
      value: '1',
    },
  ];

  const inputAccountOptions: SelectOption[] = [
    {
      label: 'Account 1',
      value: '1',
    },
  ];

  const requesterOption: SelectOption[] = [
    {
      label: 'Requester 1',
      value: '1',
    },
  ];

  return (
    <Section title='Recebimentos à vista' {...props}>
      <div className='flex gap-4'>
        <Select
          label='Forma de recebimento'
          className='w-2/5'
          options={receivingMethodOptions}
          { ...register('receivingMethod') }
          error={errors.receivingMethod?.message}
        />
        <Select
          label='Conta de entrada'
          className='w-3/5'
          options={inputAccountOptions}
          { ...register('inputAccount') }
          error={errors.inputAccount?.message}
        />
      </div>

      <Textarea
        label='Histórico'
        // className='w-3/5'
        { ...register('history') }
        error={errors.history?.message}
      />

      <div className='flex gap-4'>
        <Input
          label='Prazo de entrega previsto'
          className='w-2/5'
          { ...register('deliveryDeadlinePreview') }
          error={errors.deliveryDeadlinePreview?.message}
        />
        <Textarea
          label='Observações'
          className='w-3/5'
          { ...register('observations') }
          error={errors.observations?.message}
        />
      </div>
    </Section>
  );
};