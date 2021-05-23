import React from "react"
import "./navbar.css"

function Navbar() {
    return(
        <nav className="navegacion">
            <div>
                <h1>Rodri</h1>
            </div>
            <ul>
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
    )
}

export default Navbar;