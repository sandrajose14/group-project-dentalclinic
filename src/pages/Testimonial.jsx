import React from 'react';

function Testimonial() {
  return (
    <div className="container mb-5"style={{backgroundColor:'lavender'}}>
      <h1 className="text-center text-primary mt-5 fw-bold">Share Your Feedback!</h1>
      <div className="row justify-content-center mt-5 " >
        <div className="col-md-6">
          <form>
            <textarea className="form-control rounded" placeholder="Write your feedback" rows="5"></textarea>
            <div className="text-center mt-3">
              <button className="btn btn-warning">Submit</button>
            </div>
          </form>

        </div>
        <div className="card mb-3" style={{backgroundColor:'lavender'}}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Jane Smith</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nemo. Cupiditate rerum, tempore quaerat est voluptatum voluptatibus quo perspiciatis? Quaerat non maiores, corrupti repellendus voluptatem neque? Cupiditate temporibus unde laudantium.
              </p>
            </div>
          </div>
          
      </div>
    </div>
  );
}

export default Testimonial;
