import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AddToBooking, bookingApi } from '../services/callApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Appointment({ show, handleClose }) {



  //state
  const [booking, setBooking] = useState({
    pname: "",
    date: "",
    time: "",
    treatment: "",
    doctors: "",
    description: ""
  })
  /* console.log(booking); */

  const handlebooknow = async () => {
    const { pname, date, time, treatment, doctors, description } = booking
    console.log(pname, date, time, treatment, doctors, description);

    if (!pname || !date || !time || !treatment || !doctors) {
      toast.info('Please fill the form completely')
    } else {
      const response = await bookingApi(booking)
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        toast.success('Booking Successfull')
        setBooking({
          pname: "",
          date: "",
          time: "",
          treatment: "",
          doctors: "",
          description: ""
        })
        handleClose()

      } else {
        console.log(response);
        toast.error("Something went wrong")
      }
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary' style={{ fontWeight: "700" }}>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEHz3MQ0bHtaIGaXc0ZeAY4X1CmZUKBhdqJn_fOnsoA&s" width={'100%'} height={'auto'} alt="" />
                <p className='mt-3' style={{ textAlign: 'justify' }}>Name of Doctor</p>
                <span className='mt-3' style={{ textAlign: 'justify' }}>Experience</span>

              </div>
              <div className="col-md-6">
                <input type="text" placeholder='Name of Patient' className='form-control mb-3' onChange={(e) => setBooking({ ...booking, pname: e.target.value })} />
                <input type="date" placeholder='Date' className='form-control mb-3' onChange={(e) => setBooking({ ...booking, date: e.target.value })} />
                <input type="time" placeholder='Time' className='form-control mb-3' onChange={(e) => setBooking({ ...booking, time: e.target.value })} />
                {/*                 <input type="text" placeholder='Treatment' className='form-control mb-3' onChange={(e) => setBooking({ ...booking, treatment: e.target.value })} />
 */}             
                 <select style={{ width: '100%', height: '38px', border: '1px solid lightgrey', borderRadius: '5px', marginBottom: '10px' }} name="" id="" onChange={(e) => setBooking({ ...booking, doctors: e.target.value })} >
                  <option value="" selected>Select the Treatment</option>
                  <option value="Dr.Max Deo">Dental Bonding</option>
                  <option value="Dr.Maria Elizabeth">Root Canal Treatment</option>
                  <option value="Dr.James Alex">Tooth Cleaning</option>
                  <option value="Dr.James Alex">Dental Implants</option>
                  <option value="Dr.James Alex">Cosmetic Dentistry</option>
                  <option value="Dr.James Alex">Other Treatments</option>


                </select>
                <select style={{ width: '100%', height: '38px', border: '1px solid lightgrey', borderRadius: '5px', marginBottom: '10px' }} name="" id="" onChange={(e) => setBooking({ ...booking, doctors: e.target.value })} >
                  <option value="" selected>Select a Doctor</option>
                  <option value="Dr.Max Deo">Dr.Max Deo</option>
                  <option value="Dr.Maria Elizabeth">Dr.Maria Elizabeth</option>
                  <option value="Dr.James Alex">Dr.James Alex</option>
                </select>
                <textarea className='border grey rounded p-2' style={{ borderColor: 'grey', width: '100%', marginBottom: '10px' }} cols="47" rows="4" placeholder='Description (Optional)' onChange={(e) => setBooking({ ...booking, description: e.target.value })}></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={handlebooknow}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>

  );
}

export default Appointment;