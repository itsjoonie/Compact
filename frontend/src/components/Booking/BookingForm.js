import {useState} from "react";
import { getHostings } from "../../store/hosting";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./BookingForm.css"
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css"
import { createBooking } from "../../store/booking";
import LoginFormPage from "../LoginFormPage";



function BookingForm() {
    const dispatch = useDispatch();
    let history = useHistory();
   
    const sessionUser= useSelector(state => state.session.user?.id);
    const id = useParams().id
    const hosting = useSelector((state) => state.hosting[id]) 
    const hostingId = hosting?.id
    
    const userId = useSelector(state => state.session.user?.id); 
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const[guest, setGuest] = useState(1);
    const [day, setDay] = useState(0);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
 

    const handleCheckInDate = (date) => {
        setStartDate(date)
        setEndDate(null);
    };
    const handleCheckOutDate = (date) => {
        setEndDate(date);
    };

 

    // guest counter

    const guestCounter = (e) => {
        e.preventDefault();
        setGuest(guest + 1)
    }
    let guestCounterMinus = (e) => {
        e.preventDefault();
        setGuest(guest - 1)
    };
    if(guest<=1){
        
        guestCounterMinus = (e) => {
            e.preventDefault();
            setGuest(1)
        };
    }
    if(guest>hosting?.guest){
        setGuest(hosting?.guest)
        window.alert("Reach max guest for this hosting.")
    }

const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            hostingId,
            userId,
            startDate: moment(startDate).format("L"),
            endDate: moment(endDate).format("L"),
            guest
        }

       await dispatch(createBooking(payload))
       window.alert("You have successfully made a reservation!")
       clearForm()
       
        // if(newBooking){
        //     history.push(`/`)
        // }
    }
 
const clearForm =() =>{
    setStartDate("")
    setEndDate("")
    setGuest(1)
}

const noSessionUser = () =>{
    window.scrollTo(0, 0);
    window.alert("Please login or signup to reserve a booking")
}




const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 


    //if guest went over the limit, pause the counter when it hit max guest


    return(
        <div className="booking-form-page">
            <div>
            <h1>Stay Here?</h1>
                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="booking-inputs">
                        <div className="date-inputs">
                            <div>
                                <label>Check-in</label>
                                <DatePicker
                                    dateFromat="YYYY-MM-dd"
                                    selected={startDate}
                                    minDate={new Date()}
                                    onChange={handleCheckInDate}
                                    value={startDate}
                                    required
                                />
                            </div>
                        <div>
                        <label>Check-out</label>
                            <DatePicker
                                dateFromat="YYYY-MM-dd"
                                selected={endDate}
                                minDate={startDate}
                                onChange={handleCheckOutDate}
                                value={endDate}
                                required
                        />
                        </div>
                            <div className="guestNum">
                                <label>How many guests?</label>
                                    <div className="guest-counter-content">
                                    

                                        <button onClick={guestCounterMinus}>
                                            <i class="fas fa-user-minus"></i></button>
                                        <div className="guestInput">
                                                <label value={guest}>{guest}</label>
                                        </div>
                                        
                                    <button onClick={guestCounter}>
                                        
                                    <i class="fas fa-user-plus"></i>
                                    </button>
                                    
                                </div>
                            </div>
                            <div className="pay-later"><p>*reserve now pay later!</p></div>
                        </div>
                    </div>
                    { sessionUser ?
                    <button className="bookingBtn" type="submit">RESERVE NOW!</button>
                    :
                    <button className="bookingBtn" type="submit" onClick={noSessionUser}>Login to Reserve</button>
                    }
                    {/* <div>
                        <label>Total days</label>
                        <label>{setDay(setEndDate)}</label>
                    </div> */}
                </form>
            </div>
        </div>
    )
}
export default BookingForm;