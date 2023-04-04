import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { REQUEST_RETRIEVAL_URL } from '../../constants'
import ErrorMessage from '../Error'

type Props = {
    file: string
    open: boolean
    toClose: () => void
}

const RequestModal = ({ file, open, toClose }: Props) => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('')

    const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onClickHandler = async () => {
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
                contentLabel="Example Modal"
                appElement={document.getElementById('root') || undefined}
                style={{
                    overlay: {
                        zIndex: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(6px)',
                        cursor: 'pointer',
                        overflowY: 'scroll'
                    },
                    content: {
                        border: 'none',
                        height: '240px',
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
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onInput={onInputHandler}/>
                </div>
                <button onClick={onClickHandler}>Request</button>
                <button onClick={toClose}>close</button>
            </Modal>
            {error ? <ErrorMessage>
                There was an error requesting the file retrieval. Please try again later.
            </ErrorMessage> : null}
        </>
    )
}

export default RequestModal