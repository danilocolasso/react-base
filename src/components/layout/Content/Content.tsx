import { cn } from '@/utils/className';
import React from 'react';

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Content: React.FC<ContentProps> = ({ children, className, ...props }) => {
  return (
    <main className={cn('flex flex-col w-full min-h-screen bg-blue-200', className)} {...props}>
      {children}
    </main>
  );
};
