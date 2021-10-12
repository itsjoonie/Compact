// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import Modal from 'react-modal';
import LoginFormPage from "../LoginFormPage";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
  },
  overlay:{
    backgroundColor: 'rgba(2, 2, 2, 0.680)'
  }
};

function SignupFormPage({modal2, setModal2, setModal1}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  
  function openModal() {
    setModal2(true);
  }


  function closeModal() {
    setModal2(false);
  }

  function openLoginForm(){
    setModal1(true)
    setModal2(false)
  }

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <button className="navlink-btn navsignup-btn" onClick={openModal}>Sign Up</button>
      <Modal
          isOpen={modal2}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Signup Modal"
        >
      <div className="login-form-page">
        <div className="closeModal">
          <i className="fas fa-times" onClick={closeModal}></i>
        </div>
        <div className="Signup-form-container">
       
          <div className="login-form-header">
            <div>
              <h2>Join Compact </h2>
            </div>
            <div>
              <p>Sign up to reserve or host tiny houses.</p>
              </div>
          </div>
        <form className="login-form" id="loginForm" onSubmit={handleSubmit}>
          {/* <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul> */}
        <div className="name-container">
          <div className="signup-form-inputs success error">
            <label>First Name</label>
            <i className="far fa-user-circle"></i>
              <input
                id="login-name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small>
          </div>

          <div className="signup-form-inputs success error">
            <label>Last Name</label>
            <i className="far fa-user-circle"></i>
              <input
                id="login-name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <i className="fas fa-check-circle"></i>
              <i className="fas fa-exclamation-circle"></i>
              <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small>
          </div>
        </div>

        <div className="form-inputs success error">
          <label>Username</label>
          <i className="fas fa-user-edit"></i>
            <input
              id="login-name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small>
        </div>
        
        <div className="form-inputs success error">
          <label>Email</label>
          <i class="far fa-envelope"></i>
            <input
              id="login-name"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small>
        </div>
        <div className="passwords-container">
            <div className="signup-form-inputs success error">
              <label>Password</label>
              <i class="fas fa-unlock-alt"></i>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small>
            </div>
            <div className="signup-form-inputs success error">
              <label>Confirm Password</label>
              <i class="fas fa-unlock-alt"></i>
                <input
                  id="login-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small>
            </div>
          </div>
            <button className="submit-form-btn" type="submit">Submit</button>
        </form>
        <div className="login-bottom">
          <p id="or"><span>or</span></p>
          <p id="question">Already have an account?</p>  <span><button className="orLogin" onClick={openLoginForm}>Login</button></span>
        </div>
      </div>
      </div>
      </Modal>
    </>
  );
}

export default SignupFormPage;
