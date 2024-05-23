import { Input, InputProps } from '@/components/Input/Input';
import React from 'react';
import { Icon } from '../Icon';

export interface InputSearchProps extends InputProps { }

export const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  (props, ref) => (
    <div className='relative'>
      <Icon name='FaSearch' className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400' />
      <Input
        type='search'
        inputClassName='pl-8'
        {...props}
        ref={ref}
      />
    </div>
));