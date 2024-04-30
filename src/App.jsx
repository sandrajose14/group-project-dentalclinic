
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homee from '../src/pages/Homee'
import Treatment from './pages/Treatment'
import Doctor from './pages/Doctors'
import Testimonial from './pages/Testimonial'
import Contactus from './pages/Contactus'
import Authentication from './components/Authentication'
import { Route, Routes } from 'react-router-dom'
import ViewBooking from './pages/ViewBooking'
import Profile from './pages/Profile'
function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Homee/>}/>
      <Route path='/treatment' element={<Treatment/>}/>
      <Route path='/treatment/doctor' element={<Doctor/>}/>
      <Route path='/feedback' element={<Testimonial/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path='/login' element={<Authentication/>}/>
      <Route path='/register' element={<Authentication register/>}/>
      <Route path='/viewbooking' element={<ViewBooking/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
