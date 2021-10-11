import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./IndividualListing.css"
import {getHostings, deleteOneHosting} from "../../store/hosting"
import { getBookings, removeBooking} from "../../store/booking";
import {getReviews} from "../../store/review"
import BookingForm from "../Booking/BookingForm";
import ReviewForm from "../Review/ReviewForm";




function IndividualListing(){
    const dispatch = useDispatch()
    const id = useParams().id
    const hosting = useSelector((state) => state.hosting[id]) 
    const sessionUser= useSelector(state => state.session.user?.id);
    // const booking = hosting?.Bookings.filter(booking => (
    //     booking.userId == userId
    // ))
    let allBooking = Object.values(useSelector(state => state.booking));

  


    const reviews = Object.values(useSelector(state => state.review))

        console.log("what is this reviews", reviews)

    console.log("what is alllll", allBooking)

    console.log("what is reviews", reviews)

    //if hosting id === booking.hostingId and sessionUser === booking.userId then delete 



    console.log("what is hostingggg", hosting)

    const [bookingId, setBookingId] = useState("")



    useEffect(() => {
        dispatch(getHostings())
        dispatch(getBookings())
        dispatch(getReviews())
    }, [dispatch])

    const handleDelete = (e) =>{
        dispatch(removeBooking(e.target.id))
    }


    return (
        <div className="individual-listing">
            <div className="individual-listing-container">
                <div className="individual-listing-header">
                <div>
                <h1 className="individual-listing-title">{hosting?.title}</h1>
                </div>
                <div>
                    <p>{hosting?.city}, {hosting?.state}, {hosting?.country}</p>
                    </div>
                </div>
                  <div className="images-container">
                    <div className="image-main">
                        <img id="pic1" src={hosting?.Images[0]?.pic1} alt=""></img>
                    </div>
                    <div className="images-left">
                        <div className="image1">
                            <img id="pic2" src={hosting?.Images[0]?.pic2} alt=""></img>
                        </div>
                        <div className="image2">
                            <img id="pic3" src={hosting?.Images[0]?.pic3} alt=""></img>
                        </div>

                    </div>
                </div>
                <div className="listing-booking-content">
                    <div className="listing-content-left">
                        <div className="hosted-by">
                            <h2>Tiny house hosted by {hosting?.User?.firstName} {hosting?.User?.lastName}</h2>
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
                        <div>
                        <h3>Reviews</h3>
                            <div>
                                {reviews?.map(review =>(<div key={review.id}>{
                                    review?.Booking?.Hosting?.id == hosting.id ?
                                    <div>
                                        <div>{review?.User?.firstName}</div>
                                        {review?.starRating}
                                        <p>
                                            {review?.reviewText}
                                        </p>
                                    </div>
                                    :
                                    <></>
                                }</div>))}
                               
                            </div>
                        </div>
                    </div>
                      <div   className="booking-component">
                        <BookingForm/>
                        <div className="reservation">
                            {allBooking?.map(booking => (<div key={booking.id}>{
                                booking.userId == sessionUser ? 
                                    <div>
                                        <div>
                                            <h3> You have reserved this tiny home from: {booking.startDate} to {booking.endDate}</h3>
                                            <button id ={booking?.id} className="cancle-reservation" onClick={handleDelete}>Cancel Reservation!</button>
                                        </div>
                                        <div>
                                            <ReviewForm bookingId={booking?.id}/>
                                        </div>
                                        
                                    </div>
                            
                            :
                            <></>
                            }</div>))
                            }
                            
                        </div>
                    </div>
                </div>
               
           </div>
        </div>
    )
}

export default IndividualListing;