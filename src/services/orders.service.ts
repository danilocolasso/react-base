import api from '@/lib/api'
import { PaginatedPayload } from '@/services/base/PaginatedPayload';
import { PaginatedResponse } from './base/PaginatedResponse';

export interface Order {
  customer: string
  date: Date
  goodsForSale: number
  id: number
  otherStocks: number
  requester: string
  selfManufacturedGoods: number
  seller: string
  services: number
  taxes: number
  total: number
}

export class OrdersPayload extends PaginatedPayload {
  customerName?: string;
}

export class OrdersResponse extends PaginatedResponse<Order> {}

const mockOrders = (payload) => {
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


export async function ordersService(payload: OrdersPayload): Promise<OrdersResponse> {
  const response = await api.get('orders', { params: payload })
  
  return response.data
}
