import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/contexts/Auth/AuthContext'
import { Screen } from '@/components/layout/screen'
import { Card } from '@/components/ui/Card'
import { Form, useForm, createSchema, SchemaInfer, validator } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import logo from '@/assets/logo.png'
import './style.css'

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  const schema = createSchema({
    username: validator.string().min(1),
    password: validator.string().min(6)
  });

  type LoginFormSchema = SchemaInfer<typeof schema>

  const { register, handleSubmit, formState: {errors} } = useForm<LoginFormSchema>({
    schema,
  })

  const auth = useContext(AuthContext)
  const navigate = useNavigate() 

  const handleLogin = async (data: LoginFormSchema) => {
    setIsLoading(true)

    try {
      const response = await auth.login(data.username, data.password)
      
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

  return (
    <Screen className='items-center justify-center'>
      <Card className='flex flex-col gap-4 p-4 py-10 w-96 paper-edge bg-tertiary'>
        <img src={logo} alt='Logo' className='w-1/3 self-center' />
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input type='text' placeholder='Usuário' { ...register('username') } />
          {errors.username && <p>{errors.username.message}</p>}
          <Input type='password' placeholder='Senha' { ...register('password') } />
          {errors.password && <p>{errors.password.message}</p>}
          <Button className='bg-primary' type='submit' loading={isLoading}>OK</Button>
        </Form>
        <a href='#' className='self-start text-primary'>Esqueci minha senha</a>
      </Card>
    </Screen>
  )
}