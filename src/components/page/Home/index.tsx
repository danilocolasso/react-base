import { Screen } from '@/components/layout/screen'
import { Input } from '@/components/ui/Input'
import { Form } from '@/components/ui/Form'
import { useForm } from 'react-hook-form'

export const Home = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <Screen>
      <h1>Home</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input id='name' label='Name' required={true} type='text' {...register('name')} />
      </Form>
    </Screen>
  )
}