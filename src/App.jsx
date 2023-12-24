import { useState } from 'react'
import './app.css'

import {HomePage, ContactPage, PortfolioPage, MemberPage} from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
      {/* <ContactPage /> */}
      {/* <PortfolioPage /> */}
      {/* <MemberPage /> */}
    </>
  )
}

export default App
