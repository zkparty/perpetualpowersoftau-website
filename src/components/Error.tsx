import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FONT_SIZE } from '../constants';
import { textDescriptions } from '../style/utils';

type Props = {
    children: React.ReactNode
}

const ErrorMessage = ({ children }: Props) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 7000) // 7 seconds
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        {show ?
            <Container>
                {children}
            </Container>
        :
        null}
        </>
    )
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