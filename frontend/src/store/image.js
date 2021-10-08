import {csrfFetch} from './csrf';
const ADD_IMAGE = 'images/ADD_IMAGE';

const addImage = image => ({
    type: ADD_IMAGE,
    image
})

export const createImage = (form) => async dispatch => {
    const response = await csrfFetch('/api/images/new', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...form})
    });

    if(response.ok){
        const image = await response.json();
        dispatch(addImage(image));
        return image;
    }
}




let initialState = {}
const imageReducer = (state = initialState, action) =>{
    
    switch (action.type){

        case ADD_IMAGE: 
            return {
                ...state,
                [action.image.id]: action.image
            }

        default:
            return state;
    }
}

export default imageReducer ;