import { Screen } from '@/components/layout/Screen'
import { Sidebar } from '@/components/layout/Sidebar'
import { Content } from '@/components/layout/Content'
import { Footer } from '@/components/layout/Footer'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Header } from '@/components/layout/Header'

export const Home = () => {
  return (
    <Screen>
      <PageWrapper>
        <Header />
        <Sidebar />
        <Content>

        </Content>
        <Footer />
      </PageWrapper>
    </Screen>
  )
};
