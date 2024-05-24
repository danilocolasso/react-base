import { DynamicElementAdder } from '@/components/DynamicElementAdder';
import { Input } from '@/components/Input';
import { useState } from 'react';
import { useSales } from '../useSales';

export interface DynamicItemAdderProps extends React.HTMLAttributes<HTMLDivElement> {
  fieldName: 'goodsForSale' | 'selfManufacturedGoods' | 'otherStocks' | 'services';
}

export const DynamicItemAdder: React.FC<DynamicItemAdderProps> = ({ fieldName, children, ...props }) => {
  const [index, setIndex] = useState(0);

  const { register, calculateTotal, errors } = useSales();
  
  return (
    <DynamicElementAdder
      className='flex flex-col gap-2'
      onAdd={() => setIndex(index + 1)}
      onRemove={() => setIndex(index - 1)}
      {...props}
    >
      <div className='grid grid-flow-col grid-cols-6 gap-1'>
        <Input
          className='col-span-3'
          {...register(`${fieldName}.${index}.nome`)}
          error={errors[fieldName]?.[index]?.nome?.message}
        />
        <Input
          type='number'
          min={1}
          dir='rtl'
          step={1}
          {...register(`${fieldName}.${index}.quantidade`, {
            onChange: () => calculateTotal(index)
          })}
          error={errors[fieldName]?.[index]?.quantidade?.message}
        />
        <Input
          type='number'
          dir='rtl'
          step={0.05}
          {...register(`${fieldName}.${index}.valorUnitario`, {
            onChange: () => calculateTotal(index)
          })}
          error={errors[fieldName]?.[index]?.valorUnitario?.message}
        />
        <Input
          type='number'
          dir='rtl'
          readOnly
          {...register(`${fieldName}.${index}.total`)}
          error={errors[fieldName]?.[index]?.total?.message}
        />
      </div>
    </DynamicElementAdder>
  );
};