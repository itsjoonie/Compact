import { csrfFetch } from "./csrf";

const ADD_REVIEW = "reviews/ADD_REVIEW";
const LOAD_REVIEWS = "reviews/LOAD_REVIEWS";
const EDIT_REVIEW = "reviews/EDIT_REVIEW"
const DELETE_REVIEW = "reviews/DELETE_REVIEW"

const loadReviews = reviews => ({
    type: LOAD_REVIEWS,
    reviews
})

const addReview = review => ({
    type: ADD_REVIEW,
    review
})


export const getReviews = () => async dispatch =>{
    const response = await csrfFetch(`/api/reviews`);
    if(response.ok){
        const reviews = await response.json();
        dispatch(loadReviews(reviews))
    }
}

export const createReview= (form) => async dispatch =>{
    console.log(form, "what is this")
    const response = await csrfFetch(`/api/reviews/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...form})
    });
    if(response.ok){
        const review = await response.json();
        dispatch(addReview(review));    
        return review
    }

}



let initialState = {}

const reviewReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_REVIEWS:
            return {
                ...state, 
                ...Object.fromEntries(action.reviews.map(review => [review.id, review]))
            }
        default:
            return state;
    }
}

export default reviewReducer;