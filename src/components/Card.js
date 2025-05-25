


import React from "react";
import '../styles/Card.css';


function Card({id, image, title, description}){
    return(
        <div id={id} className="card">
            <div className="card-image"><img src={image}/></div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Card;