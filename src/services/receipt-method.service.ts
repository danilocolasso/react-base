import api from '@/lib/api'
import { PaginatedPayload } from './base/PaginatedPayload'
import { PaginatedResponse } from './base/PaginatedResponse'

export class RecipeMethodPayload extends PaginatedPayload {
  name?: string
}

export class RecipeMethodResponse extends PaginatedResponse<{
  id: number
  name: string
}> {}

export async function recipeMethodService(payload: RecipeMethodPayload): Promise<RecipeMethodResponse> {
  const response = await api.get('recipe-method', { params: payload })
  
  return response.data
}