import { cn } from '@/utils/className';
import React from 'react';
import { useSidebar } from './useSidebar';
import { SidebarItem } from './SidebarItem';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar: React.FC<SidebarProps> = ({ className, ...props }) => {
  const { items } = useSidebar();
  return (
    <div className={cn('flex flex-col w-1/3 ', className)} {...props}>
      <aside className='bg-gray-100'>
        <ul>
          {items.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </ul>
      </aside>
    </div>
  );
};
