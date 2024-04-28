import { Icon } from '@/components/ui/Icon';
import React from 'react';
import { NavbarItem, useNavbar } from './useNavbar';
import { Link } from 'react-router-dom';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { items } = useNavbar();

  function getLink(key: number, item: NavbarItem) {
    return  (
      <Link key={key} to={item.route} className='text-primary px-2 py-4 hover:pt-3 hover:pb-5 transition-all' title={item.label}>
        <Icon name={item.icon} size='md' />
      </Link>
    );
  }

  return (
    <nav className='flex px-4 justify-between rounded-sm bg-tertiary' {...props}>
      <div className='flex'>
        {items.map((item, index) => getLink(index, item))}
      </div>
      <div className='flex'>
        {getLink(0, { icon: 'FaBell', route: 'notifications', label: 'Notifications' })}
      </div>
    </nav>
  );
};
