import { Icon } from '@/components/Icon';
import { NavbarItem } from '@/components/Navbar/useNavbar';
import { Paper } from '@/components/Paper/Paper';
import { PaperVariantProps } from '@/components/Paper/paperVariants';
import { cn } from '@/utils/className';
import React from 'react';
import { Link } from 'react-router-dom';

export interface ActionProps extends React.HTMLAttributes<HTMLDivElement>, PaperVariantProps {
  item: NavbarItem;
}

export const Action: React.FC<ActionProps> = ({ children, item, className, ...props }) => {
  return (
    <Link to={item.route} className='flex flex-col gap-4 items-center text-white group'>
      <Paper variant='primary' className={cn('flex min-w-32 border-b-8 border-black/20', className)} {...props}>
        <div className='flex flex-col gap-4 items-center text-white'>
          <Icon name={item.icon} size='2xl' className='group-hover:-mt-1 group-hover:mb-1 transition-all' />
          <h1 className='text-xl'>{item.label}</h1>
        </div>
      </Paper>
    </Link>
  )
};
