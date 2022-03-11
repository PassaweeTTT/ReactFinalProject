import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title'
import { InnerLayout } from '../styles/Layout';
import ProgressBar from './Progressbar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'C#'}
                            width={'50%'}
                            text={'Basic'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'50%'}
                            text={'Basic'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'50%'}
                            text={'Basic'}
                        />
                        <ProgressBar 
                            title={'UNITY'}
                            width={'50%'}
                            text={'Basic'}
                        />
                        <ProgressBar 
                            title={'Drawing & Painting'}
                            width={'80%'}
                            text={''}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'50%'}
                            text={'Basic'}
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

export default Skills;
