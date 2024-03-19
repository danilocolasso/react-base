import { Page } from '@/components/layout/page'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.png'
import './style.css'

export const Login = () => {
  return (
    <Page className='items-center justify-center'>
      <Card className='flex flex-col gap-4 p-4 py-10 w-96 rounded-none paper-edge shadow-none bg-tertiary'>
        <img src={logo} alt='Logo' className='w-1/3 self-center' />
        <Input type='text' />
        <Input type='password' />
        <Button className='bg-primary'>OK</Button>
        <a href='#' className='self-start text-primary'>Esqueci minha senha</a>
      </Card>
    </Page>
  )
}