import { useLogin } from './useLogin';
import { Screen } from '@/components/layout/Screen';
import { Card } from '@/components/ui/Card';
import { Form } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import logo from '@/assets/logo.png';
import './Login.styles.css';

export const Login = () => {
  const { register, handleSubmit, handleLogin, isLoading, errors } = useLogin();

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
};
