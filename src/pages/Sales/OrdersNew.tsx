import { MainLayout } from '@/layouts/MainLayout';
import { GoodsForSale } from './components/GoodsForSale';
import { Services } from './components/Services';
import { SelfManufacturedGoods } from './components/ SelfManufacturedGoods';
import { OtherStocks } from './components/OtherStocks';
import { CashRecipt } from './components/ CashReceipt';
import { Taxes } from './components/Taxes';
import { SaleInfo } from './components/SaleInfo';
import { Button } from '@/components/Button';
import { Total } from './components/Total';
import { useOrdersNew } from './hooks/useOrderNew';
import { Form } from '@/components/Form';

export const OrdersNew = () => {
  const { form, handleSubmitSale, } = useOrdersNew();

  return (
    <MainLayout className='gap-8'>
      <Form context={form} onSubmit={handleSubmitSale}>
        <SaleInfo />
        <GoodsForSale />
        <Services />
        <SelfManufacturedGoods />
        <OtherStocks />
        <Total label='Total da venda' value='0.00' className='font-medium' />
        <CashRecipt />
        <Taxes />
        <Button type='submit' className='self-start'>
          Registrar
        </Button>
      </Form>
    </MainLayout>
  )
};
