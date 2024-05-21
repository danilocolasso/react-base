import { cn } from '@/utils/className';
import React from 'react';
import logo from '@/assets/logo.png';
import { Navbar } from '@/components/Navbar';
import { HeaderUser } from '../HeaderUser';
import { Link } from 'react-router-dom';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cn('flex flex-col gap-4 pb-4 bg-gray-100', className)} {...props}>
      <div className='flex justify-between pl-4'>
        <Link to='/'>
          <img src={logo} alt='logo' className='mt-4 h-20 cursor-pointer' />
        </Link>
        <HeaderUser />
      </div>
      <Navbar />
    </header>
  );
};
