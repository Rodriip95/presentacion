import React from "react";
import "./about.css"
import profile from "../assets/profilerojo.svg"
import Puntitos from "./random/Puntitos";
import Subtitulo from "./random/Subtitulo";
import Tips from "./random/Tips";

function About() {
  return (
    <div className="pb-4" style={{backgroundColor:"#fefefe"}}>
      <div className="container pt-3 px-4">
        <div className="d-flex container justify-content-start pb-4">
          <Puntitos/>
          <Subtitulo subTitulo={"About Me"}/>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center">
            <img className="image-avatar" src={profile} alt="profile"/>
          </div>
          <div className="col-lg-9 col-12 descripcion">
            <div className="row">
              <div className="col-12 col-md-6 py-4 d-flex flex-column justify-content-between">
                <p className="px-4">
                  Me llamo Rodrigo Manuel Penela, tengo 26 años y soy de Buenos Aires, Argentina. Soy Desarrollador Full Stack y estudio Licenciatura en Programacion en la universidad (UNGS). Soy muy detallista y me gustan los buenos diseños y las interfaces modernas, tambien en mis tiempos libres enseño diseño web y trabajo en proyectos con mis colegas. 
                </p>
                <div className="d-flex justify-content-center">
                  <a href="#" className="btn-a">Download CV</a>
                </div>
              </div>

              <div className="col-12 col-md-6 py-4">
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
        <Tips/>
      </div>
    </div>
  );
}

export default About;
