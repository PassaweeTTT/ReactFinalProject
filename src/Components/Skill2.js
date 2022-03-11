import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title'
import { InnerLayout } from '../styles/Layout';
import ProgressBar from './Progressbar';

const Skill2 = () => {
  return (
    <SkillsStyled>
            
    <Title title={'Language Skills'} span={'Language Skills'} />
    <InnerLayout>
        <div className="skills">
            <ProgressBar 
                title={'THAI'}
                width={'100%'}
                text={'NATIVE'}
            />
            <br/>
            <ProgressBar 
                title={'ENGLISH'}
                width={'80%'}
                text={'FLUENT'}
            />
            <br/>
            <ProgressBar 
                title={'JAPANESE'}
                width={'5%'}
                text={'POOR KID'}
            />
        </div>
    </InnerLayout>
</SkillsStyled>
  )
}
const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skill2