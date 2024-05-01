import React from 'react';

function Profile() {
  return (
    <div className="container p-3 my-4" style={{backgroundColor:'lavender'}}>
      <h1 className="text-center text-primary fw-bold">Profile</h1>
      <div className="row mt-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" className="form-control" id="age" />
            </div>
            <div className="mb-3">
    <label htmlFor="gender" className="form-label">Gender</label>
    <div className="d-flex align-items-center">
        <div className="form-check me-3">
            <input type="radio" className="form-check-input" name='gender' id="male" value="male" />
            <label className="form-check-label" htmlFor="male">Male</label>
        </div>
        <div className="form-check me-3">
            <input type="radio" className="form-check-input" name='gender' id="female" value="female" />
            <label className="form-check-label" htmlFor="female">Female</label>
        </div>
        <div className="form-check">
            <input type="radio" className="form-check-input" name='gender' id="others" value="others" />
            <label className="form-check-label" htmlFor="others">Others</label>
        </div>
    </div>
</div>


            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text"><strong>Name:</strong> John Doe</p>
              <p className="card-text"><strong>Email:</strong> johndoe@example.com</p>
              <p className="card-text"><strong>Phone:</strong> 123-456-7890</p>
              <p className="card-text"><strong>Age:</strong>21</p>
              <p className="card-text"><strong>Phone:</strong> 123-456-7890</p>
              <p className="card-text"><strong>Age:</strong> 21</p>
              <p className="card-text"><strong>Address:</strong> 123 Main Street, City, Country</p>
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
