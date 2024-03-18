import { ReactNode } from 'react'
import useAuth from './useAuth'
import { AuthContext } from './AuthContext.tsx'

interface AuthProviderProps {
	children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const { user, authenticated, loading, login, logout } = useAuth()

	return (
		<AuthContext.Provider value={{ user, authenticated, loading, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}