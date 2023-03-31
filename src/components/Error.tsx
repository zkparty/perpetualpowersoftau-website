import React from 'react'
import styled from 'styled-components';
import { FONT_SIZE } from '../constants';
import { textDescriptions } from '../style/utils';

type Props = {
    children: React.ReactNode
}

const ErrorMessage = ({ children }: Props) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    top: 3%;
    right: 3%;
    font-size: ${FONT_SIZE.L};
    ${textDescriptions}
    padding: 12px;
    border-radius: 5px;
    background-color: #ff2828;
`

export default ErrorMessage;