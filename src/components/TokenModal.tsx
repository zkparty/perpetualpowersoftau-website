import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { CONFIRM_EMAIL_URL } from '../constants'
import { CloseButton } from './Button'
import LoadingSpinner from './LoadingSpinner'
import { Description } from './Text'

type Props = {
    token: string|null
    toClose: () => void
}

const TokenModal = ({ token, toClose }: Props) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string|null>(null)
    useEffect(() => {
        (async () => {
            if (token) {
                setLoading(true)
                setError(null)
                window.history.replaceState(null, '', window.location.pathname)
                const result = await fetch(CONFIRM_EMAIL_URL + token).then(res => res.json())
                console.log(result)
                if (result.verified){
                    console.log('Email confirmed')
                } else {
                    setError(JSON.stringify(result))
                }
                setLoading(false)
            }
        })()
    }, [token])

    return (
        <Modal
            isOpen={!!token}
            onRequestClose={toClose}
            contentLabel="Token Modal"
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
            <h2>Email confirmed</h2>
            {loading ?
                <LoadingSpinner/>
            :
                <>{error ?
                    <Description>There was an error confirming your email: {token} </Description>
                    :
                    <Description>
                        You have successfully confirmed your email. The retrieval request for file has been sent.
                    </Description>
                }</>
            }
            <CloseButton onClick={toClose}>x</CloseButton>
        </Modal>
    )
}

export default TokenModal