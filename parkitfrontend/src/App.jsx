import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HOme'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointment' element={<MyAppointment/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
      </Routes>
    </div>
  )
}

export default App
