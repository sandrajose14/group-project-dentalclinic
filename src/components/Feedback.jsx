import { height } from '@fortawesome/free-solid-svg-icons/faTooth'
import React from 'react'

function Feedback() {
  return (
    <>
        <form action="">
            
            <textarea className='w-100 rounded' placeholder='Write your feedback' name="" id="" cols="30" rows="5"></textarea>
           <div className='text-center mt-3'> <button className='btn btn-warning '>Submit</button></div>
        </form>
    </>
  )
}

export default Feedback