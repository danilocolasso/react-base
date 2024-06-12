import { Input } from '@/components/Input';
import { Section } from '@/components/Section';
import React from 'react';
import { Select, SelectOption } from '@/components/Select';
import { useFormContext } from '@/components/Form';

export interface SaleInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SaleInfo: React.FC<SaleInfoProps> = ({ children, ...props }) => {
  const { register, formState: { errors } } = useFormContext();

  const sellerOptions: SelectOption[] = [
    {
      label: 'Vendedor 1',
      value: '1',
    },
    {
      label: 'Vendedor 2',
      value: '2',
    },
    {
      label: 'Vendedor 3',
      value: '3',
    },
  ];

  const customerOptions: SelectOption[] = [
    {
      label: 'Customer 1',
      value: '1',
    },
  ];

  const requesterOption: SelectOption[] = [
    {
      label: 'Requester 1',
      value: '1',
    },
  ];

  const getTitle = () => (
    <h2 className='text-xl font-medium'>
      Venda 001/16
    </h2>
  )

  const getSubtitle = () => (
    <div className='flex gap-2 justify-between'>
      <span>03 de Abril de 2016, 21:46</span>
      <span>Responsável: Ester Scheffer</span>
    </div>
  )

  return (
    <Section title={getTitle()} subtitle={getSubtitle()} {...props}>
      <div className='flex gap-4'>
        <Input
          type='date'
          label='Data'
          className='w-1/3'
          { ...register('date') }
          error={errors.date?.message as string}
        />
        <Select
          name='seller'
          label='Vendedor'
          className='w-2/3'
          options={sellerOptions}
          error={errors.seller?.message as string}
        />
      </div>

      <div className='flex gap-4'>
        <Select
          name='customer'
          label='Cliente'
          className='w-2/5'
          options={customerOptions}
          error={errors.customer?.message as string}
        />
        <Select
          name='requester'
          label='Solicitante'
          className='w-1/5'
          options={requesterOption}
          error={errors.requester?.message as string}
        />
        <Input
          type='text'
          label='Email'
          className='w-2/5'
          { ...register('email') }
          error={errors.email?.message as string}
        />
      </div>
    </Section>
  );
};