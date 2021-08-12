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

function NavbarNew(){
    return(
        <div id="home" class="container">
            <nav class="navbar navbar-expand-lg navbar-light w-100">
                <div class="container">
                    <a class="navbar-brand" href="#"><span>{"<"}</span>Rodri Penela<span>{"/>"}</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="d-flex justify-content-start justify-content-lg-end w-100">
                            <ul class="navbar-nav">
                                <li class="nav-item mx-2">
                                <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item mx-2">
                                <a class="nav-link" href="#">Skills</a>
                                </li>
                                <li class="nav-item mx-2">
                                <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item mx-2">
                                <a class="nav-link" href="#">Projects</a>
                                </li>
                                <li class="nav-item mx-2">
                                <a class="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarNew;