import React from 'react';
import { Button } from '@/components/Button';
import { cn } from '@/utils/className';
import { useDynamicElementAdder } from './useDynamicelementAdder';

export interface DynamicElementAdderProps extends React.HTMLAttributes<HTMLDivElement> {
  onAdd?: (index: number) => void;
  onRemove?: (index: number) => void;
}

export const DynamicElementAdder = React.forwardRef<HTMLDivElement, DynamicElementAdderProps>(
  ({
    children,
    className,
    onAdd,
    onRemove,
    ...props

  }, ref) => {
  const { elements, addElement, removeElement } = useDynamicElementAdder();

  return (
    <div className={'flex flex-col gap-2'} {...props} ref={ref}>
      <div className={cn('grid grid-flow-col gap-4', className)}>
        {elements.map((element, index) => (
          <div key={index} className="relative group">
            {element}
            <Button
              title='Remover'
              variant='link'
              icon='FaTrashAlt'
              size='icon'
              className='absolute top-0 -right-8 rounded-full transform translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-destructive'
              onClick={() => removeElement(index, onRemove)}
            />
          </div>
        ))}
      </div>
      <div className='col-span-4'>
        <Button
          variant='link'
          icon='FaPlusSquare'
          className='w-min px-0'
          onClick={() => addElement(children, onAdd)}
        >
          adicionar
        </Button>
      </div>
    </div>
  );
});
