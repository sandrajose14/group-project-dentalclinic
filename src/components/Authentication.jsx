import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Authentication.css";
import { checkUserExists, checkUserExists1, userRegisterApi } from "../services/callApi";
import { useNavigate } from "react-router-dom";

function Authentication({ register }) {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();
  //state for register
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(user);


  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };
  // user registration
  const handleregister = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;
    console.log(username, email, password);

    if (!username || !email || !password) {
      alert("Fill the form completely");
    } else {
      const userExists = await checkUserExists(email);

      if (userExists) {
        alert("User already exists");
      } else {
        const result = await userRegisterApi(user);
        console.log(result);

        if (result.status === 201) {
          alert("Registration Successful");
          setUser({
            username: "", 
            email: "",
            password: "",
          });
          navigate("/login");
        } else {
          alert(result.response.data);
        }
      }
    }
  };

  //user login
  const handlelogin = async (e)=>{
    e.preventDefault();
    const { username, email, password } = user;
    console.log(username, email, password);

    if (!username || !email || !password) {
      alert("Fill the form completely");
    } else {
      const userExists = await checkUserExists1(username,email,password);

      if (!userExists) {
        alert("User name or Email Or Password is wrong");
      } else {
        alert('user exist');
        navigate('/treatment');
      }
    }

  }

  
  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="text"
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input className="LoginInput" type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button className="btn" onClick={handlelogin}>Sign In</button>

            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="my-auto mx-auto"
                />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="email"
                value={user.email}
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button className="btn" onClick={handleregister}>
              Sign Up
            </button>
            <p className="social-text loginp">
              Or Sign up with social platforms
            </p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="my-auto mx-auto"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">New here?</h3>
            <p className="loginp">
              A smile remains the most inexpensive gift I can bestow on anyone
              and yet its powers can vanquish kingdoms
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img
            src="https://www.pngall.com/wp-content/uploads/8/Male-Dentist-PNG.png"
            class="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">One of us ?</h3>
            <p className="loginp">
              Every time you smile at someone, it is an action of love, a gift
              to that person, a beautiful thing.
            </p>
            <button
              onClick={handleSignInClick}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img
            src="https://i.pinimg.com/originals/99/1e/1c/991e1cc50b7a0173ef3bb5f3e673dad8.png"
            class="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
