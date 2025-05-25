


import react from "react";
import '../styles/Child.css';
import { useRef } from "react";


function LightButton({ onToggle }){

    const lightRef = useRef(null);

    return(
        <div className="light-div">
            <div className="light" ref={lightRef}></div>
            <button onClick={() => onToggle(lightRef)}>Toggle Light</button>
        </div>
    );
}

export default LightButton;