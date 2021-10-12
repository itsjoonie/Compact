import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import {createHosting} from "../../../store/hosting";
import "./HostingForm.css"

function HostingForm(){
    const dispatch = useDispatch();
    let history = useHistory();
    const userId = useSelector(state => state.session.user.id); // grab user id from store

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [guest, setGuest] = useState("");
    const [pet, setPet] = useState(false);
    const [bed, setBed] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [price, setPrice]= useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            title,
            description,
            city,
            state,
            country,
            guest,
            pet,
            bed,
            bathroom,
            price
        }

        let newHosting = await dispatch(createHosting(payload))
        console.log(newHosting.hosting.id, "WHAT IS NEWHOSTING")
        if(newHosting){
            history.push(`/application/hosting/images/${newHosting.hosting.id}`)
        }
    }

 

    return (
        <div className="hosting-form-page">
            <div className="hosting-form-picture">
                <div className="hosting-form-slogan">
                <h1>Host your tiny house, earn big bucks</h1>
                </div>
            </div>
            <div className="hosting-form-container">
                   <div className="hosting-form-heading">
                        <div>
                        <h1>Hosting Application</h1>
                        </div>
                    </div>
                <form className="hosting-form" onSubmit={handleSubmit}>
                 
                    <div className="hosting-form-field">
                        <div className="hosting-form-label">
                            <label>Title</label>
                        </div>
                        <div>
                            <input className="hosting-input-box"
                            type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="hosting-form-field">
                        <div className="hosting-form-label">
                            <label>Description</label>
                        </div>
                        <div>
                            <textarea className="hosting-textarea"
                            type="text" name="description" rows="10" cols="33" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="hosting-form-field">
                        <div className="hosting-form-label">
                            <label>City</label>
                        </div>
                        <input className="hosting-input-box"
                        type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} required/>
                    </div>
                    <div className="hosting-form-field">
                        <div className="hosting-form-label">
                            <label>State</label>
                        </div>
                        <input className="hosting-input-box"
                        type="text" name="state" value={state} onChange={(e) => setState(e.target.value)} required/>
                    </div>
                    <div className="hosting-form-field">
                        <div className="hosting-form-label">
                            <label>Country</label>
                        </div>
                        <input className="hosting-input-box"
                        type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} required/>
                    </div>
                     <div className="hosting-form-field">
                        <div className="hosting-form-label">
                            <label>How many people can stay here?</label>
                        </div>
                        <div>
                            <select className="hosting-input-box"
                            name="guest" value={guest}
                            onChange={(e) => setGuest(e.target.value)} required>
                                <option>Please select a number</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </select>
                        </div>
                    </div>
                    <div className="petAllowed">
                        <div><label>Pets allowed?  </label>
                        <input 
                        type="radio" id="yesPet" name="pet" value={true} onChange={(e) => setPet(e.target.value)} required/> 
                        <label for="yesPet">Yes  </label>
                        <input 
                        type="radio" id="noPet" name="pet" value={false} onChange={(e) => setPet(e.target.value)} required/>
                        <label for="noPet">No</label>
                        </div>
                    </div>   
                    <div className="hosting-form-field">
                        <div className="hosting-form-label">
                            <label>How many beds?</label>
                        </div>
                        <select className="hosting-input-box"
                        name="bed" value={bed}
                        onChange={(e) => setBed(e.target.value)} required>
                            <option>Please select a number of bedrooms</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                        </select>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label className="hosting-form-label">How many bathrooms?</label>
                        </div>
                        <select className="hosting-input-box"
                        name="bathroom" value={bathroom}
                        onChange={(e) => setBathroom(e.target.value)} required>
                            <option>Please select a number of bathrooms</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                        </select>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label className="hosting-form-label">Set Price per day</label>
                        </div>
                        <input className="hosting-input-box"
                        type="text" name="price" value={price}  onChange={(e) => setPrice(e.target.value)} required/>
                    </div>
                    <div id="hosting-btns">
                        <div>
                            <NavLink to="/">
                                <button className="hosting-btn">Cancel</button>  
                            </NavLink> 
                        </div>
                        <div>
                            <button className="hosting-btn" type="submit">Next</button> 
                        </div> 
                    </div>           
                </form>
            </div>

        </div>
    )

}

export default HostingForm;