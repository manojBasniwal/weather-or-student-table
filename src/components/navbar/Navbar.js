import React from 'react'
import { Link } from "react-router-dom";
import {Images} from "../../utils/images";

function Navbar() {
    return (
        <div className="topnavbar-section">
                <Link className="navbar-brand" to="#"><img className="windspeed-img"src={Images.Student}/>Student</Link> 
            <div>
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/weather">Weather</Link>
            </div>
        </div>
    )
}

export default Navbar
