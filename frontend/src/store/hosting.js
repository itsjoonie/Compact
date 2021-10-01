import {csrfFetch} from './csrf';

//action types

const ADD_HOSTING = 'hostings/ADD_HOSTING';
const LOAD_HOSTINGS = 'hostings/LOAD_HOSTINGS';
const GET_HOSTING = 'hostings/HOSTING'
const UPDATE_HOSTING = 'hostings/UPDATE_HOSTING'
const DELETE_HOSTING = 'hostings/DELETE_HOSTING'

//action creators 
const addHosting = hosting => ({
    type: ADD_HOSTING,
    hosting
});

const loadHostings = hostings => ({
    type: LOAD_HOSTINGS,
    hostings
}) 

const getHosting = hosting =>({
    type: GET_HOSTING,
    hosting
})

const editHosting = hosting => ({
    type: UPDATE_HOSTING,
    hosting
})

const deleteHosting = hostingId => ({
    type: DELETE_HOSTING,
    hostingId
})


// thunks 

export const getHostings = () => async dispatch =>{
    const response = await csrfFetch(`/api/hostings`);
    if(response.ok){
        const list = await response.json();
        dispatch(loadHostings(list))
    }
}

export const getOneHosting = (hostingId) => async dispatch =>{
    const response = await csrfFetch(`/api/hostings/${hostingId}`);
    if(response.ok){
        const hosting = await response.json();
        dispatch(getHosting(hosting))
    }
    return response;

}

export const createHosting = (form) => async dispatch =>{
    console.log(form, "what is this")
    const response = await csrfFetch(`/api/hostings/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...form})
    });


    if(response.ok){
        const hosting = await response.json();
        dispatch(addHosting(hosting));    
        return hosting
    }

}

export const updateHosting = (hostingId, form) => async dispatch =>{
    const response = await csrfFetch(`/api/hostings/${hostingId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
    });
    const hosting = await response.json();
    if(response.ok){
        
        dispatch(editHosting(hosting));
    }
    return hosting
}

export const deleteOneHosting = (id) => async dispatch =>{
    const response = await csrfFetch(`/api/hostings/${id}`,{
        method: "DELETE"
    });
    dispatch(deleteHosting(id))
} 

let initialState = {}

const hostingReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case LOAD_HOSTINGS:
            return {
                ...state,
                ...Object.fromEntries(action.hostings.map(hosting => [hosting.id, hosting]))
            }
        case GET_HOSTING:
            return {
                ...state,
                [action.hosting.id]: action.hosting
            }
        case ADD_HOSTING: 
            return {
                ...state,
                [action.hosting.id]: action.hosting
            }
        case UPDATE_HOSTING: 
            return {
                ...state,
                [action.hosting.id]: action.hosting
            }
        case DELETE_HOSTING:
            const newState = {...state};
            delete newState[action.hostingId];
            return newState;

        default:
            return state;
    }
}

export default hostingReducer;