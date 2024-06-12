import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, createSchema, validator, InferType } from '@/components/Form';
import { useAuth } from '@/contexts/Auth/useAuth';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useAuth()

  const schema = createSchema({
    username: validator.string().min(1, 'O campo "Usuário" é obrigatório'),
    password: validator.string().min(6, 'O campo "Senha" deve ter no mínimo 6 caracteres'),
  });

  type LoginForm = InferType<typeof schema>

  const form = useForm<LoginForm>({
    schema,
  })

  const navigate = useNavigate() 

  const handleLogin = async (data: LoginForm) => {
    setIsLoading(true)

    try {
      const response = await login(data.username, data.password)
      
      if (response.success) {
        navigate('/')
        return
      }

      console.log(response.message)
    } catch (err) {
      console.log('Não foi possível se comunicar com o servidor.')
    }

    setIsLoading(false)
  };

  return {
    form,
    handleLogin,
    isLoading,
  };
};
