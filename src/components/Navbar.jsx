import React from "react"
import "./navbar.css"

function Navbar() {
    return(
        <div className="d-flex justify-content-center">
            <nav className="navegacion row">
                <div className="col-12 col-md-6">
                    <h1 style={{color:"#ff6569", cursor:"default"}}>Rodrigo Penela</h1>
                </div>
                <ul className="col-12 col-md-6">
                    <li>
                    <a href="#about">About</a>
                    </li>
                    <li>
                    <a href="#skills">Skills</a>
                    </li>
                    <li>
                    <a href="#projects">Projects</a>
                    </li>
                    <li>
                    <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;