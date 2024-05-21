import { MainLayout } from '@/layouts/MainLayout';
import { GoodsForSale } from './GoodsForSale';
import { Services } from './Services';
import { SelfManufacturedGoods } from './ SelfManufacturedGoods';
import { OtherStocks } from './OtherStocks';
import { CashRecipt } from './ CashReceipt';
import { Taxes } from './Taxes';
import { SaleInfo } from './SaleInfo';
import { Button } from '@/components/Button';

export const Sales = () => {
  return (
    <MainLayout className='gap-8'>
      <SaleInfo />
      <GoodsForSale />
      <Services />
      <SelfManufacturedGoods />
      <OtherStocks />
      <div className='flex items-center justify-center text-gray-500 font-medium'>
        <span>Total da venda</span>
        <span className='self-end place-self-end snap-end'>R$ 0,00</span>
      </div>
      <CashRecipt />
      <Taxes />
      <Button className='self-start'>Registrar</Button>
    </MainLayout>
  )
};
