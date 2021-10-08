// frontend/src/components/Navigation/index.js
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import ProfileButton from './ProfileButton';
import logo from "./logo.png"
import './Navigation.css';
import Modal from 'react-modal';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';


function Navigation({ isLoaded }){
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

   
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    // <ul>
    //   <li>
    //     <NavLink exact to="/">Home</NavLink>
    //     {isLoaded && sessionLinks}
    //   </li>
    // </ul>
    <div className="Navbar">

       
        {!sessionUser ?
        <>
          <div className="logo-container">
          <NavLink to="/">
            <img id="compactLogo" src={logo} alt="logo"/>
          </NavLink>
          </div>
        <div className="Navbar-links">
          <div>

            <LoginFormPage modal1={modal1} setModal1={setModal1} setModal2={setModal2}/>
          </div>
          <div>
            <SignupFormPage modal2={modal2} setModal2={setModal2} setModal1={setModal1}/>
          </div>
        </div>
        </>

        :
        <>
          <div className="logo-container">
          <NavLink to="/">
            <img id="compactLogo" src={logo} alt="logo"/>
          </NavLink>
          </div>
        <div className="Navbar-links">
          <div>
            
          </div>
          <div>
            <NavLink to="/signup"><button className="navlink-btn navsignup-btn" onClick={logout}>Log Out</button></NavLink>
          </div>
        </div>
        </>
        }
      

    </div>
  );
}

export default Navigation;