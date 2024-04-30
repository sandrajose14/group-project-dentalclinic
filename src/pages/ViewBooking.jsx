import React from 'react';
import './viewbooking.css'; // Import CSS file for custom styling
import { Link } from 'react-router-dom';


function ViewBooking() {
  return (
    <div className="container-fluid view-booking-container">
      <h2 className="text-center mb-4">View Bookings</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Doctor</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Dr. Smith</td>
              <td>Checkup</td>
              <td>2024-04-30</td>
              <td>10:00 AM</td>
              <td>
                
                <button className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
            {/* Add more rows here if needed */}
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://www.marcotec-shop.com/pub/static/frontend/Triple/marcotec/en_US/images/loading_small.gif" alt="" height={'250px'}/>
      <h1>No Bookings</h1>
      <Link to={'/'}><button className='btn btn-success mb-3'>Go to Home</button></Link>
    </div>
    </div>
  );
}

export default ViewBooking;
