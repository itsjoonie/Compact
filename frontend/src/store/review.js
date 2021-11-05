
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

const deleteReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
})

const editReview = review =>({
    type: EDIT_REVIEW,
    review
})

export const getReviews = () => async dispatch =>{
    const response = await csrfFetch(`/api/reviews/`);
    if(response.ok){
        const reviews = await response.json();
        dispatch(loadReviews(reviews))
    }
}

export const createReview= (form) => async dispatch =>{
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

export const updateReview = (form, id) => async dispatch =>{
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    const review= await response.json();

    if(response.ok){
        
        dispatch(editReview(review));
        return review
    }
    
}

export const removeReview = (id) => async dispatch =>{
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: "DELETE"
    });
    const data = res.json()
    dispatch(deleteReview(id))
}



let initialState = {}

const reviewReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_REVIEWS:
            return {
                ...state, 
                ...Object.fromEntries(action.reviews.map(review => [review.id, review]))
            }
        case ADD_REVIEW:
            return{
                ...state,
                [action.review.id]: action.review
            }
        case EDIT_REVIEW: 
            return {
                ...state,
                [action.review.id]: action.review
            }
        case DELETE_REVIEW:
            const newState = {...state};
            delete newState[action.reviewId];
            return newState;
   
        default:
            return state;
    }
}

export default reviewReducer;