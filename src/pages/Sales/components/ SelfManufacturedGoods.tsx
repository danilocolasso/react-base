import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import React from 'react';
import { Total } from './Total';

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
      <Total label='Total em bens de fabricação própria' value='0.00' />
    </Section>
  );
};