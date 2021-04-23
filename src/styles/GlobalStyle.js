import { createGlobalStyle } from 'styled-components'
import Transitions from './Transitions'
import Pattern from './Pattern'


const GlobalStyle = createGlobalStyle`

:root{
    --white: #fff;
    --black: #000;
    --idea-color: #021d5b;
    --light-gray: #fffa; 

    --bg-transparent: trasparent;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

body{
    background-color: var(--white);
    background-image: url(${Pattern});
}

.back-trans{
    background: var(--background-transparent);
}

.number{
    color: blue;
}

.border-blue{
    border-bottom: 1px solid blue;
}

.titles{

    font-weight: bold;
    border-bottom: 3px solid blue; 
}

    ${Transitions}

`;


export default GlobalStyle;