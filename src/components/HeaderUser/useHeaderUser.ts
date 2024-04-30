import { Icons } from '@/components/Icon';

export type HeaderUserAction = {
  icon: keyof typeof Icons;
  label: string;
  route: string;
};

export const useHeaderUser = () => {
  const actions = [
    {
      icon: 'FaCog',
      label: 'Configurações',
      route: '/settings',
    },
    {
      icon: 'FaSignOutAlt',
      label: 'Sair',
      route: '/logout',
    },
  ];

  return {
    actions,
  };
}