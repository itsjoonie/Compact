// frontend/src/components/LoginFormPage/index.js

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';

import './LoginForm.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
  },
};

const form = document.getElementById("loginForm");
const username = document.getElementById("login-name");
const password = document.getElementById("login-password");



function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal() {
    setIsOpen(false);
  }

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        console.log(data)
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className="login-form-modal">
    <button className="navlink-btn navlogin-btn" onClick={openModal}>Log In</button>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className="login-form-page">
        <div className="login-form-header"><h2>LOGIN FORM</h2></div>
      <form className="login-form" id="loginForm" onSubmit={handleSubmit}>
        {/* <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul> */}
        <div className="form-inputs success error">
        <label>Username or Email</label>
          <input
            id="login-name"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
           
          />
          <i class="fas fa-check-circle"></i>
			    <i class="fas fa-exclamation-circle"></i>
          <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small>
        </div>
        <div className="form-inputs success error">
          <label>Password</label>
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
          <button className="login-form-btn" type="submit">Log In</button>
      </form>
    </div>
    </Modal>
  </div>
  );
}

export default LoginFormPage;
