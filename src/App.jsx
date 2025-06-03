import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MentorDashboard from './pages/Mentor/MentorDashboard'
import CoursesPage from './pages/User/CoursesPage'
import CartPage from './pages/User/CartPage'
import CoursesDetail from './pages/User/CoursesDetail'

function App() {
  return (
    <>
      <Routes>
        {/* Guest route */}
        <Route element={<Home></Home>} path='/'></Route>
        <Route element={<Login></Login>} path='/login'></Route>
        <Route element={<Register></Register>} path='/register'></Route>
      
      
        {/* User route */}
        <Route element={<CoursesPage></CoursesPage>} path='/courses'></Route>
        <Route element={<CoursesDetail></CoursesDetail>} path='/courses/:id'></Route>
        <Route element={<CartPage></CartPage>} path='/cart'></Route>
        
      
      
        {/* Mentor route */}
        <Route element={<MentorDashboard></MentorDashboard>} path='/mentor/dashboard'></Route>
      
      </Routes>
    </>
  )
}

export default App
