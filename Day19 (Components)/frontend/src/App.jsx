import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import First from './First'
import Second from './Second'
import Third from './Third'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First></First>
      <Second></Second>
      <Third></Third>
    </>
  )
}

export default App
