import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MentorDashboard from './pages/Mentor/MentorDashboard'
import CoursesPage from './pages/User/CoursesPage'

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
        
      
      
        {/* Mentor route */}
        <Route element={<MentorDashboard></MentorDashboard>} path='/mentor/dashboard'></Route>
      
      </Routes>
    </>
  )
}

export default App
