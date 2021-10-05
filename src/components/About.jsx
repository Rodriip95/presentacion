import React, { useEffect } from "react";
import "./about.css"
import profile from "../assets/rodri.jpg"
import Puntitos from "./random/Puntitos";
import Subtitulo from "./random/Subtitulo";
import Tips from "./random/Tips";
import CV from '../assets/CVRODRIGOPENELA.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    AOS.init({
      mirror: false,
      once: false,
      easing: 'ease-in-out',
      duration: 600
    });
  },[])

  return(
    <div id="about" className="container mb-4">
      <div className="d-flex justify-content-start pb-4 mt-4">
           <Puntitos/>
          <Subtitulo subTitulo={"About Me"}/>
       </div>
       <div data-aos="fade-up" className="row contenedor-about">
         <div className="col-12 col-lg-6">
          <p className="py-3">
               My name is Rodrigo Manuel Penela, i´m 26 years old and i´m from Buenos Aires, Argentina. I´m Full Stack Developer and i´m study a degree in Programming in the university (UNGS). I am very detailed, I like good designs and modern interfaces also in my free times I teach web design and work on projects with my partners. 
            </p>
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
         <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
          <img className="image-profile rounded-circle pb-4 pb-lg-0" src={profile} alt="profile"/>
         </div>
       </div>
    </div>
  )

  // return (
  //   <div id="about" className="pb-4" style={{backgroundColor:"#fefefe"}}>
  //     <div className="container pt-3 px-4">
  //       <div className="d-flex container justify-content-start pb-4">
  //         <Puntitos/>
  //         <Subtitulo subTitulo={"About Me"}/>
  //       </div>
  //       <div className="row">
  //         <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center border">
  //           <p className="px-4">
  //             My name is Rodrigo Manuel Penela, i´m 26 years old and i´m from Buenos Aires, Argentina. I´m Full Stack Developer and i´m study a degree in Programming in the university (UNGS). I am very detailed, I like good designs and modern interfaces also in my free times I teach web design and work on projects with my partners. 
  //           </p>
  //         </div>
  //         <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center border">
  //           <img className="image-avatar" src={profile} alt="profile"/>
  //         </div>
  //       </div>
  //       <div data-aos="fade-up" className="row">
  //         <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center">
  //           <img className="image-avatar" src={profile} alt="profile"/>
  //         </div>
  //         <div className="col-lg-9 col-12 descripcion">
  //           <div className="row">
  //             <div className="col-12 col-md-6 py-4 d-flex flex-column justify-content-between">
  //               <p className="px-4">
  //                 My name is Rodrigo Manuel Penela, i´m 26 years old and i´m from Buenos Aires, Argentina. I´m Full Stack Developer and i´m study a degree in Programming in the university (UNGS). I am very detailed, I like good designs and modern interfaces also in my free times I teach web design and work on projects with my partners. 
  //               </p>
  //               <div className="d-flex justify-content-center">
  //                 <a href={CV} download className="btn-a">Download CV</a>
  //               </div>
  //             </div>

  //             <div className="col-12 col-md-6 py-4">
  //                 <p>Front-End</p>
  //               <div class="progress mb-4">
  //                 <div
  //                   class="progress-bar bg-primary"
  //                   role="progressbar"
  //                   style={{width: "95%"}}
  //                   ariavaluenow="95"
  //                   ariavaluemin="0"
  //                   ariavaluemax="100"
  //                   ></div>
  //               </div>
  //                 <p>Back-End</p>
  //               <div class="progress mb-4">
  //                 <div
  //                   class="progress-bar bg-danger"
  //                   role="progressbar"
  //                   style={{width: "75%"}}
  //                   ariavaluenow="75"
  //                   ariavaluemin="0"
  //                   ariavaluemax="100"
  //                   ></div>
  //               </div>
  //                 <p>Database</p>
  //               <div class="progress mb-4">
  //                 <div
  //                   class="progress-bar bg-success"
  //                   role="progressbar"
  //                   style={{width: "65%"}}
  //                   ariavaluenow="65"
  //                   ariavaluemin="0"
  //                   ariavaluemax="100"
  //                   ></div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <Tips/>
  //     </div>
  //   </div>
  // );
}

export default About;
