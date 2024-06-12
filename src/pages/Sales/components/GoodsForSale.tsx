import { Section } from '@/components/Section';
import React from 'react';
import { Total } from './Total';
import { DynamicItemAdder } from './DynamicProductAdder';

export interface GoodsForSaleProps extends React.HTMLAttributes<HTMLDivElement> { }

export const GoodsForSale: React.FC<GoodsForSaleProps> = ({ children, ...props }) => {
  return (
    <Section title='Mercadorias para revenda' {...props}>
      <div className='grid grid-flow-col grid-cols-6 gap-1'>
        <span className='col-span-3'>Item</span>
        <span>Quantidade</span>
        <span>Valor unitário</span>
        <span>Total</span>
      </div>
      <DynamicItemAdder name='goodsForSale' />
      <Total label='Total em mercadorias para revenda' value='0.00' />
    </Section>
  );
};