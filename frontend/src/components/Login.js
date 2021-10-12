import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Login.css"

function Login(){

    const sessionUser= useSelector(state => state.session.user?.id);

    return (

         
            <div className="Protected-container">
                <div className="oopsie">
                    { !sessionUser ?
                    <div className="oopsie-container">
                    <h1 className="oppsie-h1">OOPS YOU ARE NOT LOGGED IN TO ACCESS THIS</h1>
                
                    <h2> Please login or sign up</h2>
                    <h3>Thank you! </h3>
                    </div>
                    :
                    <div className="oopsie-container">
                    <h1 className="oppsie-h1">You are now logged in!</h1>
                    <div className="exploreMoreBtn">
                        <div>
                            <NavLink to="/listing">
                            <button className="exploreMore">EXPLORE MORE~</button>
                            </NavLink>
                        </div>
                    </div>
                    </div>
                    }
                
        
                </div>
            </div>
    
 
    )
}

export default Login;