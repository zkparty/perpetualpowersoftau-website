import styled from 'styled-components'

import { FONT_SIZE } from '../constants'
import { textDescriptions, textTitles } from '../style/utils'


const H1 = styled.h1`
    text-transform: uppercase;
    font-size: ${FONT_SIZE.XXL};
    font-weight: 600;
    ${textTitles}
    margin: 0px;
`

const Description = styled.p`
    font-size: ${FONT_SIZE.M}
    ${textDescriptions}
`


export { H1, Description }