import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
:root{
    
}
    *{
        padding: = 0;
        margin: = 0;
        box-sizing: border-box;
        font-size: 1.2rem;
        list-style: none;
        text-decoration: none;
    }
    body{
        background-color: #333;
    }
`;

export default GlobalStyled;