import { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import Header from './components/Header'
import { Description } from './components/Text'
import Background from './components/Background'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Background>
      <Header/>
      <Container>
        <Description>
        The Privacy & Scaling Explorations team is conducting phase 1 of a multi-party trusted setup ceremony based on the Zcash Powers of Tau ceremony.
        The goal is to securely generate zk-SNARK parameters for circuits of up to 2 ^ 28 (260+ million) constraints.
        This means that the process will generate twice as many minus one (530+ million) powers of tau.

        As long as one party in the ceremony behaves honestly and is not compromised, the entire setup is trustworthy.
        </Description>
        <Description>
          To take part, please get in touch with the Ethereum Foundation’s Privacy and Scaling Explorations team via Twitter (@glamperd), Discord or Telegram (@glamperd).
        </Description>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Table/>
      </Container>
    </Background>
  )
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1100px;
`

export default App
