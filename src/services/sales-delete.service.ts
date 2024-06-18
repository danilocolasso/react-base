import api from '@/lib/api';

export class SalesDeletePayload {
  id!: number;
}

export class SalesDeleteResponse {
  success?: boolean;
}

export async function salesDeleteService(payload: SalesDeletePayload): Promise<SalesDeleteResponse> {
  const response = await api.delete('sales', { data: payload });

  return response.data;
}