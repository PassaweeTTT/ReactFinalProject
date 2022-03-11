import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

const ContactPage = () => {
    const Phone = <PhoneIphoneIcon />
    const Mail = <EmailIcon />
    const Location = <LocationOnIcon />
  return (
    <MainLayout>
            <Title title={'Contact me'} span={'Contact me'}/>
              <InnerLayout>
                <ContactItem title={'Phone'} detail={'0960628114'} logo={Phone}/>
                
                <ContactItem title={'Email'} detail={'wa.passawee_st@tni.ac.th'} logo={Mail}/>
                
                <ContactItem title={'Address'} detail={'55 m.1 Ratchaburi Kungnamwon 70000'} logo={Location}/>
                </InnerLayout>
             
    </MainLayout>
  )
}

export default ContactPage