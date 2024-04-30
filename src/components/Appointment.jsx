import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Appointment({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title className='text-primary' style={{ fontWeight: "700" }}>Book an Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://t4.ftcdn.net/jpg/05/48/04/19/360_F_548041959_McdGogq1h32eASUid6kSPnIDVFLJgCnm.jpg" width={'100%'} height={'auto'} alt="" />
              <p className='mt-3' style={{ textAlign: 'justify' }}>Name of the Doctor & qualification</p>
            </div>
            <div className="col-md-6">
              <input type="text" placeholder='Name of Patient' className='form-control mb-3' />
              <input type="date" placeholder='Date' className='form-control mb-3' />
              <input type="time" placeholder='Time' className='form-control mb-3' />
              <input type="text" placeholder='Treatment' className='form-control mb-3' />
              <select style={{ width: '100%', height: '38px', border: '1px solid lightgrey', borderRadius: '5px', marginBottom: '10px' }} name="" id="" >
                <option value="" selected>Select a Doctor</option>
                <option value="">Dr.Max Deo</option>
                <option value="">Dr.Maria Elizabeth</option>
                <option value="">Dr.James Alex</option>
              </select>
              <textarea className='border grey rounded p-2' style={{ borderColor: 'grey', width: '100%', marginBottom: '10px' }} cols="47" rows="4" placeholder='Description (Optional)'></textarea>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
       
        <Button variant="primary rounded" onClick={handleClose}>
          Book Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Appointment;