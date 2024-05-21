import { cn } from '@/utils/className';
import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}

export const Divider: React.FC<DividerProps> = ({ className, ...props }) => (
  <hr className={cn('border-gray-200', className)} {...props} />
);