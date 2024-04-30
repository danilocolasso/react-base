import { useLogin } from './useLogin';
import { Screen } from '@/components/Screen';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import logo from '@/assets/logo.png';
import { Paper } from '@/components/Paper/Paper';

export const Login = () => {
  const { register, handleSubmit, handleLogin, isLoading, errors } = useLogin();

  return (
    <Screen className='items-center justify-center'>
      <Paper className='w-96'>
        <img src={logo} alt='Logo' className='w-1/3 self-center' />
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input type='text' placeholder='Usuário' { ...register('username') } error={errors.username?.message} />
          <Input type='password' placeholder='Senha' { ...register('password') } error={errors.password?.message} />
          <Button className='bg-primary' type='submit' loading={isLoading}>OK</Button>
        </Form>
        <a href='#' className='self-start text-primary'>Esqueci minha senha</a>
      </Paper>
    </Screen>
  )
};
