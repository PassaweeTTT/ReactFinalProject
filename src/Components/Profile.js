import React from 'react'
import styled from 'styled-components';
import profile from '../img/profile.jpg'

const Profile = () => {
    return (
        <ProfileStyled>
            <div className="left-content">
                <img src={profile} alt=''/>
            </div>
            <div className="right-content">
                <h1><span>Passawee Wanwilai </span></h1>
                <p>สวัสดีครับ ผม ภาสวีร์ วรรณวิไลย ชื่อเล่น แทน<br/>
                   อายุ 22 ปี    
                   คณะ เทคโนโลยีสารสนเทศ สาขา มัลติมีเดีย <br/>
                   สถาบันเทคโนโลยีไทยญี่ปุ่น <br/>
                   ชื่นชอบ และ รักในการเล่นเกมครับ<br/>
                   มีความฝันที่จะพัฒนาเกมที่สนุกๆ ให้ทุกคนได้เล่นกันครับ!</p>
            </div>
        </ProfileStyled>
    )
}

const ProfileStyled = styled.div`
    display: flex;
    img{
        width: 100%;
        border-radius: 10%;
    }
    .left-content{
        width: 50%;
        padding-left: 20px;
        position: relative;
       
    }
    .right-content{
        padding-left: 3.5rem;
        position: relative;
        h1{
            font-size: 2rem;
            padding-bottom: 1rem;
            span{
                font-size: 2rem;
            }
        }
        p{
            font-size: 1rem;
            padding-bottom: 1rem;
            
        }
    }
`;
export default Profile;
