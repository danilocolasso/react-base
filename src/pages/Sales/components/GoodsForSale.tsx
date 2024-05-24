import { Section } from '@/components/Section';
import { Label } from '@radix-ui/react-label';
import React from 'react';
import { Total } from './Total';
import { DynamicItemAdder } from './DynamicItemAdder';

export interface GoodsForSaleProps extends React.HTMLAttributes<HTMLDivElement> { }

export const GoodsForSale: React.FC<GoodsForSaleProps> = ({ children, ...props }) => {
  return (
    <Section title='Mercadorias para revenda' {...props}>
      <div className='grid grid-flow-col grid-cols-6 gap-1'>
        <Label className='col-span-3'>Item</Label>
        <Label className='col-span-1'>Quantidade</Label>
        <Label className='col-span-1'>Valor unitário</Label>
        <Label className='col-span-1'>Total</Label>
      </div>
      <DynamicItemAdder fieldName='goodsForSale' />
      <Total label='Total em mercadorias para revenda' value='0.00' />
    </Section>
  );
};