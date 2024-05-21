import { cn } from '@/utils/className';
import React from 'react';
import { Divider } from '../Divider';

type HTMLAttributesWithoutTitle = Omit<React.HTMLAttributes<HTMLElement>, 'title'>;

export interface SectionProps extends HTMLAttributesWithoutTitle {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className, ...props }) => (
  <section className={cn('flex flex-col gap-2', className)} {...props}>
    <div className='flex gap-2 justify-between'>
      <div className='w-1/3'>
        {typeof title === 'string' ? <h2 className='text-lg'>{title}</h2> : title}
      </div>
      <div className='w-2/3'>{subtitle}</div>
    </div>
    <Divider />
    {children}
  </section>
);
