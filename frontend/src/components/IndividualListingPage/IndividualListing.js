import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./IndividualListing.css"
import {getHostings, deleteOneHosting} from "../../store/hosting"

function IndividualListing(){
    const dispatch = useDispatch()
    const id = useParams().id
    const hosting = useSelector((state) => state.hosting[id]) 
    console.log("what is this", hosting)


    useEffect(() => {
        dispatch(getHostings())
    }, [dispatch])


    return (
        <div className="individual-listing">
            <div className="individual-listing-title">
              
                <h1>Title Goes Here</h1>
                  <div className="images-container">
                    <div className="image-main">
                        <img id="pic1" src={hosting?.Images[0].pic1} alt=""></img>
                    </div>
                    <div className="images-left">
                        <div className="image1">
                            <img id="pic2" src={hosting?.Images[0].pic2} alt=""></img>
                        </div>
                        <div className="image2">
                            <img id="pic3" src={hosting?.Images[0].pic3} alt=""></img>
                        </div>

                    </div>
                </div>
                <div className="reviews-and-location">
                    <div className="listing-star-rating">
                        star review
                    </div>
                    <div    className="listing-location">
                        Location here
                    </div>
                    <div className="listing-like">Heart
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default IndividualListing;