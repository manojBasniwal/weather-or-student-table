import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Images } from "../../utils/images";
import { useNavigate } from "react-router-dom";
// import { Images } from "../../utils/images";


function Navbar() {
    const [toggle, setToggle] = useState("")
    const navigate = useNavigate()

    const reset = () => {
        localStorage.removeItem("LOGIN_DETAILS");
        navigate("/login")
    }

    const handleToggle= ()=>{
        if(toggle === "mobil"){
            setToggle('') 
        }else{
            setToggle("mobil")
        }

    }

    return (
        <div className="topnavbar-section">
            <Link className="navbar-brand" to="/"><img src={Images.Student} />Student</Link>
            <img className="button" onClick={handleToggle} src={Images.Toggler} />
            {/* <button className="button" onClick={handleToggle}>button</button> */}
            <div className={`items-container ${toggle}`}>
                <div className="nav-items">
                    <Link className="nav-item " to="/">Home</Link>
                    <Link className="nav-item" to="/weather">Weather</Link>
                </div>
                <button className="delete-btn logout" onClick={reset}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
