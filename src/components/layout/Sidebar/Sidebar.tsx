import { cn } from '@/utils/className';
import React from 'react';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar: React.FC<SidebarProps> = ({ children, className, ...props }) => {
  return (
    <aside className={cn('flex flex-col bg-yellow-200', className)} {...props}>
      {children}
    </aside>
  );
};
