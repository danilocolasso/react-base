import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/contexts/Auth/AuthContext'
import { Screen } from '@/components/layout/screen'
import { Card } from '@/components/ui/Card'
import { Form, useForm, createSchema, InferType, validator } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import logo from '@/assets/logo.png'
import './style.css'

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  const schema = createSchema({
    username: validator.string().min(1, 'O campo usuário é obrigatório'),
    password: validator.string().min(6, 'O campo senha deve ter no mínimo 6 caracteres'),
  });

  type LoginForm = InferType<typeof schema>

  const { register, handleSubmit, errors } = useForm<LoginForm>({
    schema,
  })

  const auth = useContext(AuthContext)
  const navigate = useNavigate() 

  const handleLogin = async (data: LoginForm) => {
    setIsLoading(true)

    try {
      const response = await auth.login(data.username, data.password)
      
      if (response.success) {
        navigate('/')
        return
      }

      console.log(response.message)
    } catch (err) {
      console.log('Não foi possível se comunicar com o servidor.')
    }

    setIsLoading(false)
  }

  return (
    <Screen className='items-center justify-center'>
      <Card className='flex flex-col gap-4 p-4 py-10 w-96 paper-edge bg-tertiary'>
        <img src={logo} alt='Logo' className='w-1/3 self-center' />
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input type='text' placeholder='Usuário' { ...register('username') } error={errors.username?.message} />
          <Input type='password' placeholder='Senha' { ...register('password') } error={errors.password?.message} />
          <Button className='bg-primary' type='submit' loading={isLoading}>OK</Button>
        </Form>
        <a href='#' className='self-start text-primary'>Esqueci minha senha</a>
      </Card>
    </Screen>
  )
}