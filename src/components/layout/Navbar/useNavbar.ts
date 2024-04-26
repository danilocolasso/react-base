import { Icons } from '@/components/ui/Icon';

export type NavbarItem = {
  icon: keyof typeof Icons;
  route: string;
};

export const useNavbar = () => {
  const items: NavbarItem[] = [
    {
      icon: 'FaHome',
      route: '/'
    },
    {
      icon: 'FaUser',
      route: '/profile'
    }
  ];

  return {
    items,
  };
}
