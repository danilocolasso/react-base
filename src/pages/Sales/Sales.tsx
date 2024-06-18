import { Button } from '@/components/Button';
import { DataTable } from '@/components/DataTable';
import { MainLayout } from '@/layouts/MainLayout';
import { salesService } from '@/services/sales.service';
import { Link } from 'react-router-dom';
import { useSales } from './hooks/useSales';

export const Sales = () => {
  const { columns, actions } = useSales();
  
  return (
    <MainLayout className='gap-2'>
      <Link to='create' className='self-end'>
        <Button
          className='self-end'
          icon='FaPlus'
          iconSide='right'
          iconClassName='h-3 h-3'
        >
          Novo Pedido
        </Button>
      </Link>
      <DataTable
        service={salesService}
        columns={columns}
        actions={actions}
        sort="customer"
        order="asc"
      />
    </MainLayout>
  );
};
