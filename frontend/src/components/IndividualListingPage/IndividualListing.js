import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./IndividualListing.css"
import {getHostings, deleteOneHosting} from "../../store/hosting"
import BookingForm from "../Booking/BookingForm";



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
            <div className="individual-listing-container">
                <div className="individual-listing-header">
                <h1 className="individual-listing-title">{hosting?.title}</h1>
                <div>
                    <p>{hosting?.city}, {hosting?.state}, {hosting?.country}</p>
                    </div>
                </div>
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
                <div className="listing-booking-content">
                    <div className="listing-content-left">
                        <div className="hosted-by">
                            <h2>Tiny house hosted by {hosting?.User.firstName} {hosting?.User.lastName}</h2>
                        </div>
                        <div    className="listing-home">
                            <div>
                                <p>{hosting?.bed} beds</p>
                            </div>
                            <div>
                                <h3>·</h3>
                            </div>
                           
                            <div>
                                <p>{hosting?.bathroom} baths</p>
                                
                            </div>
                            <div>
                                <h3>·</h3>
                                </div>
                            
                            <div>
                                <p>{hosting?.guest} guests</p>
                            </div>
                        </div>
                        <div className="listing-extra-info">
                            <div>
                                <h4><i class="fas fa-home"></i>Entire House</h4><p>The whole tiny house experience to yourself.</p>
                            </div>
                            <div>
                                <h4>
                                <i class="fas fa-tint"></i>  Enhanced Cleaning
                                </h4>
                                <p>This Host committed to Compact's 3-step enhanced cleaning process.</p> 
                            </div>
                            <div>
                                <h4><i class="fas fa-key"></i>Great Check-in Experience</h4>
                                <p>Easy and contactless check-in.</p>
                            </div>

                        </div>
                        <div className="listing-description-info">
                            <p>{hosting?.description}</p>
                        </div>
                    </div>
                      <div   className="booking-component">
                    <BookingForm/>
                </div>
                </div>
               
           </div>
        </div>
    )
}

export default IndividualListing;