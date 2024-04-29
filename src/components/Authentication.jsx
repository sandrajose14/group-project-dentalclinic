import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import './Authentication.css'
import { Link } from 'react-router-dom';

function Authentication({register}) {
  const [isSignUpMode , setIsSignUpMode] = useState(false);
  

  const handleSignUp = ()=>{
    setIsSignUpMode(true)
   
  }

  const handleSingIn = ()=>{
    
    
  }

  const RegisterForm = register?true:false
  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form  className='sign-in-form loginForm'>
            <h2 className='title'>Sign In</h2>
            <div className='input-field'>
            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto' />
            <input type="text" className='LoginInput' placeholder='Username' />
            </div>
            <div className='input-field'>
            <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto' />
            <input type="email" className='LoginInput' placeholder='Email' />
            </div>
            <div className='input-field'>
            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto' />
            <input type="password" className='LoginInput' placeholder='Password' />
            </div>

            <button className='btn'>Sign In</button>

            <p  className='social-text loginp'> Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="" className='social-icon'>
              <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
              </a>
              <a href="" className='social-icon'>
              <FontAwesomeIcon icon={faLinkedin} className='my-auto mx-auto' /> 
              </a>
            </div>
            </form>


            {/* sign up */}

            <form  className='sign-up-form loginForm'>
            <h2 className='title'>Sign Up</h2>
            <div className='input-field'>
            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto' />
            <input type="text" className='LoginInput' placeholder='Username' />
            </div>

          
            <div className='input-field'>
            <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto' />
            <input type="email" className='LoginInput' placeholder='Email' />
            </div>
            <div className='input-field'>
            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto' />
            <input type="password" className='LoginInput' placeholder='Password' />
            </div>

            <button className='btn'>Sign Up</button>

            <p  className='social-text loginp'>Or Sign up with social platforms</p>
            <div className="social-media">

              <a href="" className='social-icon'>
              <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
              </a>
              <a href="" className='social-icon'>
              <FontAwesomeIcon icon={faLinkedin} className='my-auto mx-auto' /> 
              </a>
            </div>
            </form>


        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>A smile remains the most inexpensive gift I can bestow on anyone and yet its powers can vanquish kingdoms</p>
            <button className='btn transparent' id='sign-up-btn' onClick={handleSignUp}>Sign Up</button>
          </div>
           <img src="https://www.pngall.com/wp-content/uploads/8/Male-Dentist-PNG.png" className='image' alt="" /> 
        </div>
        <div className='panel right-panel'>
          <div className="content">
            <h3 className='loginh3'>One of us?</h3>
            <p className='loginp'>Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.</p>
           {/* <button onClick={handleSingIn} className='btn transparent' id='sign-in-btn'>Sign In</button> */}
          </div>
          <img src="https://i.pinimg.com/originals/99/1e/1c/991e1cc50b7a0173ef3bb5f3e673dad8.png " className='image' alt="" /> 

        </div>
      </div>
    </div>
  )
}

export default Authentication