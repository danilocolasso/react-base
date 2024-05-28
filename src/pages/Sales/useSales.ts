import { InferType, createSchema, useForm, validator } from '@/components/Form';
import { formatCurrency } from '@/utils/formatCurrency';

export const useSales = () => {
  const itemSchema = createSchema({
    nome: validator.string().min(1, 'O campo "Nome" é obrigatório'),
    quantidade: validator.string().min(1, 'O campo "Quantidade" é obrigatório'),
    valorUnitario: validator.string().min(1, 'O campo "Valor unitário" é obrigatório'),
    total: validator.string().min(1, 'O campo "Senha" é obrigatório'),
  });

  const schema = createSchema({
    date: validator.string().datetime('O campo "Data" é obrigatório'),
    seller: validator.number().min(1, 'O campo "Vendedor" é obrigatório'),
    customer: validator.number().min(1, 'O campo "Cliente" é obrigatório'),
    requester: validator.number().min(1, 'O campo "Solicitante" é obrigatório'),
    email: validator.string().email('O campo "Email" é obrigatório'),

    goodsForSale: validator.array(itemSchema),
    services: validator.array(itemSchema),
    selfManufacturedGoods: validator.array(itemSchema),
    otherStocks: validator.array(itemSchema),

    receivingMethod: validator.string(),
    inputAccount: validator.string(),
    history: validator.string(),
    deliveryDeadlinePreview: validator.string(),
    observations: validator.string(),

    additionalInfo: validator.string(),
  });

  type SaleForm = InferType<typeof schema>;

  const {
    getValues,
    setValue,
    register,
    control,
    errors
  } = useForm<SaleForm>({
    schema,
  })

  const form = useForm<SaleForm>({
    schema,
  })

  const handleSubmitSale = async (data: SaleForm) => {
    return data;
  };

  const calculateTotal = (index: number) => {
    const quantidade = getValues(`goodsForSale.${index}.quantidade`);
    const valorUnitario = getValues(`goodsForSale.${index}.valorUnitario`);
    const total = parseInt(quantidade) * parseFloat(valorUnitario);
    setValue(`goodsForSale.${index}.total`, formatCurrency(total.toFixed(2)));
  };

  return {
    register,
    calculateTotal,
    control,
    errors,
  };
};