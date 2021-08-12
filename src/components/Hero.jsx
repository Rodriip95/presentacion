import React from "react"
import profile from "../assets/profilerojo.svg"
import "./hero.css"

function Hero() {
    return(
      <div className="hero">
        <div class="h-100 w-100 capa-negra d-flex justify-content-center align-items-center">
          <div class="caja-blanca shadow px-4 pb-4 pt-2 d-flex flex-column align-items-center">
            <img src={profile} alt="profile"/>
            <h1>Hi, i´m Rodri!</h1>
            <p>Full Stack Developer</p>
            <a href="https://www.linkedin.com/in/rodrigomanuelpenela" target="_blank">
              <i class="linkedin fab fa-linkedin"></i>
            </a>
            <a className="botonMain" href="#about">About me</a>
          </div>
        </div>
      </div>
    )
}

export default Hero;

