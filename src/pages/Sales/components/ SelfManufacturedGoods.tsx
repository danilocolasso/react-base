import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import React from 'react';
import { Total } from './Total';
import { DynamicItemAdder } from './DynamicItemAdder';

export interface SelfManufacturedGoodsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SelfManufacturedGoods: React.FC<SelfManufacturedGoodsProps> = ({ children, ...props }) => {
  return (
    <Section title='Bens de fabricação própria' {...props}>
      <div className='grid grid-flow-col gap-1'>
        <Label className='col-span-4'>Item</Label>
        <Label>Quantidade</Label>
        <Label>Valor unitário</Label>
        <Label>Total</Label>
      </div>
      <DynamicItemAdder fieldName='selfManufacturedGoods' />
      <Total label='Total em bens de fabricação própria' value='0.00' />
    </Section>
  );
};