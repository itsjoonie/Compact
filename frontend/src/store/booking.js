import { csrfFetch } from "./csrf";

const ADD_BOOKING = "bookings/ADD_BOOKING";
const LOAD_BOOKING = "bookings/LOAD_BOOKING";
const DELETE_BOOKING = "bookings/DELETE_BOOKING"


const loadBookings = bookings => ({
    type: LOAD_BOOKING,
    bookings
})

const addBooking = booking => ({
    type: ADD_BOOKING,
    booking
})

const deleteBooking = booking => ({
    type: DELETE_BOOKING,
    booking
})


export const getBookings = () => async dispatch =>{
    const response = await csrfFetch(`/api/bookings`);
    if(response.ok){
        const list = await response.json();
        dispatch(loadBookings(list))
    }
}

export const createBooking= (form) => async dispatch =>{
    console.log(form, "what is this")
    const response = await csrfFetch(`/api/bookings/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...form})
    });
    if(response.ok){
        const booking = await response.json();
        dispatch(addBooking(booking));    
        return booking
    }

}

export const removeBooking = (id) => async dispatch =>{
    const res = await csrfFetch(`/api/bookings/${id}`, {
        method: "DELETE"
    });
    const data = res.json()
    dispatch(deleteBooking(id))
}


let initialState = {}

const bookingReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_BOOKING:
            return {
                ...state, 
                ...Object.fromEntries(action.bookings.map(booking => [booking.id, booking]))
            }
        default:
            return state;
    }
}

export default bookingReducer;


