import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Pages/Landing-Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
