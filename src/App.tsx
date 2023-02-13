import { useState } from 'react'

import './App.css'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import { Description } from './components/Text'
import Background from './components/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Background>
      <Header/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Description>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Description>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </Background>
  )
}

export default App
