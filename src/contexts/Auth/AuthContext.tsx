import { createContext } from 'react'
import { User } from '@/types/user'
import { StatusMessage } from '@/types/status-message'

export type AuthContextType = {
    user: User | null
    authenticated: boolean
    loading: boolean
    login: (usuario: string, senha: string) => Promise<StatusMessage>
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)