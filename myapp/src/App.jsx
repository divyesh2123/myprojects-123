import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Lead from './Lead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>

      <Route path='/' element={<Login></Login>}/>
      <Route path='/lead' element={<Lead/>}/>

     </Routes>
    </>
  )
}

export default App
