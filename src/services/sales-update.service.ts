import api from '@/lib/api';

export class SalesCreateProductPayload {
  name!: string;
  quantity!: number;
  price!: number;
}

export class SalesCreateTaxPayload {
  tipo!: string;
  tributoRecolher!: string;
  vencimento!: string;
  valor!: string;
}

export class SalesUpdatePayload {
  id!: number;
  date!: Date;
  seller!: number;
  customer!: number;
  requester!: number;
  email!: string;
  goodsForSale?: SalesCreateProductPayload[];
  services?: SalesCreateProductPayload[];
  selfManufacturedGoods?: SalesCreateProductPayload[];
  otherStocks?: SalesCreateProductPayload[];
  receivingMethod?: string;
  inputAccount?: string;
  history?: string;
  deliveryDeadlinePreview?: string;
  observations?: string;
  taxes?: SalesCreateTaxPayload[];
  additionalInfo?: string;
}

export class SalesUpdateResponse {
  success?: boolean
}

export async function salesUpdateService(payload: SalesUpdatePayload): Promise<SalesUpdateResponse> {
  const response = await api.put('sales', payload)

  return response.data
}