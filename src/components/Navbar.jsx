import React from "react"
import "./navbar.css"

function Navbar() {
    return(
        <div className="d-flex justify-content-center">
            <nav className="navegacion row">
                <div className="col-12 col-md-6">
                    <h1>Rodrigo Penela</h1>
                </div>
                <ul className="col-12 col-md-6">
                    <li>
                    <a href="">About</a>
                    </li>
                    <li>
                    <a href="">Skills</a>
                    </li>
                    <li>
                    <a href="">Projects</a>
                    </li>
                    <li>
                    <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;