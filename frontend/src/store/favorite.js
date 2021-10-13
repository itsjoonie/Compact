import { csrfFetch } from "./csrf";

const ADD_FAVORITE ="favorites/ADD_FAVORITE"
const LOAD_FAVORITE = "favorites/LOAD_FAVORITE"
const DELETE_FAVORITE = "favorites/DELETE_FAVORITE"

const loadFavorite = favs => ({
    type: LOAD_FAVORITE,
    favs
})

const addFavorite = fav => ({
    type: ADD_FAVORITE,
    fav
})

const deleteFavorite = favId => ({
    type: DELETE_FAVORITE,
    favId
});



export const getFavorites = () => async dispatch =>{
    const response = await csrfFetch(`/api/favorites`);
    if(response.ok){
        const list = await response.json();
        dispatch(loadFavorite(list))
    }
};

export const createFavorite= (form) => async dispatch =>{

    const response = await csrfFetch(`/api/favorites/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...form})
    });
    if(response.ok){
        const favorite = await response.json();
        dispatch(addFavorite(favorite));    
        return favorite;
    }
}

export const removeFavorite = (id) => async dispatch =>{
    const res = await csrfFetch(`/api/favorites/${id}`, {
        method: "DELETE"
    });
    const data = res.json()
    dispatch(deleteFavorite(id))
}

let initialState = {}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_FAVORITE:
            return {
                ...state, 
                ...Object.fromEntries(action.favs.map(fav => [fav.id, fav]))
            }
        case ADD_FAVORITE:
            return {
                ...state,
                [action.fav.id]: action.fav

            }
         case DELETE_FAVORITE:
            const newState = {...state};
            delete newState[action.favId];
            return newState;
        default:
            return state;
    }
}

export default favoriteReducer;