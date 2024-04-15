import { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/contexts/Auth/AuthContext'
import { Page } from '@/components/layout/page'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import forge from 'node-forge'
import logo from '@/assets/logo.png'
import appsettings from '../../../../appsettings.json'
import './style.css'

export const Login = () => {
  const [username, setUsername] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState<string>('')

  const auth = useContext(AuthContext)
  const navigate = useNavigate() 

  const handleLogin = async () => {
    if (username && password){
      const publickeyObj = forge.pki.publicKeyFromPem(appsettings.PUBLIC_KEY)
      const encrPassword = forge.util.encode64(publickeyObj.encrypt(password, 'RSA-OAEP'))

      setIsLoading(true)

      try {
        const response = await auth.login(username, encrPassword)
        
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
    <Page className='items-center justify-center'>
      <Card className='flex flex-col gap-4 p-4 py-10 w-96 paper-edge bg-tertiary'>
        <img src={logo} alt='Logo' className='w-1/3 self-center' />
        <Input type='text' placeholder='Usuário' value={username} onChange={handleChangeUsername} />
        <Input type='password' placeholder='Senha' value={password} onChange={handleChangePassword} />
        <Button className='bg-primary' loading={isLoading} onClick={handleLogin}>OK</Button>
        <a href='#' className='self-start text-primary'>Esqueci minha senha</a>
      </Card>
    </Page>
  )
}