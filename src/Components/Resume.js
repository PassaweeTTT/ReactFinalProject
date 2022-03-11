import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title'
import ResumeItem from '../Components/ResumeItem';
import { InnerLayout } from '../styles/Layout';
import SchoolIcon from '@material-ui/icons/School';
import SmallTitle from './SmallTitle';

function Resume() {
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
           <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
            <div className="small-title">
                    <SmallTitle icon={school} title={'ประวัติการศึกษา'} />
                </div>
                <div className="resume-content">
                <ResumeItem 
                        year={'2019'} 
                        title={'ระดับปริญญาตรี'}
                        subTitle={'สถาบันเทคโนโลยี ไทย-ญี่ปุ่น'}
                        text={'คณะเทคโนโลยีสารสนเทศ IT  สาขาวิชาเทคโนโลยีมัลติมิเดีย MT'} 
                    />
                <ResumeItem 
                        year={'2016 - 2018'} 
                        title={'มัธยมศึกษาตอนปลาย'}
                        subTitle={'โรงเรียนเบญจมราชูทิศ ราชบุรี'}
                        text={'แผนการเรียน วิทย์-คณิต'} 
                />
                <ResumeItem 
                        year={'2013 - 2015'} 
                        title={'มัธยมศึกษาตอนต้น'}
                        subTitle={'โรงเรียนเบญจมราชูทิศ ราชบุรี'}
                        text={'แผนการเรียน วิทย์-คณิต'} 
                />
                </div>
                
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume