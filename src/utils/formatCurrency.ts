export const formatCurrency = (value: number | string | null | undefined) => {
  value = value || 0;
  value = parseFloat(value.toString().replace(/\D/g, '')) / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));
};