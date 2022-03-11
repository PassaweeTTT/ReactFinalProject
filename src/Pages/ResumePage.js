import React from 'react'
import {MainLayout } from '../styles/Layout'
import Resume from '../Components/Resume';
import Skills from '../Components/Skill';
import Skill2 from '../Components/Skill2';

function ResumePage() {
    return (
        <>
        <MainLayout>
                <Skills/>
                <Skill2/>
                <Resume/>
        </MainLayout>
        </>
      )
}

export default ResumePage