import api from '@/lib/api';
import { PaginatedPayload } from './base/PaginatedPayload';
import { PaginatedResponse } from './base/PaginatedResponse';

export class SalesProduct {
  name!: string;
  quantity!: number;
  price!: number;
}

export class SalesTax {
  tipo!: string;
  tributoRecolher!: string;
  vencimento!: string;
  valor!: string;
}

export class SalesPayload extends PaginatedPayload {
  customer?: string;
  date?: string;
  seller?: string;
  requester?: string;
}

export class Sale {
  id!: number;
  date!: Date;
  seller!: number;
  customer!: number;
  requester!: number;
  email!: string;
  goodsForSale?: SalesProduct[];
  services?: SalesProduct[];
  selfManufacturedGoods?: SalesProduct[];
  otherStocks?: SalesProduct[];
  receivingMethod?: string;
  inputAccount?: string;
  history?: string;
  deliveryDeadlinePreview?: string;
  observations?: string;
  taxes?: SalesTax[];
  additionalInfo?: string;
  total!: number;
}

export class SalesResponse extends PaginatedResponse<Sale> {}

export async function salesService(payload: SalesPayload): Promise<SalesResponse> {
  const response = await api.get('sales', { params: payload });

  return response.data;
}