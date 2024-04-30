import { cn } from '@/utils/className';
import React from 'react';

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  return (
    <main className={cn('flex flex-col gap-4 w-full p-4 bg-brand-tertiary', className)} {...props}>
      {children}
    </main>
  );
};
