


import React from "react";
import '../styles/State.css';
import { useState, useEffect } from "react";

function State(){

    const [value, setValue] = useState(0);
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        setDisable(value <= 0);
      }, [value]);

    // const handleClick = ()=>{
    // if(value <= 0){
    //     setDisable(!disable);
    // }
    // setValue(value - 1);
    // }


    return(
        <section className="hook">
            <div className="btn">
                <div className="btn-value">{value}</div>
                <button onClick={() => setValue(value + 1)}>Increment</button>
            </div>

            <div className="hook-value">{value}</div>

            <div className="btn">
                <div className="btn-value">{value}</div>
                <button onClick={() => setValue(value - 1)} disabled={disable} >Decrement</button>
            </div>
        </section>
    );
}

export default State;