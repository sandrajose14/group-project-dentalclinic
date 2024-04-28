
import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBook, faCapsules,  faStethoscope,  faUser} from '@fortawesome/free-solid-svg-icons'
import {  faRocketchat } from '@fortawesome/free-brands-svg-icons'

import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Navbar expand="lg"  className="bg-black">
                <Container fluid  >               
                    <Navbar.Brand  className="text-white d-flex align-items-center" >
                    <img  src="https://cdn.dribbble.com/users/1059259/screenshots/11774645/the_patient_dentist_-dribbble.gif" alt="" style={{width:'200px', marginLeft:'20px', marginTop:'20px', borderRadius:'20px'}} />
                       <h5 className="ms-2" >The Patient <span style={{fontSize:'40px', color:'lightBlue'}}>Dentist</span> </h5></Navbar.Brand>
                       

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Button className='btn btn-outline-light rounded text-white me-3' >Login</Button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div  className='w-100 justify-content-center align-items-center  '>
                <div className='w-100 justify-content-evenly d-flex'>

                    <div className='About Us'>
                      <Link to={''} style={{textDecoration:0}}><h6>About Us  <span><FontAwesomeIcon icon={faStethoscope} fade style={{color: "#74C0FC",}} /></span> </h6></Link>  
                         </div>

                    <div className='Treatments'>
                    <Link to={''} style={{textDecoration:0}}><h6>Treatments <span><FontAwesomeIcon icon={faCapsules} fade style={{color: "#74C0FC",}} /></span> </h6></Link>   
                         </div>
                    
                    <div className='View Booking'>
                    <Link to={''} style={{textDecoration:0}}><h6>View Booking <span><FontAwesomeIcon icon={faBook} fade style={{color: "#74C0FC",}} /></span></h6></Link>    
                        </div>
                    
                    <div className='Testimonials'>
                    <Link to={''} style={{textDecoration:0}} ><h6>Testimonials <span><FontAwesomeIcon icon={faRocketchat} fade style={{color: "#74C0FC",}} /></span></h6></Link>   
                         </div>

                    <div className='Contact Us'>
                    <Link to={''} style={{textDecoration:0}}><h6>Contact Us <span><FontAwesomeIcon icon={faAddressBook} fade style={{color: "#74C0FC",}} /></span></h6></Link>   
                        </div>

                    <div className='Profile '>
                    <Link to={''} style={{textDecoration:0}}><h6>Profile<span><FontAwesomeIcon icon={faUser} fade style={{color: "#74C0FC",}} /></span></h6></Link>   
                        </div>

                </div>
                
            </div>
        </>
    );
}

export default Header;
