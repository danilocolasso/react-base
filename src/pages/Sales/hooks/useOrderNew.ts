import { InferType, createSchema, useForm, validator } from '@/components/Form';

const productSchema = createSchema({
  nome: validator.string(),
  quantidade: validator.string(),
  valorUnitario: validator.string(),
});

const taxSchema = createSchema({
  tipo: validator.string(),
  tributoRecolher: validator.string(),
  vencimento: validator.string(),
  valor: validator.string(),
});

const schema = createSchema({
  date: validator.string().date('O campo "Data" é obrigatório'),
  seller: validator.optional(validator.number()),
  customer: validator.optional(validator.number()),
  requester: validator.optional(validator.number()),
  email: validator.string().email('O campo "Email" é obrigatório'),

  // goodsForSale: validator.array(productSchema),
  // services: validator.array(productSchema),
  // selfManufacturedGoods: validator.array(productSchema),
  // otherStocks: validator.array(productSchema),
  // taxes: validator.array(taxSchema),

  // receivingMethod: validator.string(),
  // inputAccount: validator.string(),
  // history: validator.string(),
  // deliveryDeadlinePreview: validator.string(),
  // observations: validator.string(),

  // additionalInfo: validator.string(),
});

export type SaleForm = InferType<typeof schema>;

export const useOrdersNew = () => {
  const form = useForm<SaleForm>({
    schema,
  });

  const handleSubmitSale = async (data: SaleForm) => {
    console.log('Submited!');
    console.log(data);
    return data;
  };

  return {
    form,
    handleSubmitSale,
  };
};