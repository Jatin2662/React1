

import React from "react";
import '../styles/BoxNavbar.css';
import { Link } from "react-router-dom";

function BoxNavbar({items}){
    return(
        <div className="box-navbar">
            <ul>
                {items.map((item)=>(
                    <li><Link to={item.path} >{item.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default BoxNavbar;