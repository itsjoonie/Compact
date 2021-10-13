// import {useState, useEffect} from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import {createFavorite, getFavorites, removeFavorite} from "../../../store/favorite"



// function Favorite ({hostingId}){
//     const dispatch = useDispatch();
//     const [heart, setHeart] =useState(false)
//     const userId = useSelector(state => state.session.user?.id);
//     const favorites = useSelector((state)=> Object.values(state.favorite))




//     const handleLike = async (e) =>{

//         setHeart(!heart)
//         if(heart == true){
//             const payload ={
//                 userId,
//                 hostingId,
//                 heart
//             }
//             await dispatch(createFavorite(payload))
//         }else{
//             await dispatch(removeFavorite(e.target.id))
//         }
        
//     }

 



//     return (
//         <>
            
//             <i class="far fa-heart" onClick={handleLike}></i>
           
           
//         </>
//     )

// }

// export default Favorite;