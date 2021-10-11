import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink, useParams} from "react-router-dom";
import * as sessionActions from "../../../store/session";
import {createImage} from "../../../store/image";
import "./ImageForm.css"
import "./HostingForm.css"

function ImageForm(){
    const dispatch = useDispatch();
    let history = useHistory();
    const userId = useSelector(state => state.session.user.id); // grab user id from store
    const {hostingId} = useParams();





    const [pic1, setPic1] = useState("");
    const [pic2, setPic2] = useState("");
    const [pic3, setPic3] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("hosting id pls", hostingId)
        const payload = {
            hostingId,
            pic1, //fakepath
            pic2,
            pic3
        }
     

      const newImage = await dispatch(createImage(payload))

        if(newImage){
            history.push(`/listing/${hostingId}`)
        }
    }

    
    function imageInput1(e){

        const file =e.target.files[0]
        if(file) setPic1(file)

    }

    function imageInput2(e){

        const file =e.target.files[0]
        console.log(file, "WHAT IS THIS FILEEEEEE")
        if(file) setPic2(file)

    }

    function imageInput3(e){

        const file =e.target.files[0]
        if(file) setPic3(file)

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
                     <form className="hosting-form" onSubmit={handleSubmit}>    
                            <div className="image-form-container">
                                <div className="add-image1">
                                    <input type="file" name="filename" accept="image/jpeg, image/png"  onChange={imageInput1}/>


                                </div>
                                <div className="add-image-right">
                                    <div className="image-right-side add-image2"><input type="file" name="filename" accept="image/jpeg, image/png"  onChange={imageInput2}/></div>
                                    <div className="image-right-side  add-image3"><input type="file" name="filename" accept=" image/jpeg, image/png" onChange={imageInput3}/></div>
                                
                                </div>
                            </div>
                            <div id="hosting-btns">
                                <div>
                                    <NavLink to="/">
                                        <button className="hosting-btn">Cancel</button>  
                                    </NavLink> 
                                </div>
                                <div>
                                    <button className="hosting-btn" type="submit">Submit</button> 
                                </div> 
                            </div>   
                        </form>
                    </div>  
            </div>

        </div>
    )
}

export default ImageForm;
