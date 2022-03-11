import React from 'react'
import styled from 'styled-components'
import  FacebookIcon  from '@material-ui/icons/Facebook'
import  GitHubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon   from '@material-ui/icons/YouTube'

const HomePage = () => {
  return (
    <HomePageStyled>
        <div className='typography'>
            <h1>Hi <span >I'm Passawee Wanwilai</span></h1>
            <div className='icons'>
                <div className='icon i-facebook' ><a  href='https://www.facebook.com/tan.passawee.1/'><FacebookIcon/></a></div>
                <div className='icon i-github'><a  href='https://github.com/PassaweeTT'><GitHubIcon/></a></div>
                <div className='icon i-youtube'><a  href='https://www.youtube.com/channel/UCTh93WtWRdLgsuqDLmhOwlg'><YoutubeIcon/></a></div>
            </div>
        </div>
    </HomePageStyled>
  )
}
const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    :root {
        --delay: 0;
        --duration: 800ms;
        --iterations: 1;
    }
    
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        h1{
            margin-bottom: 2rem;
        }

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-facebook{
                &:hover{
                    border: 2px solid #007bff;
                    color: #007bff;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage