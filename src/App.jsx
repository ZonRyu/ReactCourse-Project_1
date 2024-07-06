import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import MainCompo from "./components/MainCompo.jsx"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <MainCompo />
    </div>
  )
}

export default App
