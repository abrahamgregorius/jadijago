import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        {/* Guest route */}
        <Route element={<Home></Home>} path='/'></Route>
        <Route element={<Login></Login>} path='/login'></Route>
        <Route element={<Register></Register>} path='/register'></Route>
      
      
        {/* User route */}
      
      
      
        {/* Mentor route */}
      
      </Routes>
    </>
  )
}

export default App
