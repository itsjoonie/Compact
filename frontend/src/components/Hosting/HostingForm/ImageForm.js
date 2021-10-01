import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import {createHosting} from "../../../store/hosting";
import "./ImageForm.css"
import "./HostingForm.css"

function ImageForm(){
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
            
        }

        let newHosting = await dispatch(createHosting(payload))
        if(newHosting){
            history.push(`/hostings`)
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
                <div>
                        <h1>Add Images</h1>
                        </div>
                   <div className="image-form-heading">
                        
                        <div className="image-form-container">
                            <div className="add-image1">
                                <input type="file" name="filename" accept="image/jpeg, image/png"/>


                            </div>
                            <div className="add-image-right">
                                <div className="image-right-side add-image2"><input type="file" name="filename" accept="image/jpeg, image/png"/></div>
                                <div className="image-right-side  add-image3"><input type="file" name="filename" accept=" image/jpeg, image/png"/></div>
                                {/* <script>
                                    const fileInput = document.getElementsByClassName('file-input');
                                    const previewContainer = document.getElementsByClassName('preview-container');
                                    const previewImage = previewContainer.querySelector('.preview-image');
                                </script> */}
                            </div>
                        </div>
                    </div>
                <form className="hosting-form" onSubmit={handleSubmit}>
                        
                </form>
            </div>

        </div>
    )
}

export default ImageForm;
