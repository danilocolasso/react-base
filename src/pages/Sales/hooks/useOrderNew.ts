import { InferType, createSchema, useForm, validator } from '@/components/Form';
import { useNavigate } from 'react-router-dom';

const productSchema = createSchema({
  nome: validator.string().optional(),
  quantidade: validator.string().optional(),
  valorUnitario: validator.string().optional(),
});

const taxSchema = createSchema({
  tipo: validator.string().optional(),
  tributoRecolher: validator.string().optional(),
  vencimento: validator.string().optional(),
  valor: validator.string().optional(),
});

const schema = createSchema({
  date: validator.string().date('O campo "Data" é obrigatório'),
  seller: validator.string({ message: 'O campo "Vendedor" é obrigatório' }),
  customer: validator.string({ message: 'O campo "Cliente" é obrigatório'}),
  requester: validator.string({ message: 'O campo "Solicitante" é obrigatório'}),
  email: validator.string().email('O campo "Email" é obrigatório'),

  goodsForSale: validator.array(productSchema).optional(),
  services: validator.array(productSchema).optional(),
  selfManufacturedGoods: validator.array(productSchema).optional(),
  otherStocks: validator.array(productSchema).optional(),
  taxes: validator.array(taxSchema).optional(),

  receivingMethod: validator.string({ message: 'O campo "Forma de recebimento" é obrigatório' }),
  inputAccount: validator.string({ message: 'O campo "Conta de entrada" é obrigatório' }),
  history: validator.string({ message: 'O campo "Histórico" é obrigatório' }),
  deliveryDeadlinePreview: validator.string({ message: 'O campo "Prazo de entrega previsto" é obrigatório' }),
  observations: validator.string().optional(),

  additionalInfo: validator.string().optional(),
});

export type SaleForm = InferType<typeof schema>;

export const useOrdersNew = () => {
  const navigate = useNavigate();
  const form = useForm<SaleForm>({
    schema,
  });

  const handleSubmitSale = async (data: SaleForm) => {
    console.log(data);
    navigate('/operations/orders');
    return data;
  };

  return {
    form,
    handleSubmitSale,
  };
};