import React from 'react';
import { useBreadcrumbs } from './useBreadcrumbs';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/className';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, className, ...props }) => {
  const { items } = useBreadcrumbs();

  return (
    <nav className='flex gap-4 px-4 py-2 rounded-sm bg-gray-100' {...props}>
      <ul className='flex'>
        {items.map((item, index) => (
          <li key={index} className={cn({'after:content-["/"] after:mx-2 text-tertiary' : !item.current})}>
            <Link
              to={item.route}
              className={item.current ? 'pointer-events-none cursor-default text-tertiary' : 'text-brand-primary hover:text-brand-secondary'}
              >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};