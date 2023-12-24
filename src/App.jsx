import { useState } from 'react'
import './app.css'
import { Header } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Navalogy</h1> */}
      <Header/>
    </>
  )
}

export default App
