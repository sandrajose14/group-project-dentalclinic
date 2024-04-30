import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBook, faCapsules,  faStethoscope,  faUser} from '@fortawesome/free-solid-svg-icons'
import {  faRocketchat } from '@fortawesome/free-brands-svg-icons'
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-black" style={{ height: '65px' }}>
                <Container fluid>
                   
                        <Link to={'/'} style={{textDecoration:'none'}}>
                            <Navbar.Brand className="text-white d-flex align-items-center">
                                <img src="https://cdnl.iconscout.com/lottie/premium/thumb/laser-dental-filling-6736107-5583527.gif" alt="" style={{ width: '50px', marginLeft: '20px', borderRadius: '20px', height: '50px' }} />
                                <h5 className="ms-2 fw-bold mt-1 fs-4" style={{ backgroundImage: 'linear-gradient(45deg, darkcyan, lightcyan)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: '-moz-initial' }}>DENTAKAY</h5>
                            </Navbar.Brand>
                        </Link>
                    

                    <Nav className="ms-auto">
                    <Link to={'/login'}>    <Button className='btn btn-outline-light rounded  me-3' style={{ height: '35px', width: '70px' }}>Login</Button></Link>
                    </Nav>
                </Container>
            </Navbar>


            <Navbar expand="lg" style={{ backgroundColor: '#164863' }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex justify-content-evenly w-100 fw-bold fs-5">
                            <ScrollLink  to="about-section" spy={true} smooth={true} duration={500} className="text-white" style={{ textDecoration: 'none', color: 'white',cursor:'pointer' }}>
                                About Us <span><FontAwesomeIcon icon={faStethoscope} fade style={{ color: "cyan" }} /></span>
                            </ScrollLink>
                            <Link to="/treatment" className="text-white" style={{ textDecoration: 'none', color: 'white' }}>
                                Services <span><FontAwesomeIcon icon={faCapsules} fade style={{ color: "cyan" }} /></span>
                            </Link>
                            <Link to="/viewbooking" className="text-white" style={{ textDecoration: 'none', color: 'white' }}>
                                View Booking <span><FontAwesomeIcon icon={faBook} fade style={{ color: "cyan" }} /></span>
                            </Link>
                            <Link to="/feedback" className="text-white" style={{ textDecoration: 'none', color: 'white' }}>
                                Testimonials <span><FontAwesomeIcon icon={faRocketchat} fade style={{ color: "cyan" }} /></span>
                            </Link>
                            <Link to="/contact" className="text-white" style={{ textDecoration: 'none', color: 'white' }}>
                                Contact Us <span><FontAwesomeIcon icon={faAddressBook} fade style={{ color: "cyan" }} /></span>
                            </Link>
                            <Link to="/profile" className="text-white" style={{ textDecoration: 'none', color: 'white' }}>
                                Profile <span><FontAwesomeIcon icon={faUser} fade style={{ color: "cyan" }} /></span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
