import React from 'react'
import styled from 'styled-components'
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import non01 from '../img/non01.jpg'
import non02 from '../img/non02.jpg'
import non03 from '../img/non03.jpg'


const Portfolio = () => {
  return (
    <PortStyled>
          <div className='first'>
              <p><b>Mafia Run</b></p>
              <h2>สร้างเกมจาก Unity</h2>
              <div className='video'>
                  <iframe id="ytplayer" type="text/html" width="640" height="480" src="https://www.youtube.com/embed/N_AYtbqxkwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='image'>    
              </div>         

              <div className='other'>
            <p><b>โปรแกรมจองบัตรคอนเสิร์ต</b></p>
            <h2>Visual Studio</h2>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/cytnjOg5Wig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div className='other'>
            <p><b>แอปพลิเคชันแนะนำวง BTS</b></p>
            <h2>Visual Studio</h2>
            <div className='video'>
                <iframe width="640" height="480" src="https://www.youtube.com/embed/DBnLmuAUntA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <p><b>Digital Painting</b></p>
            
            <>
            <img width={250} src={non01} alt=''/> 
            <img width={250} src={non02} alt=''/>
            <img width={500} src={non03} alt=''/> <br/>

            </>
          </div>
          </PortStyled>
  )
}
const PortStyled = styled.div`
margin-top: 3rem;
b{
    font-size: 2.5rem;
    
    
}
.video{
    margin: 1.5rem 0;
    text-align: center;
}
.image{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    img{
        width: 95%;
    }
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
}
.other{
    margin-top: 3rem;
    border-top: 5px dashed var(--border-colorR);
}
h5{
    margin-top: 1rem;
    a{
        color: var(--primary-color);
        &:hover{
            color: #0059b8;
        }
        &:not(:last-child){
            margin-right: 1rem;
        }
        svg{
            margin: .5rem;
        }
    }
}
.typingeffect {
    text-decoration: bolder;
    font-size: 30px;
  }

`

export default Portfolio