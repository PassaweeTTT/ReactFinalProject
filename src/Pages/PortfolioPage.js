import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Portfolio from '../Components/Portfolio'


const PortfolioPage = () => {
  return (
    <>
    <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'}/>
              <InnerLayout>
                <Portfolio/>
              </InnerLayout>

             
    </MainLayout>
    </>
  )
}

export default PortfolioPage