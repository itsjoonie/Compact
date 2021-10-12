import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./List.css";
import {getHostings, deleteOneHosting} from "../../../store/hosting";
import Favorite from "./Favorite";

function List(){
    const dispatch = useDispatch()
    const history = useHistory()
    const hostings = useSelector((state)=> Object.values(state.hosting))
    const hostingId = hostings.id
 





    return (
        <div className="list-page">
            <div className="listing-header">
                <div>
                    <h1>Tiny Home Stays</h1>
                </div>
                <div>
                    <p><i class="fas fa-home"></i>  Many tiny houses you can call home for the duration of your stay.</p>
                </div>
            </div>
            <div className="list-container">
                <div>
                    {hostings.map(hosting => (
                        <div>
                            <div>
                                {/* <Favorite hostingId={hosting.id}/> */}
                            </div>
                        <Link className="listing-links" to={`/listing/${hosting.id}`}>
                    <div className="list-cards-content" key={hosting.id}>
                        
                        <div className="list-cards-content-img">
                            <img src={hosting?.Images[0]?.pic1} alt=""></img>
                        </div>
                        <div className="list-cards-content-left">
                            <div className="list-card-first-row">
                                <div>
                                    <h1> {hosting?.title}</h1>
                                </div>
                                
                                
                            </div>
                            <hr className="line-seperation"/>
                            <div className="list-descriptions">
                                <h2> {hosting?.guest} guests · {hosting?.bed} bed · {hosting?.bathroom} bath   </h2>
                                {hosting?.pet?
                                 <h2>
                                    pet friendly: yes
                                 </h2>
                                 :
                                 <h2>
                                    pet friendly: no
                                </h2>
                                }
                            </div>
                            <div className="list-rating">
                                <div>
                                    <h2>Star</h2>
                                </div>
                                <div>
                                    <h2>${hosting?.price}/night</h2>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    </Link>
                    </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default List;