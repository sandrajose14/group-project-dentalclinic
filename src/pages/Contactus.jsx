import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faEnvelope, faHeadset, faPhone } from '@fortawesome/free-solid-svg-icons'
faSquareFacebook
faSquareYoutube
faSquareInstagram
faSquareXTwitter
faLinkedin
faHeadset
faPhone
faEnvelope
/* jestin */

function Contactus() {
  return (

    <>
 <Header/>
   <h1 className='m-4 text-primary'>Contact Us</h1>
   {/* main-row1/1 */}
   <div className="row mt-5">
{/* main-col-2/1 */}
    <div className="col-md-6">
        <div className="row m-4">
            
            <h1 >We take your tooth seriously and give it our maximum care</h1>
        </div>
        <div className="row m-4">
            <p>schedule your dental appoinment todayfor a healthy smile.Experienced professionals, convenient hours, and a caring team await you.</p>
        </div>
        <div className="row -4">
            <h3>working hours:9AM-6PM</h3>
        </div>
        {/* contact  number&mail */}
        <div className="row m-4">
        <FontAwesomeIcon icon="fa-solid fa-headset" />
            <p>For Booking</p>
            <h1>+91 9865 74 12 30</h1>
        </div>
        <div className="row m-4">
        <FontAwesomeIcon icon="fa-solid fa-phone" />
            <p>Talk to Us</p>
            <h1>+91 9685 74 12 30</h1>
        </div>
        <div className="row m-4">
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <p>Mail Us</p>
            <h1>mail@dental.in</h1>
        </div>
        <div className="row m-4">
            {/* social media */}
            <h5>Follow Us</h5>
            <div className='d-flex justify-content-between'>
           <a href="https://www.facebook.com/"> <FontAwesomeIcon icon="fa-brands fa-square-facebook" /></a>
           <a href="https://www.instagram.com/"> <FontAwesomeIcon icon="fa-brands fa-square-instagram" /></a> 
           <a href="https://www.twitter.com/"><FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /></a> 
           <a href="https://www.linkedin.com/"> <FontAwesomeIcon icon="fa-brands fa-linkedin" /></a> 
           <a href="https://www.youtube.com/"> <FontAwesomeIcon icon="fa-brands fa-square-youtube" /></a> 
           </div>
        </div>
    </div>

 {/* google map */}
 {/* main-col-2/2 */}
    <div className="col-md-6">
    
        <iframe className='m-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.558327210354!2d76.30948071075343!3d10.008813464676205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714236289511!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


   
</div>
<Footer/>
</>
     
  
  )
}

export default Contactus
