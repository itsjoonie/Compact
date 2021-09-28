import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./List.css";
import {getHostings} from "../../../store/hosting";

function List (){
    const dispatch = useDispatch()
    const hostings = useSelector((state)=> Object.values(state.hosting))

    useEffect(() => {
        dispatch(getHostings())
    }, [dispatch])

    return (
        <>
            <div className="list">
                 {hostings.map(hosting => (
                <div key={hosting.id}>
                 <h1> {hosting.title}</h1>
                 <h2> {hosting.description}</h2>
                 </div>
                 )
                 )}

            </div>
        </>
    )
}

export default List;