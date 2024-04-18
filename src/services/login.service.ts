import api from '@/lib/api'
import { encryptPassword } from '@/utils/encryptPassword'

export class LoginPayload {
  username?: string
  password?: string
}

export class LoginResponse {
  success?: boolean
  token?: string
  message?: string
}

export async function loginService(payload: LoginPayload): Promise<LoginResponse> {
  const controller = new AbortController()

  const headers = {
    'Content-Type': 'application/json',
    signal: controller.signal,
  }

  payload.password = encryptPassword(payload.password)
  const response = await api.post('login', payload, headers)
  
  return response.data
}