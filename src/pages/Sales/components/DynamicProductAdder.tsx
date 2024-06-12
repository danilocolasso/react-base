import { DynamicElementAdder } from '@/components/DynamicElementAdder';
import { Input } from '@/components/Input';
import { useState } from 'react';
import { useFormContext } from '@/components/Form';
import { formatCurrency } from '@/utils/formatCurrency';

export interface DynamicProductAdderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: 'goodsForSale' | 'selfManufacturedGoods' | 'otherStocks' | 'services';
}

export const DynamicItemAdder: React.FC<DynamicProductAdderProps> = ({ name, children, ...props }) => {
  const [index, setIndex] = useState(0);

  const { register, formState: { errors }, getValues, setValue, resetField } = useFormContext();

  const calculateTotal = (index: number) => {
    const quantidade = getValues(`${name}.${index}.quantidade`);
    let valorUnitario = getValues(`${name}.${index}.valorUnitario`);
    valorUnitario = parseFloat((valorUnitario || '0').toString().replace(/\D/g, '')) / 100;

    const total = quantidade * valorUnitario;
    setValue((`${name}.${index}.total`), formatCurrency(total.toFixed(2)));
  };

  const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let quantidade = parseInt(e.target.value || '0');
    setValue(`${name}.${index}.quantidade`, quantidade);
    calculateTotal(index);
  }

  const handleValorUnitarioChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setValue(`${name}.${index}.valorUnitario`, formatCurrency(e.target.value))
    calculateTotal(index);
  }

  const handleAdd = (index: number) => {
    setIndex(index + 1);
  }

  const handleRemove = (index: number) => {
    resetField(`${name}.${index}.quantidade`);
    resetField(`${name}.${index}.valorUnitario`);
    resetField(`${name}.${index}.total`);
    calculateTotal(index - 1);
  }
  
  return (
    <DynamicElementAdder
      className='flex flex-col gap-2'
      onAdd={() => handleAdd(index)}
      onRemove={() => handleRemove(index)}
      {...props}
    >
      <div className='grid grid-flow-col grid-cols-6 gap-1'>
        <Input
          className='col-span-3'
          {...register(`${name}.${index}.nome`)}
          error={(errors[name] as any)?.[index]?.nome?.message}
        />
        <Input
          type='number'
          inputClassName='text-right'
          min={1}
          step={1}
          defaultValue={1}
          {...register(`${name}.${index}.quantidade`, {
            onChange: (e) => handleQuantidadeChange(e, index)
          })}
          error={(errors[name] as any)?.[index]?.quantidade?.message}
        />
        <Input
          inputClassName='text-right'
          step={0.05}
          {...register(`${name}.${index}.valorUnitario`, {
            onChange: (e) => handleValorUnitarioChange(e, index)
          })}
        />
        <Input
          inputClassName='text-right'
          disabled
          {...register(`${name}.${index}.total`)}
        />
      </div>
    </DynamicElementAdder>
  );
};