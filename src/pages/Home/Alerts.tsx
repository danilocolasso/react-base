import { cn } from '@/utils/className';
import React from 'react';

export interface AlertsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Alerts: React.FC<AlertsProps> = ({ className, ...props }) => {
  return (
    <section className={cn('flex flex-col w-full p-4 bg-primary text-white rounded-lg', className)} {...props}>
      <h1 className='text-3xl text-center'>Painel de Alertas</h1>
    </section>
  );
};
