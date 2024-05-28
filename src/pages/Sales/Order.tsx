import { DataTable, TableColumn } from '@/components/DataTable';
import { orderService } from '@/services/order.service';

interface Order {
  id: number;
  customerName: string;
  totalAmount: number;
  status: string;
}

export const columns: TableColumn<Order>[] = [
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

export const Order = () => {
  return (
    <div className='container mx-auto py-10'>
      <DataTable
        service={orderService}
        columns={columns}
        pagination={true}
        sort="customerName"
        order="asc"
      />
    </div>
  );
};
