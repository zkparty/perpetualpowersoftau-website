import Modal from 'react-modal'

type Props = {
    open: boolean
    toClose: () => void
}

const RequestModal = ({ open, toClose }: Props) => {

    return (
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
                    marginBlock: 'auto',
                    marginInline: 'auto',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',

                    //boxShadow: '5px 10px 8px 10px #b4b2b2',
                    boxShadow: '7px 5px 5px #b4b2b2',
                }
            }}
        >
            <h2>Request</h2>
            <button onClick={toClose}>close</button>
            <div>Request</div>
        </Modal>
    )
}

export default RequestModal