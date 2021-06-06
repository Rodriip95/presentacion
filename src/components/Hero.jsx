import React from "react"
import profile from "../assets/profilerojo.svg"
import "./hero.css"

function Hero() {
    return(
      <div className="hero">
        <img src={profile} alt="profile"/>
        <h1>Hi, i´m Rodri!</h1>
        <p>Full Stack Developer</p>
        <a href="https://www.linkedin.com/in/rodrigomanuelpenela" target="_blank">
        <i class="linkedin fab fa-linkedin"></i>
        </a>
        <a className="botonMain" href="#about">About me</a>
      </div>
    )
}

export default Hero;

