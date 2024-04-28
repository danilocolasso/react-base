import { SidebarItemProps } from './SidebarItem';

export const sidebarItems: SidebarItemProps[] = [
  {
      icon: 'FaUserLock',
      label: 'Operações',
      children: [
        {
          label: 'Vendas',
          route: '/sales',
        },
        {
          label: 'Recebimentos',
          route: '/receivables',
        }
      ]
  },
  {},
  {
    label: 'Compras para estoque',
    route: '/stock-purchases',
  },
  {
    label: 'Gastos',
    children: [],
  },
  {
    label: 'Pagamentos',
    route: '/payments',
  },
  {},
  {
    label: 'Transferência entre contas',
    route: '/account-transfers',
  },
  {
    label: 'Outras operações',
    children: [],
  },
];