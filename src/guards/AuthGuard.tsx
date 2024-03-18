import { AuthContext } from '@/contexts/Auth/AuthContext'
import { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'

interface AuthGuardProps {
  children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const auth = useContext(AuthContext)
  const isAuthenticated = auth.authenticated

  if (!isAuthenticated && !auth.loading) {
    return <Navigate to='/login' />
  }

  return children
}