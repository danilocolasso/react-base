import { cn } from '@/utils/className';
import React from 'react';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar: React.FC<NavbarProps> = ({ children, className, ...props }) => {
  return (
    <header className={cn('flex pb-4 flex-col bg-red-200', className)} {...props}>
      {children}
    </header>
  );
};
