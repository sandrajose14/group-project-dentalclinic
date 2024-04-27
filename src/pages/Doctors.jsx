import React from 'react'
import './Doctors.css'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



function Doctors() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div>

            <h1 className='text-center text-primary' style={{ marginTop: '50px', fontWeight: '600', color: 'primary' }}>Doctors</h1>
            <div className=" row ms-5 mt-5 ps-2 pe-5" >

                <div className="col-md-4 box4  " >
                    <img src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg" alt="" />
                    <h3 className='pt-3 '>Dr.Max Deo</h3>
                    <p style={{ fontWeight: '600', color: "blue" }}>Dentist (31 Years Exp.)</p>
                    <p>BDS (Chief Dental Surgeon)</p>
                    <Button onClick={handleShow} className=' d-flex mt-3 mb-5 rounded'>Book an Appointment</Button>
                </div>

                <div className="col-md-4 box4 ">
                    <img src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg" alt="" />
                    <h3 className='pt-3 '>Dr.Maria Elizabeth</h3>
                    <p style={{ fontWeight: '600', color: "blue" }}>Dentist (11 Years Exp.)</p>
                    <p>MDS - Orthodontics, Bachelor of Dental Surgery</p>
                    <Button onClick={handleShow} className=' d-flex mt-3 mb-5 rounded'>Book an Appointment</Button>
                </div>

                <div className="col-md-4 box4">
                    <img src="https://st3.depositphotos.com/1001959/33942/i/450/depositphotos_339422454-stock-photo-portrait-of-young-attractive-medic.jpg" alt="" />
                    <h3 className='pt-3 '>Dr.James Alex</h3>
                    <p style={{ fontWeight: '600', color: "blue" }}>Dentist (17 Years Exp.)</p>
                    <p>BDS, Diploma In Implantology</p>
                    <Button onClick={handleShow} className=' d-flex mt-3 mb-5 rounded '>Book an Appointment</Button>
                </div>

            </div>


            <Modal show={show} onHide={handleClose} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title className='text-primary' style={{ fontWeight: "700" }}>Book an Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <h3 className='text-primary'>About</h3> */}
                                    <img src="https://t4.ftcdn.net/jpg/05/48/04/19/360_F_548041959_McdGogq1h32eASUid6kSPnIDVFLJgCnm.jpg" width={'200px'} height={'200px'} alt="" />
                                    <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab suscipit deleniti omnis. Sapiente minus, placeat corrupti quo cumque suscipit, veniam, officia minima dolor officiis obcaecati ratione a excepturi perspiciatis</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className='text-primary'>Treatments</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque autem, eum temporibus ex .</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className='mt-5 mb-3'> <input type="text" placeholder='Name of Patient' className='form-control' /></div>
                            <div className='mt-3 mb-3'> <input type="date" placeholder='Date' className='form-control' /></div>
                            <div className='mt-3 mb-3'> <input type="time" placeholder='Time' className='form-control' /></div>
                            <div className='mt-3 mb-3'> <input type="text" placeholder='Treatment' className='form-control' /></div>
                            <div className='mt-3 mb-3'>
                                <select style={{ width: '370px', height: '38px', border: '1px solid lightgrey', borderRadius: '5px' }} name="" id="" >
                                    <option value="" selected>Select a Doctor</option>
                                    <option value="">Dr.Max Deo</option>
                                    <option value="">Dr.Maria Elizabeth</option>
                                    <option value="">Dr.James Alex</option>
                                </select>
                            </div>
                            <div className='mt-3 mb-3'> <textarea className='border grey rounded p-2' style={{ borderColor: 'grey' }} cols="47" rows="4" placeholder='Description (Optional)'></textarea></div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className='rounded' onClick={handleClose}>
                        Book Now
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Doctors