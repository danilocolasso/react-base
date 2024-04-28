import React from 'react';
import { Icon, Icons } from '@/components/ui/Icon';
import { useHeaderUser } from './useHeaderUser';
import { Link } from 'react-router-dom';

export interface HeaderUserProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeaderUser: React.FC<HeaderUserProps> = ({ className, ...props }) => {
  const { actions } = useHeaderUser();

  return (
    <div className='flex gap-8 pl-8 bg-brand-secondary text-white' {...props}>
      <div className='flex items-center gap-2 p-4'>
        <Icon name='FaUser' size='md' className='self-start mt-2' />
        <div className='flex flex-col'>
          <span className='text-lg'>Ester Scheffer</span>
          <span className='text-sm'>10/12/2015 15:49</span>
        </div>
      </div>

      <div className='flex gap-8 p-4 bg-brand-primary self-center'>
        {actions.map((action, index) => (
          <Link key={index} to={action.route} className='flex gap-2 items-center'>
            <Icon name={action.icon as keyof typeof Icons} />
            <span className='text-sm'>{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
