import { useState } from 'react'
import BasicInfo from './components/BasicInfo';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicInfo />
    </>
  )
}

export default App
