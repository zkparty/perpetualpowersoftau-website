import styled from 'styled-components'

import { FONT_SIZE } from '../constants'
import { textDescriptions, textTitles } from '../style/utils'


const H1 = styled.h1`
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: ${FONT_SIZE.XXL};
    font-weight: 600;
    ${textTitles}
    margin: 0px;

    padding: 1.5em;
    will-change: filter;
    transition: filter 1000ms;
    &:hover {
        filter: drop-shadow(0 0 10px #646cffaa);
    }
`

const Description = styled.p`
    font-size: ${FONT_SIZE.M};
    ${textDescriptions}
`


export { H1, Description }