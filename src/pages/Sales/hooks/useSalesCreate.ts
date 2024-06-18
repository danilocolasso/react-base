import { InferType, createSchema, useForm, validator } from '@/components/Form';
import { salesCreateService } from '@/services/sales-create.service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const productSchema = createSchema({
  name: validator.string({ message: 'Obrigatório' }),
  quantity: validator.number({ message: 'Obrigatório' }),
  price: validator.number({ message: 'Obrigatório' }),
});

const taxSchema = createSchema({
  taxType: validator.string({ message: 'Obrigatório' }),
  taxValue: validator.string({ message: 'Obrigatório' }),
  dueDate: validator.string({ message: 'Obrigatório' }),
  value: validator.string({ message: 'Obrigatório' }),
});

const schema = createSchema({
  date: validator.date({ message: 'Obrigatório' }),
  seller: validator.number({ message: 'Obrigatório' }),
  customer: validator.number({ message: 'Obrigatório' }),
  requester: validator.number({ message: 'Obrigatório' }),
  email: validator.string().email('Obrigatório'),

  goodsForSale: validator.array(productSchema).optional(),
  services: validator.array(productSchema).optional(),
  selfManufacturedGoods: validator.array(productSchema).optional(),
  otherStocks: validator.array(productSchema).optional(),
  taxes: validator.array(taxSchema).optional(),

  receivingMethod: validator.string({ message: 'Obrigatório' }),
  inputAccount: validator.string({ message: 'Obrigatório' }),
  history: validator.string({ message: 'Obrigatório' }),
  deliveryDeadlinePreview: validator.string({ message: 'Obrigatório' }),
  observations: validator.string().optional(),

  additionalInfo: validator.string().optional(),
});

export type SaleForm = InferType<typeof schema>;

export const useSalesCreate = () => {
  const navigate = useNavigate();
  const form = useForm<SaleForm>({
    schema,
  });

  const handleSubmitSale = async (data: SaleForm) => {
    try {
      const response = await salesCreateService(data);

      if (response.success) {
        toast.success('Venda cadastrada com sucesso!');
        navigate('/sales');
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao cadastrar a venda. Por favor, tente novamente.');
    }

    return data;
  };

  return {
    form,
    handleSubmitSale,
  };
};