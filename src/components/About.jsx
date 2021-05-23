import React from "react";
import "./about.css"
import profile from "../assets/profilerojo.svg"
import Puntitos from "./random/Puntitos";
import Subtitulo from "./random/Subtitulo";

function About() {
  return (
    <div className="pb-4" style={{backgroundColor:"#fefefe"}}>
      <div className="container pt-3">
        <div className="d-flex container justify-content-start pb-4">
          <Puntitos/>
          <Subtitulo subTitulo={"About Me"}/>
        </div>
        <div className="row">
          <div className="col-3 d-flex justify-content-center align-items-center">
            <img className="image-avatar" src={profile} alt="profile"/>
          </div>
          <div className="col-9 descripcion">
            <div className="py-4 d-flex flex-column justify-content-between">
              <p className="px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                at justo scelerisque, feugiat ex eu, venenatis sem.
              </p>
              <div className="d-flex justify-content-center">
                <a href="#" className="btn-a">Download CV</a>
              </div>
            </div>

            <div className="py-4">
                <p>Front-End</p>
              <div class="progress mb-4">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style={{width: "95%"}}
                  ariavaluenow="95"
                  ariavaluemin="0"
                  ariavaluemax="100"
                ></div>
              </div>
                <p>Back-End</p>
              <div class="progress mb-4">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style={{width: "75%"}}
                  ariavaluenow="75"
                  ariavaluemin="0"
                  ariavaluemax="100"
                ></div>
              </div>
                <p>Database</p>
              <div class="progress mb-4">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{width: "65%"}}
                  ariavaluenow="65"
                  ariavaluemin="0"
                  ariavaluemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
