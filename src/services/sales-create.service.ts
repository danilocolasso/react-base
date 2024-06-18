import api from '@/lib/api';

export class SalesCreateProductPayload {
  name!: string;
  quantity!: number;
  price!: number;
}

export class SalesCreateTaxPayload {
  taxType!: string;
  taxValue!: string;
  dueDate!: string;
  value!: string;
}

export class SalesCreatePayload {
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

export class SalesCreateResponse {
  success?: boolean
}

export async function salesCreateService(payload: SalesCreatePayload): Promise<SalesCreateResponse> {
  const response = await api.post('sales/new', payload)
  
  return response.data
}