import { Screen } from '@/components/layout/Screen'
import { Sidebar } from '@/components/layout/Sidebar'
import { Content } from '@/components/layout/Content'
import { Footer } from '@/components/layout/Footer'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Header } from '@/components/layout/Header'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs/Breadcrumbs'

export const Home = () => {
  return (
    <Screen>
      <PageWrapper>
        <Header />
        <div className='flex flex-grow'>
          <Sidebar />
          <Content>
            <Breadcrumbs />
            <div className='flex flex-col flex-grow w-full bg-white'>

            </div>
          </Content>
        </div>
        <Footer />
      </PageWrapper>
    </Screen>
  )
};
