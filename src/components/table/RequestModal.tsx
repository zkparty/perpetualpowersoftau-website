import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { REQUEST_RETRIEVAL_URL } from '../../constants'
import { textDescriptions } from '../../style/utils'
import LoadingSpinner from '../LoadingSpinner'
import Message from '../Message'

type Props = {
    file: string
    open: boolean
    toClose: () => void
}

const RequestModal = ({ file, open, toClose }: Props) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')

    const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onClickHandler = async () => {
        setLoading(true)
        setSuccess(false)
        setError(false)
        try {
            const result = await fetch(REQUEST_RETRIEVAL_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    file,
                })
            }).then(res => res.json())
            console.log(result)
            if (result.registered) {
                console.log('Email registered')
                setSuccess(true)
            } else {
                setSuccess(false)
                setError(true)
            }
            setLoading(false)

        } catch (error) {
            console.log(error)
            setError(true)
        }
        toClose()
    }

    return (
        <>
            <Modal
                isOpen={open}
                onRequestClose={toClose}
                contentLabel="Request Modal"
                appElement={document.getElementById('root') || undefined}
                style={{
                    overlay: {
                        zIndex: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(6px)',
                        cursor: 'pointer',
                    },
                    content: {
                        border: 'none',
                        height: '270px',
                        width: '70%',
                        marginBlock: 'auto',
                        marginInline: 'auto',

                        background: '#727272',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 4px 0px #D6D8FFAB',
                    }
                }}
            >
                <h2>Request retrieval for {file}</h2>
                <p>
                    The contribution files are stored in AWS S3 Glacier Storage class because of their size and costs.
                    If the file is not available inmediately, you can request a retrieval.
                    By filling up this form with your email, you will request a file retrieval for this particular contribution.
                    The retrieval process takes 48 hours so you will need to return later on.
                </p>
                <div style={{ marginBlock: '10px' }}>
                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id="email" value={email} onInput={onInputHandler}/>
                </div>
                <button onClick={onClickHandler}>
                    {loading ? <LoadingSpinner/> : 'Request'}
                </button>
                <CloseButton onClick={toClose}>x</CloseButton>
            </Modal>
            {error ? <Message color={'#ff2828'}>
                There was an error requesting the file retrieval. Please try again later.
            </Message> : null}
            {success ? <Message color={'#4fd65f'}>
                Please check your email for further instructions to request retrieval.
            </Message> : null}
        </>
    )
}

const Label = styled.label`
    margin-right: 8px;
`

const Input = styled.input`
    border: none;
    border-radius: 5px;
    background: #666666;
    width: 250px;
    height: 25px;
    ${textDescriptions}
`

const CloseButton = styled.button`
    padding-block: 4px;
    padding-inline: 10px;
    position: absolute;
    top: 10px;
    right: 10px;
`

export default RequestModal