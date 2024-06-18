import { TableAction, TableColumn } from '@/components/DataTable';
import { salesDeleteService } from '@/services/sales-delete.service';
import { Sale } from '@/services/sales.service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useSales = () => {
  const navigate = useNavigate();

  const handleEdit = async (item: Sale) => {
    navigate(`/sales/edit/${item.id}`);
  }

  const handleDelete = async (item: Sale) => {
    try {
      const response = await salesDeleteService({ id: item.id });

      if (response.success) {
        toast.success('Venda excluída com sucesso!');
        navigate('/sales');
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao excluir a venda. Por favor, tente novamente.');
    }
  }

  const columns: TableColumn<Sale>[] = [
    {
      key: 'customer',
      label: 'Cliente',
      sortable: true,
    },
    {
      key: 'date',
      label: 'Data',
      sortable: true,
      value: (row) => new Date(row.date).toLocaleDateString(),
    },
    {
      key: 'seller',
      label: 'Vendedor',
      sortable: true,
    },
    {
      key: 'requester',
      label: 'Solicitante',
      sortable: true,
    },
    {
      key: 'total',
      label: 'Total',
      sortable: true,
      value: (row) => row.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    },
  ];
  
  const actions: TableAction<Sale>[] = [
    {
      icon: 'FaEdit',
      title: 'Editar',
      onClick: handleEdit,
    },
    {
      icon: 'FaTrash',
      title: 'Excluir',
      onClick: handleDelete,
    },
  ];

  return {
    columns,
    actions,
  };
}