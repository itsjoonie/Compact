import {useState} from "react";
import { getHostings } from "../../store/hosting";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./BookingForm.css"
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css"

function BookingForm() {
    

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const[guest, setGuest] = useState(1);
 

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

    //if guest went over the limit, pause the counter when it hit max guest

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

    return(
        <div className="booking-form">
            <h1>Booking form</h1>
            <form>
                <label>Check-in</label>
                <DatePicker
                    selected={startDate}
                    minDate={new Date()}
                    onChange={handleCheckInDate}
                />
                <label>Check-out</label>
                <DatePicker
                    selected={endDate}
                    minDate={startDate}
                     onChange={handleCheckOutDate}
                />

                <label>How many guests?</label>
                <div className="guest-counter-content">
                   

                    <button onClick={guestCounterMinus}>
                        <i class="fas fa-user-minus"></i></button>
                    <div className="guestInput">
                        <label>{guest}</label>
                   </div>
                    <button onClick={guestCounter}>
                       <i class="fas fa-user-plus"></i>
                    </button>
                </div>

            </form>

        </div>
    )
}
export default BookingForm;