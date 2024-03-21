import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './views/MainPage'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar />
      <Routes>
        <Route children path='/' element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
