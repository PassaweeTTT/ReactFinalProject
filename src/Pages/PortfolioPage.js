import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Profile from '../Components/Profile'


const PortfolioPage = () => {
  return (
    <>
    <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'}/>
              <InnerLayout>
                <Profile/> 
              </InnerLayout>

             
    </MainLayout>
    </>
  )
}

export default PortfolioPage