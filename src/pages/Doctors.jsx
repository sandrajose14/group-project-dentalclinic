import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Appointment from '../components/Appointment'; 
import './Doctors.css'

function Doctors() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    const doctors = [
        {
            name: "Dr. Max Deo",
            experience: "Dentist (31 Years Exp.)",
            specialty: "BDS (Chief Dental Surgeon)",
            image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
        },
       {
        name:"Dr.Maria Elizabeth",
        experience:"Dentist (11 Years Exp.)",
        specialty:"MDS - Orthodontics, Bachelor of Dental Surgery",
        image:"https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
       },
       {
        name:"Dr.James Alex",
        experience:"Dentist (17 Years Exp.)",
        specialty:"BDS, Diploma In Implantology",
        image:"https://st3.depositphotos.com/1001959/33942/i/450/depositphotos_339422454-stock-photo-portrait-of-young-attractive-medic.jpg"
       }
    ];

    return (
        <div>
            <h1 className='text-center text-primary mt-5 mb-4 fw-bold mb-5'>Doctors</h1>
            <div className="container mb-5 mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {doctors.map((doctor) => (
                        <div className="col">
                            <div className="card box4 shadow">
                                <img src={doctor.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{doctor.name}</h5>
                                    <p className="card-text">{doctor.experience}</p>
                                    <p className="card-text">{doctor.specialty}</p>
                                    <Button 
    onClick={handleShowModal} 
    className='btn btn-primary' 
    style={{ 
        width: '180px', 
        whiteSpace: 'nowrap',
        padding: '10px 10px' 
    }}
>
    Book an Appointment
</Button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Appointment show={showModal} handleClose={handleCloseModal}/>
        </div>
    );
}

export default Doctors;