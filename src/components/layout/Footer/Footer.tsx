import { cn } from '@/utils/className';
import React from 'react';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = ({ children, className, ...props }) => {
  return (
    <footer className={cn('flex flex-col bg-green-200', className)} {...props}>
      {children}
    </footer>
  );
};
