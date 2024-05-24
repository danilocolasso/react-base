import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import React from 'react';
import { Total } from './Total';
import { DynamicItemAdder } from './DynamicItemAdder';

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Services: React.FC<ServicesProps> = ({ children, ...props }) => {
  return (
    <Section title='Serviços' {...props}>
      <div className='grid grid-flow-col gap-1'>
        <Label className='col-span-4'>Item</Label>
        <Label>Quantidade</Label>
        <Label>Valor unitário</Label>
        <Label>Total</Label>
      </div>
      <DynamicItemAdder fieldName='services' />
      <Total label='Total em serviços' value='0.00' />
    </Section>
  );
};