import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Label } from '@radix-ui/react-label';
import React from 'react';
import { Total } from './Total';

export interface GoodsForSaleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GoodsForSale: React.FC<GoodsForSaleProps> = ({ children, ...props }) => {
  return (
    <Section title='Mercadorias para revenda' {...props}>
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
      <Total label='Total em mercadorias para revenda' value='0.00' />
    </Section>
  );
};