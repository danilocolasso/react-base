import { useEffect, useState } from 'react'
import { User } from '@/types/user'
import { jwtDecode } from 'jwt-decode'
import api from '@/lib/api'
import axios, { AxiosError } from 'axios'
import { loginService } from '@/services/login.service'

export default function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [authenticated, setAuthenticated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        authenticate(token)
        setLoading(false)
    }, [])

    const authenticate = (token: string | null) => {
        if (!token) {
            return
        }

        api.defaults.headers.Authorization = `Bearer ${token}`

        const data: any = jwtDecode(token)

        const user: User = {
            id: Number(data.id),
            username: data.username,
            permissions: JSON.parse(data.permissions),
        }

        setAuthenticated(true)
        setUser(user)
        setLoading(false)
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    const login = async (username: string, password: string) => {
        try {
            const data = await loginService({ username, password })

            if (data.token) {
                setToken(data.token)
                authenticate(data.token)

                return {
                    success: true,
                    message: 'Login efetuado com sucesso.',
                }
            }

            return {
                success: false,
                message: 'Ocorreu um erro ao tentar efetuar o login. Por favor, tente novamente mais tarde.'
            }
        } catch (err) {
            const errors = err as Error | AxiosError

            if (axios.isAxiosError(errors)) {
                return { success: false, message: errors.response?.data.message }
            }

            return { success: false, message: errors.message }
        }
    }

    const logout = async () => {
        setUser(null)
        setAuthenticated(false)
        setLoading(true)
        setToken('')
    }

    return { user, authenticated, loading, login, logout }
}