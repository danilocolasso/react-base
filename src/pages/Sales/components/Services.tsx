import { Section } from '@/components/Section';
import React from 'react';
import { Total } from './Total';
import { MultipleProduct } from './MultipleProduct';

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Services: React.FC<ServicesProps> = ({ children, ...props }) => {
  return (
    <Section title='Serviços' {...props}>
      <div className='grid grid-flow-col grid-cols-6 gap-1'>
        <span className='col-span-3'>Item</span>
        <span>Quantidade</span>
        <span>Valor unitário</span>
        <span>Total</span>
      </div>
      <MultipleProduct name='services' />
      <Total label='Total em serviços' value='0.00' />
    </Section>
  );
};