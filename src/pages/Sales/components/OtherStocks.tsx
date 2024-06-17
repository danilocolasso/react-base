import { Section } from '@/components/Section';
import React from 'react';
import { Total } from './Total';
import { MultipleProduct } from './MultipleProduct';

export interface OtherStocksProps extends React.HTMLAttributes<HTMLDivElement> {}

export const OtherStocks: React.FC<OtherStocksProps> = ({ children, ...props }) => {
  return (
    <Section title='Outros estoques' {...props}>
      <div className='grid grid-flow-col grid-cols-6 gap-1'>
        <span className='col-span-3'>Item</span>
        <span>Quantidade</span>
        <span>Valor unitário</span>
        <span>Total</span>
      </div>
      <MultipleProduct name='otherStocks' />
      <Total label='Total em outros estoques' value='0.00' />
    </Section>
  );
};