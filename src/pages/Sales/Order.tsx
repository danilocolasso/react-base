import { Button } from '@/components/Button';
import { DataTable, TableColumn, TableAction } from '@/components/DataTable';
import { MainLayout } from '@/layouts/MainLayout';
import { orderService } from '@/services/order.service';
import { cn } from '@/utils/className';
import { Link } from 'react-router-dom';

interface Order {
  id: number;
  customerName: string;
  totalAmount: number;
  status: string;
}

const columns: TableColumn<Order>[] = [
  {
    key: 'customerName',
    label: 'Customer Name',
    sortable: true,
  },
  {
    key: 'totalAmount',
    label: 'Total Amount',
    sortable: true,
  },
  {
    key: 'status',
    label: 'Status',
    value: (row) => {
      return (
        <div
          className={cn('inline-flex px-2 py-1 text-xs bg-primary text-white rounded-sm capitalize', { 'bg-red-400': row.status === 'pending' })}
        >
          {row.status}
        </div>
      );
    }
  },
];

const actions: TableAction<Order>[] = [
  {
    icon: 'FaSearch',
    title: 'Visualizar',
    onClick: (item: Order) => {
      console.log('View', item);
    },
  },
  {
    icon: 'FaEdit',
    title: 'Editar',
    onClick: (item: Order) => {
      console.log('Edit', item);
    },
  },
  {
    icon: 'FaTrash',
    title: 'Excluir',
    onClick: (item: Order) => {
      console.log('Delete', item);
    },
  },
];

export const Order = () => {
  return (
    <MainLayout className='gap-2'>
      <Link to='new' className='self-end'>
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
        service={orderService}
        columns={columns}
        actions={actions}
        sort="customerName"
        order="asc"
      />
    </MainLayout>
  );
};
