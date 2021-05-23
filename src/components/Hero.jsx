import React from "react"
import profile from "../assets/profilerojo.svg"
import "./hero.css"

function Hero() {
    return(
      <div className="hero">
        <img src={profile} alt="profile"/>
        <h1>Hi, i'm Rodri</h1>
        <p>Full Stack Developer</p>
        <a href="#">Hire me</a>
      </div>
    )
}

export default Hero;

