import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import Profile from '../Components/Profile'


const AboutPage = () => {
  return (
    <>
    <MainLayout>
            <Title title={'About me'} span={'About me'}/>
              <InnerLayout>
                <Profile/> 
                </InnerLayout>

             
    </MainLayout>
    </>
  )
}


export default AboutPage