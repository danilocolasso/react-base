import { InferType, createSchema, useForm, validator } from '@/components/Form';

export const useSales = () => {
  const schema = createSchema({
    date: validator.string().datetime('O campo "Data" é obrigatório'),
    seller: validator.number().min(1, 'O campo "Vendedor" é obrigatório'),
    customer: validator.number().min(1, 'O campo "Cliente" é obrigatório'),
    requester: validator.number().min(1, 'O campo "Solicitante" é obrigatório'),
    email: validator.string().email('O campo "Email" é obrigatório'),

    receivingMethod: validator.string(),
    inputAccount: validator.string(),
    history: validator.string(),
    deliveryDeadlinePreview: validator.string(),
    observations: validator.string(),

    additionalInfo: validator.string(),
  });

  type SaleForm = InferType<typeof schema>;

  const { register, handleSubmit, errors } = useForm<SaleForm>({
    schema,
  })

  const handleSubmitSale = async (data: SaleForm) => {
    return data;
  };

  return {
    register,
    handleSubmit,
    handleSubmitSale,
    errors,
  };
};