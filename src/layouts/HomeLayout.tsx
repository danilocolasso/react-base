import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PageWrapper } from '@/components/PageWrapper';
import { Screen } from '@/components/Screen';
import { Sidebar } from '@/components/Sidebar';
import { cn } from '@/utils/className';
import React from 'react';

export interface HomeLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children, className, ...props }) => {
  return (
    <Screen>
      <PageWrapper>
        <Header />
        <div className='flex flex-grow'>
          <Sidebar />
          <Content className='bg-gray-200'>
            <div className={cn('flex flex-col flex-grow items-center justify-center w-full', className)} {...props}>
              {children}
            </div>
          </Content>
        </div>
        <Footer className='p-2' />
      </PageWrapper>
    </Screen>
  );
};