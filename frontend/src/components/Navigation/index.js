// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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

        <div className="logo-container">
          <NavLink to="/">
            <h1>LOGO HERE</h1>
          </NavLink>
        </div>
        <div className="Navbar-links">
          <div>
            <NavLink to="/login"><button className="navlink-btn navlogin-btn">Log In</button></NavLink>
          </div>
          <div>
            <NavLink to="/signup"><button className="navlink-btn navsignup-btn">Sign Up</button></NavLink>
          </div>

        </div>

    </div>
  );
}

export default Navigation;
