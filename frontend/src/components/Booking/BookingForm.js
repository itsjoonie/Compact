import {useState} from "react";
import { getHostings } from "../../store/hosting";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./BookingForm.css"
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css"
import { createBooking } from "../../store/booking";

function BookingForm() {
    const dispatch = useDispatch();
    let history = useHistory();
   
    const id = useParams().id
    const hosting = useSelector((state) => state.hosting[id]) 
    const hostingId = hosting?.id
    const userId = useSelector(state => state.session.user.id); 
    console.log("stayhereree", hosting)
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const[guest, setGuest] = useState(1);
    const [day, setDay] = useState(0);
 

    const handleCheckInDate = (date) => {
        setStartDate(date);
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

const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            hostingId,
            userId,
            startDate,
            endDate,
            guest
        }

        let newBooking = await dispatch(createBooking(payload))
       
        if(newBooking){
            history.push(`/`)
        }
    }
 



const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffDays + " days");


    //if guest went over the limit, pause the counter when it hit max guest

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

    return(
        <div className="booking-form-page">
            <div>
            <h1>Stay Here?</h1>
                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="date-inputs">
                        <div>
                            <label>Check-in</label>
                            <DatePicker
                                selected={startDate}
                                minDate={new Date()}
                                onChange={handleCheckInDate}
                                value={startDate}
                            />
                        </div>
                    <div>
                    <label>Check-out</label>
                    <DatePicker
                        selected={endDate}
                        minDate={startDate}
                        onChange={handleCheckOutDate}
                        value={endDate}
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
                    </div>
                    <button className="bookingBtn" type="submit">RESERVE NOW!</button>
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