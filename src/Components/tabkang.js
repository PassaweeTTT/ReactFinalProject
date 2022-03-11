import React from 'react'
import style from 'styled-components'
import Navigation from './Navigation'

const tabkang = () => {
  return (
    <SidebarStyled>
        <Navigation/>
    </SidebarStyled>
  )
}

const SidebarStyled = style.div` 
    width: 16.3rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    position: fixed;
`;

export default tabkang