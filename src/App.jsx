
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Treatment from './pages/Treatment'
import Doctor from './pages/Doctors'
import Testimonial from './pages/Testimonial'
import Contactus from './pages/Contactus'
import Authentication from './components/Authentication'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/treatment' element={<Treatment/>}/>
      <Route path='/treatment/doctor' element={<Doctor/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path='/login' element={<Authentication/>}/>
      <Route path='/register' element={<Authentication register/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App