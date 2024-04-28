import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faLocationDot, faNotesMedical, faTooth, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div style={{ height: '500px', marginTop:'50px',backgroundImage:'url(https://d1tm14lrsghf7q.cloudfront.net/public/media/1355/conversions/294753-cover.jpg)', backgroundSize:'100%', fontFamily: 'Roboto, sans-serif;' }} className='w-100 justify-content-center align-items-center d-flex flex-column ms-3 me-3'>
            <div className='w-100 justify-content-evenly d-flex'>
                <div className='website' style={{ width: '400px'  }}>

                    <i><FontAwesomeIcon icon={faTooth} fade style={{color: "#74C0FC",}} size="2xl" /></i>
                    <span className='ms-3 me-3 justify-content-center' style={{ fontSize: '30px', color: 'white', imageOrientation:'flip' }}>The Patient Dentist</span>
                    <p className='mt-3 text-white'>Welcome to The Patient Dentist, where your smile is our top priority! we are dedicated to providing exceptional dental care in state of the art, comfortable and welcoming environment. With a team of experienced professionals and cutting-edge technology, we offer a comprehensive range of dental services tailored to meet your unique needs. helping you achieve optimal oral health and a radiant smile. Schedule your appointment today and experience the excellence of modern dentistry."</p>
                </div>

                <div className='Services'>
                    <h4>Services <span><FontAwesomeIcon icon={faNotesMedical} fade style={{color: "#74C0FC",}} /></span> </h4>
                   <Link to={''} style={{textDecoration:0, color:'white'}}><p className='mt-3'>General Dentistry</p></Link> 
                   <Link to={''} style={{textDecoration:0, color:'white'}}><p>Dental Surgery</p></Link> 
                   <Link to={''} style={{textDecoration:0, color:'white'}}> <p>Implants and Orthodontics</p></Link> 
                </div>

                <div className='Doctors'>
                    <h4>Doctors <span><FontAwesomeIcon icon={faUserDoctor} fade style={{color: "#74C0FC",}} /></span></h4>
                    <Link to={''} style={{textDecoration:0, color:'white'}}> <p className='mt-3'>Dentists</p></Link> 
                    <Link to={''} style={{textDecoration:0, color:'white'}}><p>Dental Surgeon</p></Link> 
                    <Link to={''} style={{textDecoration:0, color:'white'}}><p>Implants, Maxillofacial & Cosmetics</p></Link> 
                </div>

                <div className='contact us'>
                    <h4>Contact Us <span><FontAwesomeIcon icon={faAddressBook} fade style={{color: "#74C0FC",}} /></span></h4>
                    <div className='d-flex'>
                        <input className='form-control' type="text" />
                        <button className='btn btn-primary ms-1'>Register</button>
                    </div>
                    <div className='w-100 d-flex justify-content-around pt-2 mt-3'>
                    <Link to={''} style={{textDecoration:0}}> <FontAwesomeIcon icon={faInstagram} style={{color: "#74C0FC",}} size='2xl' /></Link>
                    <Link to={''} style={{textDecoration:0}}> <FontAwesomeIcon icon={faXTwitter} style={{color: "#74C0FC",}} size='2xl' /></Link>
                    <Link to={''} style={{textDecoration:0}}>  <FontAwesomeIcon icon={faLinkedin} style={{color: "#74C0FC",}} size='2xl' /></Link>
                    <Link to={''} style={{textDecoration:0}}> <FontAwesomeIcon icon={faFacebook} style={{color: "#74C0FC",}} size='2xl' /></Link>
                    <Link to={''} style={{textDecoration:0}}> <FontAwesomeIcon icon={faLocationDot} style={{color: "#74C0FC",}} size='2xl' /></Link>
                    </div>
                    
                </div>
            </div>

            <div className='text-white'>Copy right © 2024 The Patient Dentist. Built by Group 4 with React.</div>

        </div>
    )
}

export default Footer
