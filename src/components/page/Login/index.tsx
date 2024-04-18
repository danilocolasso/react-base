import { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/contexts/Auth/AuthContext'
import { Screen } from '@/components/layout/screen'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import logo from '@/assets/logo.png'
import './style.css'
import { z } from 'zod'

export const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState<string>('')

  const formSchema = z.object({
    username: z.string().min(1, 'Username is required').max(20, 'Username must not exceed 20 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
  });

  const auth = useContext(AuthContext)
  const navigate = useNavigate() 

  const handleLogin = async () => {
    if (username && password){
      setIsLoading(true)

      try {
        const response = await auth.login(username, password)
        
        if (response.success) {
          setIsLoading(false)
          navigate('/')
          return
        }

        console.log(response.message)
      } catch (err) {
        console.log('Não foi possível se comunicar com o servidor.')
      }

      setIsLoading(false)
    }
  }

  function handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  return (
    <Screen className='items-center justify-center'>
      <Card className='flex flex-col gap-4 p-4 py-10 w-96 paper-edge bg-tertiary'>
        <img src={logo} alt='Logo' className='w-1/3 self-center' />
        <Input type='text' placeholder='Usuário' value={username} onChange={handleChangeUsername} />
        <Input type='password' placeholder='Senha' value={password} onChange={handleChangePassword} />
        <Button className='bg-primary' loading={isLoading} onClick={handleLogin}>OK</Button>
        <a href='#' className='self-start text-primary'>Esqueci minha senha</a>
      </Card>
    </Screen>
  )
}