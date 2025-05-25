


import React, { useState } from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import BoxNavbar from "./BoxNavbar";



function Navbar() {

    const Phase1 = [
        { path: "/Section", title: "Cards" },
        { path: "/State", title: "State" },
        { path: "/Effect", title: "Effect" },
        { path: "/LightToggle", title: "Light" },
        { path: "/Form", title: "Forms" },
    ];

    const [showBoxNavbar, setShowBoxNavbar] = useState(false);

    return (
        <nav>
            <span>Practice</span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li  className="dropdown" onClick={()=> setShowBoxNavbar(!showBoxNavbar)}>Phase 1
                {showBoxNavbar && <BoxNavbar items={Phase1} />}
                </li>

                {/* <li className="dropdown"> // For Hover
                    Phase 1
                    <BoxNavbar items={Phase1} />
                </li> */}

                {/* <li><Link to="/Section">Cards</Link></li>
                <li><Link to="/State">State</Link></li>        
                <li><Link to="/Effect">Effect</Link></li>
                <li><Link to="/LightToggle">Light</Link></li>         */}
            </ul>
        </nav>
    );
}


export default Navbar;