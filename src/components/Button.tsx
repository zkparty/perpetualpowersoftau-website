import styled from 'styled-components'

const MainButton = styled.button`
    :focus {
        outline:none !important;
    }
`

const CloseButton = styled(MainButton)`
    padding-block: 4px;
    padding-inline: 10px;
    position: absolute;
    top: 10px;
    right: 10px;
`

export { MainButton, CloseButton }