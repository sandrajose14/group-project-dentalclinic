import React, { useState } from 'react';
import bonding from '../assets/bonding.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import root from '../assets/root.jpg'
import toothcleaning from '../assets/clean.jpg'
import implants from '../assets/implant.jpg'
import cosmetic from '../assets/cosmetic.jpg'
import others from '../assets/others.jpg'
const Treatment = () => {
  const [treatments] = useState([
    { name: 'Dental Bonding', image: bonding },
    { name: 'Root Canal Treatment', image: root },
    { name: 'Tooth cleaning', image: toothcleaning },
    { name: 'Dental Implants', image: implants },
    { name: 'Cosmetic Dentistry', image: cosmetic },
    { name: 'Other Treatments', image: others },
    
  ]);

  return (
    <div className="container mt-5">
      <h5 className='text-primary fw-bold'>HERE IS OUR SERVICES DETAILS...</h5>
      <h1 className="text-center mb-4 text-primary fw-bold">Dental Treatments</h1>
      <div className="row p-3" style={{backgroundColor:'lavender'}}>
        {treatments.map((treatment, index) => (
          <div key={index} className="col-md-4 mb-4 mb-2">
            <div className="card border rounded shadow" style={{ width: '320px' }}>
              <img src={treatment.image} className="card-img-top shadow" style={{ width: '300px', height: '250px' }} />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold fs-3">{treatment.name}</h5>
                <div className="d-grid gap-2">
                  <Link to={'/treatment/doctor'}><Button className="btn btn-primary mt-2">Book Now</Button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treatment;
