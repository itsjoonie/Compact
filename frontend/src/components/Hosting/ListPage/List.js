import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./List.css";
import {getHostings, deleteOneHosting} from "../../../store/hosting";

function List(){
    const dispatch = useDispatch()
    const history = useHistory()
    const hostings = useSelector((state)=> Object.values(state.hosting))
    console.log(hostings, "what us tgusss")
    const hostingId = hostings.id

    useEffect(() => {
        dispatch(getHostings())
    }, [dispatch])



    return (
        <div>
            <div className="listing-header">
            <h1>Tiny Home Stays</h1>
            </div>
            <div className="list-container">
                <div>
                    {hostings.map(hosting => (
                    <div className="list-cards-content" key={hosting.id}>
                        <div className="list-cards-content-img">
                            <img src={hosting.Images[0].pic1} alt="pic1"></img>
                        </div>
                        <div className="list-cards-content-left">
                            <h1> {hosting.title}</h1>
                            <div className="list-descriptions">
                                <h2> {hosting.guest} guests · {hosting.bed} bed · {hosting.bathroom} bath   </h2>
                                {hosting.pet?
                                 <h2>
                                    pet friendly: yes
                                 </h2>
                                 :
                                 <h2>
                                    pet friendly: no
                                </h2>
                                }
                            </div>
                        </div>
                
                    </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default List;