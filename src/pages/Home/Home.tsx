import { Screen } from '@/components/layout/Screen'
import { Navbar } from '@/components/layout/Navbar'
import { Sidebar } from '@/components/layout/Sidebar'
import { Content } from '@/components/layout/Content'
import { Footer } from '@/components/layout/Footer'
import { PageWrapper } from '@/components/layout/PageWrapper'

export const Home = () => {
  return (
    <Screen>
      <PageWrapper>
        <Navbar />
        <Sidebar />
        <Content>

        </Content>
        <Footer />
      </PageWrapper>
    </Screen>
  )
};
