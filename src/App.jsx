import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        {/* Guest route */}
        <Route element={<Home></Home>} path='/'></Route>
        <Route element={<Login></Login>} path='/login'></Route>
      
      
        {/* User route */}
      
      
      
        {/* Mentor route */}
      
      </Routes>
    </>
  )
}

export default App
