import { DataTable, TableColumn } from '@/components/DataTable';
import { TableAction } from '@/components/DataTable/DataTableActions';
import { orderService } from '@/services/order.service';

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
  },
];

const actions: TableAction<Order>[] = [
  {
    icon: 'FaSearch',
    variant: 'primary',
    className: 'rounded-full',
    onClick: (item: Order) => {
      console.log('View', item);
    },
  },
  {
    label: 'Edit',
    onClick: (item: Order) => {
      console.log('Edit', item);
    },
  },
];

export const Order = () => {
  return (
    <div className='container mx-auto py-10'>
      <DataTable
        service={orderService}
        columns={columns}
        actions={actions}
        pagination={true}
        sort="customerName"
        order="asc"
      />
    </div>
  );
};
