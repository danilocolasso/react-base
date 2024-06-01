import { PaginatedPayload } from '@/services/base/PaginatedPayload';
import { PaginatedResponse } from './base/PaginatedResponse';

export class OrderPayload extends PaginatedPayload {
  customerName?: string;
}

export class OrderResponse extends PaginatedResponse<{
  id: number;
  customerName: string;
  totalAmount: number;
  status: string;
}> {}

export async function orderService(payload: OrderPayload): Promise<OrderResponse> {
  const allOrders = [
    { id: 1, customerName: 'John Doe', totalAmount: 150, status: 'completed' },
    { id: 2, customerName: 'Jane Smith', totalAmount: 200, status: 'pending' },
    { id: 3, customerName: 'Alice Johnson', totalAmount: 350, status: 'completed' },
    { id: 4, customerName: 'Bob Brown', totalAmount: 100, status: 'canceled' },
    { id: 5, customerName: 'Charlie Davis', totalAmount: 500, status: 'completed' },
  ];

  // Apply sorting
  if (payload.sort) {
    allOrders.sort((a, b) => {
      const aVal = a[payload.sort as keyof typeof allOrders[0]];
      const bVal = b[payload.sort as keyof typeof allOrders[0]];
      if (aVal < bVal) return payload.order === 'asc' ? -1 : 1;
      if (aVal > bVal) return payload.order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Apply pagination
  const start = (payload.page! - 1) * payload.pageSize!;
  const end = start + payload.pageSize!;
  const data = allOrders.slice(start, end);

  // return {
  //   data,
  //   totalItems: allOrders.length,
  //   totalPages: Math.ceil(allOrders.length / payload.pageSize!),
  //   page: payload.page!,
  //   pageSize: payload.pageSize!,
  // };

  return {
    data,
    totalItems: allOrders.length,
    totalPages: 10,
    page: 1,
    pageSize: payload.pageSize!,
  };
}
