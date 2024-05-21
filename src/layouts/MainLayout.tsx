import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PageWrapper } from '@/components/PageWrapper';
import { Screen } from '@/components/Screen';
import { Sidebar } from '@/components/Sidebar';
import { cn } from '@/utils/className';
import React from 'react';

export interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className, ...props }) => {
  return (
    <Screen>
      <PageWrapper>
        <Header />
        <div className='flex flex-grow'>
          <Sidebar />
          <Content>
            <Breadcrumbs />
            <div className={cn('flex flex-col flex-grow w-full p-4 gap-4 bg-white', className)} {...props}>
              {children}
            </div>
          </Content>
        </div>
        <Footer />
      </PageWrapper>
    </Screen>
  );
};