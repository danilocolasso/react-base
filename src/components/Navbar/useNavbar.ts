import { Icons } from '@/components/Icon';
import { navbarItems } from './navbarConfig';

export type NavbarItem = {
  icon: keyof typeof Icons;
  label: string;
  route: string;
};

export const useNavbar = () => {
  return {
    items: navbarItems,
  };
}
