import { Icon, Icons } from '@/components/Icon';
import { Divider } from '@/components/Divider';
import { cn } from '@/utils/className';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface SidebarItemProps {
  icon?: keyof typeof Icons;
  label?: string;
  route?: string;
  children?: SidebarItemProps[];
  active?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, route, children, active }) => {
  const [open, setOpen] = useState(false);
  const className = cn('flex items-center text-gray-600 gap-2 px-8 py-4 cursor-pointer hover:bg-brand-tertiary', { 'bg-brand-tertiary' : active && !children });

  function handleToggleOpen() {
    setOpen(!open);
  }

  function getLink() {
    return (
      <Link to={route!} className={className}>
        {icon && <Icon name={icon} size='md' className='!text-gray-600' />}
        <span className='text-sm'>{label}</span>
      </Link>
    );
  }

  function getFather() {
    return (
      <a onClick={handleToggleOpen} className={className}>
        {icon && <Icon name={icon} size='md' className='!text-gray-600' />}
        <span className='text-sm'>{label}</span>
        <Icon name={open ? 'FaChevronDown' : 'FaChevronLeft'} size='xs' className='ml-auto text-gray-600' />
      </a>
    );
  }

  function getChildren() {
    return (
      <ul className={cn('flex flex-col', { 'hidden' : !open })}>
        {children!.map((child, index) => (
          <SidebarItem key={index} {...child} />
        ))}
      </ul>
    );
  }

  if (!route && !children) {
    return <Divider />;
  }
  
  return (
    <li>
      {children ? getFather() : getLink()}
      {children && getChildren()}
    </li>
  );
};