import { height } from '@fortawesome/free-solid-svg-icons/faTooth'
import React from 'react'

function Feedback() {
  return (
    <>
    <h1 className='text-center text-light mt-5' style={{fontWeight:'bold'}}>Share Your Feedback!</h1>
          <div className="row mt-3">
            <div className="col-md-3"></div>
            <div className="col-md-6"><Feedback/></div>
            <div className="col-md-3"></div>
          </div>
        <form action="">
            
            <textarea className='w-100 rounded' placeholder='Write your feedback' name="" id="" cols="30" rows="5"></textarea>
           <div className='text-center mt-3'> <button className='btn btn-warning '>Submit</button></div>
        </form>
    </>
  )
}

export default Feedback