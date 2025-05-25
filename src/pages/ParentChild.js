


import react, { useState } from "react";
import LightButton from "../components/Child";
import '../styles/ParentChild.css';


function LightToggle(){

    const [isLight, setIsLight] = useState(false);


    const ToggleLight = (lightRef) => {
        setIsLight(!isLight);
        // setIsLight(prev => !prev); // flips the state
        lightRef.current.classList.toggle("active");
    };

    return(
        <div className="light-class">
            <h1>The Light is {isLight? "On" : "Off"}</h1>
            <LightButton onToggle={ToggleLight} />
        </div>
    );
}

export default LightToggle;