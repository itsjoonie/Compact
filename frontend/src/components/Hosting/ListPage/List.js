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
    const hostingId = hostings.id

    useEffect(() => {
        dispatch(getHostings())
    }, [dispatch])



    return (
        <div>
            <h1>Tiny Home Stays</h1>
            <div className="list">
                 {hostings.map(hosting => (
                <div className="list-cards" key={hosting.id}>
                 <h1> {hosting.title}</h1>
                 <h2> {hosting.description}</h2>
            
                 </div>
                 )
                 )}

            </div>
        </div>
    )
}

export default List;