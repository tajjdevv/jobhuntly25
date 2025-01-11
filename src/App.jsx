import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Nav from './components/Header/Nav'
import Header from './components/Header/Header'
import Explore from './components/Explore by categories/Explore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Explore/>
    </>
  )
}

export default App
