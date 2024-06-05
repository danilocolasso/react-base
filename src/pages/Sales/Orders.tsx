import { Button } from '@/components/Button';
import { DataTable, TableColumn, TableAction } from '@/components/DataTable';
import { MainLayout } from '@/layouts/MainLayout';
import { Order, ordersService } from '@/services/orders.service';
import { Link } from 'react-router-dom';

const columns: TableColumn<Order>[] = [
  {
    key: 'customer',
    label: 'Cliente',
    sortable: true,
  },
  {
    key: 'date',
    label: 'Data',
    sortable: true,
    value: (row) => new Date(row.date).toLocaleDateString(),
  },
  {
    key: 'seller',
    label: 'Vendedor',
    sortable: true,
  },
  {
    key: 'requester',
    label: 'Solicitante',
    sortable: true,
  },
  {
    key: 'total',
    label: 'Total',
    sortable: true,
    value: (row) => row.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
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

export const Orders = () => {
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
        service={ordersService}
        columns={columns}
        actions={actions}
        sort="customer"
        order="asc"
      />
    </MainLayout>
  );
};
