import {csrfFetch} from './csrf';
const ADD_IMAGE = 'images/ADD_IMAGE';

const addImage = image => ({
    type: ADD_IMAGE,
    image
})

export const createImage = (payload) => async dispatch => {
    
    const {hostingId, pic1, pic2, pic3} = payload
    const form = new FormData();
    form.append("hostingId", hostingId);
    form.append("images", pic1)
    form.append("images", pic2)
    form.append("images", pic3)


  
    const response = await csrfFetch('/api/images/new', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: form,
    });
  
    if(response.ok){
        const image = await response.json();
        // dispatch(addImage(image)); 
        return image;
    }
}




let initialState = {}
const imageReducer = (state = initialState, action) =>{
    
    switch (action.type){

        // case ADD_IMAGE: 
        //     return {
        //         ...state,
        //         [action.image.id]: action.image
        //     }

        default:
            return state;
    }
}

export default imageReducer ;