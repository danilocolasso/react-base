import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import React from 'react';
import { Total } from './Total';

export interface OtherStocksProps extends React.HTMLAttributes<HTMLDivElement> {}

export const OtherStocks: React.FC<OtherStocksProps> = ({ children, ...props }) => {
  return (
    <Section title='Outros estoques' {...props}>
      <div className='grid grid-flow-col gap-1'>
        <Label className='col-span-4'>Item</Label>
        <Label>Quantidade</Label>
        <Label>Valor unitário</Label>
        <Label>Total</Label>
      </div>
      <div className='grid grid-flow-col gap-1'>
        <div className='col-span-4'>
          <Button
            variant='link'
            icon='FaPlusSquare'
            className='w-min px-0'
            // onClick={}
            >
            adicionar
          </Button>
        </div>
      </div>
      <Total label='Total em outros estoques' value='0.00' />
    </Section>
  );
};