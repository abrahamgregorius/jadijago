import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MentorDashboard from './pages/Mentor/MentorDashboard'
import CoursesPage from './pages/User/CoursesPage'
import CartPage from './pages/User/CartPage'
import CoursesDetail from './pages/User/CoursesDetail'
import MyCourses from './pages/User/MyCourses/MyCourses'
import Learn from './pages/User/MyCourses/Learn'
import FAQ from './pages/FAQ'
import MentorCourses from './pages/Mentor/MentorCourses'
import MentorForum from './pages/Mentor/MentorForum'
import MentorInbox from './pages/Mentor/MentorInbox'

function App() {
  return (
    <>
      <Routes>
        {/* Guest route */}
        <Route element={<Home></Home>} path='/'></Route>
        <Route element={<Login></Login>} path='/login'></Route>
        <Route element={<Register></Register>} path='/register'></Route>

        <Route element={<FAQ></FAQ>} path='/faq'></Route>

        {/* User route */}
        <Route element={<CoursesPage></CoursesPage>} path='/courses'></Route>
        <Route element={<CoursesDetail></CoursesDetail>} path='/courses/:id'></Route>
        <Route element={<Learn></Learn>} path='/courses/learn/:id/'></Route>
        <Route element={<CartPage></CartPage>} path='/cart'></Route>

        {/* My Courses route */}
        <Route element={<MyCourses></MyCourses>} path='/my-courses'></Route>
      
      
        {/* Mentor route */}
        <Route element={<MentorDashboard></MentorDashboard>} path='/mentor/dashboard'></Route>
        <Route element={<MentorCourses></MentorCourses>} path='/mentor/courses'></Route>
        <Route element={<MentorForum></MentorForum>} path='/mentor/forum'></Route>
        <Route element={<MentorInbox></MentorInbox>} path='/mentor/inbox'></Route>

      </Routes>
    </>
  )
}

export default App
