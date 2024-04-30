import { HomeLayout } from '@/layouts/HomeLayout';
import { Alerts } from './Alerts';
import { Action } from './Action';
import { useNavbar } from '@/components/Navbar/useNavbar';

export const Home = () => {
  const { items } = useNavbar();
  const actions = items.filter(item => item.route !== '/');
  const variants = ['green', 'blue', 'yellow', 'purple'];
  
  return (
    <HomeLayout>
      <div className='flex w-full gap-16'>
        <section className='flex gap-4 pl-12'>
          {actions.map((item, index) => (
            <Action key={item.route} item={item} variant={variants[index % variants.length] as any} />
          ))}
        </section>

        <Alerts />
      </div>
    </HomeLayout>
  )
};
