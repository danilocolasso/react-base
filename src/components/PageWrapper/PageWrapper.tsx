import { cn } from '@/utils/className';
import React from 'react';

export interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('flex flex-col flex-grow w-full max-w-7xl', className)} {...props}>
      {children}
    </div>
  );
};
