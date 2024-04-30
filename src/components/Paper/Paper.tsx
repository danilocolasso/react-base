import React from 'react';
import { Card } from '@/components/Card';
import { cn } from '@/utils/className';
import { PaperBorderVariantProps, PaperVariantProps, paperBorderVariants, paperVariants } from './paperVariants';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement>, PaperVariantProps, PaperBorderVariantProps {}

export const Paper: React.FC<PaperProps> = ({ variant, children, className, ...props }) => {
  return (
    <div className={cn(paperVariants({ variant }), className)} {...props}>
      <div className={cn(paperBorderVariants({ variant }))}></div>
      <Card className='gap-4 p-4 py-10 bg-transparent'>
        {children}
      </Card>
    </div>
  );
};