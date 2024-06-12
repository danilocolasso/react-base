import { Section } from '@/components/Section';
import React from 'react';
import { Total } from './Total';
import { DynamicItemAdder } from './DynamicProductAdder';

export interface SelfManufacturedGoodsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SelfManufacturedGoods: React.FC<SelfManufacturedGoodsProps> = ({ children, ...props }) => {
  return (
    <Section title='Bens de fabricação própria' {...props}>
      <div className='grid grid-flow-col grid-cols-6 gap-1'>
        <span className='col-span-3'>Item</span>
        <span>Quantidade</span>
        <span>Valor unitário</span>
        <span>Total</span>
      </div>
      <DynamicItemAdder name='selfManufacturedGoods' />
      <Total label='Total em bens de fabricação própria' value='0.00' />
    </Section>
  );
};