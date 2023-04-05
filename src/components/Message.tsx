import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FONT_SIZE } from '../constants';
import { textDescriptions } from '../style/utils';

type Props = {
    children: React.ReactNode
    color: string
}

const Message = ({ children, color }: Props) => {
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
            <Container color={color}>
                {children}
            </Container>
        :
        null}
        </>
    )
}

const Container = styled.div<{ color: string }>`
    position: fixed;
    top: 3%;
    right: 3%;
    font-size: ${FONT_SIZE.L};
    ${textDescriptions}
    padding: 12px;
    border-radius: 5px;
    background-color: ${({ color }) => color};
`

export default Message;