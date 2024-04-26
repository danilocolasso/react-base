import { Icon } from '@/components/ui/Icon';
import React from 'react';
import { useNavbar } from './useNavbar';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar: React.FC<NavbarProps> = ({ className, ...props }) => {
  const { items } = useNavbar();

  return (
    <nav className='flex gap-4 px-4 py-2 rounded-md bg-gray-300' {...props}>
      {items.map((item, index) => (
        <a key={index} href={item.route} className='text-primary'>
          <Icon name={item.icon} size='medium' />
        </a>
      ))}
    </nav>
  );
};
