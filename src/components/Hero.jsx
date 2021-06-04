import React from "react"
import profile from "../assets/profilerojo.svg"
import "./hero.css"

function Hero() {
    return(
      <div className="hero">
        <img src={profile} alt="profile"/>
        <h1>Bienvenidos</h1>
        <p>Full Stack Developer</p>
        <a href="#">Conoceme</a>
      </div>
    )
}

export default Hero;

