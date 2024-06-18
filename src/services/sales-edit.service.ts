import api from '@/lib/api';
import { PaginatedPayload } from './base/PaginatedPayload';
import { PaginatedResponse } from './base/PaginatedResponse';
import { Sale, SalesProduct, SalesTax } from './sales.service';

export class SalesEditProduct extends SalesProduct {
  id!: number;
}

export class SalesEditTax extends SalesTax {
  id!: number;
}

export class SalesEditPayload extends PaginatedPayload {
  id!: number;
}

export class SaleEdit extends Sale {
  goodsForSale: SalesEditProduct[] = [];
  services: SalesEditProduct[] = [];
  selfManufacturedGoods: SalesEditProduct[] = [];
  otherStocks: SalesEditProduct[] = [];
  taxes: SalesEditTax[] = [];
}

export class SalesEditResponse extends PaginatedResponse<SaleEdit> {}

export async function salesEditService(payload: SalesEditPayload): Promise<SalesEditResponse> {
  const response = await api.get('sales/', { params: payload });

  return response.data;
}