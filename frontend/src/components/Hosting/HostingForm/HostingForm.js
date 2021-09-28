import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
        if(newHosting){
            history.push(`/hostings`)
        }
    }

 

    return (
        <div className="hosting-form-page">
            <div className="hosting-form-container">
                <form className="hosting-form" onSubmit={handleSubmit}>
                    <div className="hosting-form-heading">
                        <h1>Hosting Application</h1>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label>Title</label>
                        </div>
                        <input 
                        type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label>Description</label>
                        </div>
                        <textarea
                        type="text" name="description" rows="5" cols="33" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label>City</label>
                        </div>
                        <input 
                        type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label>State</label>
                        </div>
                        <input 
                        type="text" name="state" value={state} onChange={(e) => setState(e.target.value)}/>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label>Country</label>
                        </div>
                        <input 
                        type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                     <div className="hosting-form-field">
                        <div>
                            <label>How many people can stay here?</label>
                        </div>
                        <input 
                        type="text" name="guest" value={guest} placeholder="how many people can stay?" onChange={(e) => setGuest(e.target.value)}/>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label>Pets allowed?</label>
                        </div>
                        <input 
                        type="radio" id="yesPet" name="pet" value={true} onChange={(e) => setPet(e.target.value)}/> 
                        <label for="yesPet">Yes</label>
                        <input 
                        type="radio" id="noPet" name="pet" value={false} onChange={(e) => setPet(e.target.value)}/>
                        <label for="noPet">No</label>
                    </div>   
                    <div className="hosting-form-field">
                        <div>
                            <label>How many beds?</label>
                        </div>
                        <input 
                        type="text" name="bed" value={bed} onChange={(e) => setBed(e.target.value)}/>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label>how many bathrooms?</label>
                        </div>
                        <input 
                        type="text" name="bathroom" value={bathroom} onChange={(e) => setBathroom(e.target.value)}/>
                    </div>
                    <div className="hosting-form-field">
                        <div>
                            <label>Set Price per day</label>
                        </div>
                        <input 
                        type="text" name="price" value={price}  onChange={(e) => setPrice(e.target.value)}/>
                    </div> 
                    <button type="submit">submit</button>   
                    <button >Cancel</button>               
                </form>
            </div>

        </div>
    )

}

export default HostingForm;