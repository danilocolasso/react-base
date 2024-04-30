import { cn } from '@/utils/className';
import React from 'react';

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Screen: React.FC<ScreenProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('flex flex-col items-center w-full min-h-screen overflow-y-auto', className)} {...props}>
      {children}
    </div>
  );
};
