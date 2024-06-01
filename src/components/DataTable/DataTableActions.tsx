import { Button } from '@/components/Button';
import { ButtonVariantProps } from '@/components/Button/buttonVariants';
import { Icons } from '@/components/Icon';
import { cn } from '@/utils/className';

export interface TableAction<T> extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>, ButtonVariantProps {
  label?: string;
  icon?: keyof typeof Icons;
  onClick: (item: T) => void;
}

export interface DataTableActionsProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  actions: TableAction<T>[];
  row: T;
}

export const DataTableActions = <T,>({ actions, row }: DataTableActionsProps<T>) => {
  if (!actions) return;

  return (
    <div className='flex gap-1 items-center justify-end'>
      { actions.map((action, index) => {
        const { onClick, ...props } = action;
        
        return (
          <Button
            {...props}
            key={index}
            onClick={() => onClick(row)}
            className={cn('text-xs p-3 h-6 font-normal', { 'w-6 rounded-full' : action.icon && !action.label})}
            iconClassName='w-3 h-3'
          >
            {action.label}
          </Button>
        )
      })}
    </div>
  );
}