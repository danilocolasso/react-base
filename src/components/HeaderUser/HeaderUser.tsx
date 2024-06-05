import React from 'react';
import { Icon } from '@/components/Icon';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import { useAuth } from '@/contexts/Auth/useAuth';

export interface HeaderUserProps extends React.HTMLAttributes<HTMLDivElement> { }

export const HeaderUser: React.FC<HeaderUserProps> = ({ className, ...props }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

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
        <Link to='/settings' className='flex gap-2 items-center'>
          <Button
            variant='link'
            icon='FaCog'
            className='flex gap-2 items-center text-white font-normal'
          >
            Configurações
          </Button>
        </Link>
        <Button
          variant='link'
          icon='FaSignOutAlt'
          className='flex gap-2 items-center text-white font-normal'
          onClick={handleLogout}
        >
          Sair
        </Button>
      </div>
    </div>
  );
};
