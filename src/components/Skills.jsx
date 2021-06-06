import React, { useEffect } from 'react'
import Puntitos from './random/Puntitos'
import Subtitulo from './random/Subtitulo'
import logoFront from '../assets/Asset21.svg';
import logoDb from '../assets/Asset22.svg';
import logoBack from '../assets/Asset24.svg';
import "./skills.css";
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Skills() {
    useEffect(()=>{
        AOS.init({
          mirror: false,
          once: false,
          easing: 'ease-in-out',
          duration: 600
        });
      },[])
    return(
        <div id="skills" className="container mb-3">
            <div className="d-flex container justify-content-start pb-4">
                <Puntitos/>
                <Subtitulo subTitulo={"Skills"}/>
            </div>
            <div data-aos="fade-up" className="row px-4 d-flex justify-content-center">
                <div className="cont-img col-sm-12 col-lg-3 m-2">
                    <img src={logoBack}/>
                    <h2>Back-End</h2>
                    <div className="cont-p">
                    <p>Good command of Javascript and knowledge of Node.js with Express.</p>
                    </div>
                    <div className="cont-icons">
                        <i class="fab fa-node-js"></i>
                        <i class="fab fa-js-square"></i>
                    </div>
                </div>
                <div className="cont-img col-sm-12 col-lg-3 m-2">
                    <img src={logoFront}/>
                    <h2>Front-End</h2>
                    <div className="cont-p">
                    <p>React is my main tecnology also React Native, I have solid foundations of HTML, CSS and Bootstrap.</p>
                    </div>
                    <div className="cont-icons">
                        <i class="fas fa-mobile-alt"></i>
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-react"></i>
                        <i class="fab fa-bootstrap"></i>
                        <i class="fab fa-css3"></i>
                    </div>
                </div>
                <div className="cont-img col-sm-12 col-lg-3 m-2">
                    <img src={logoDb}/>
                    <h2>Database</h2>
                    <div className="cont-p">
                    <p>Knowledge of SQL databases, such as MySQL and PostgreeSQL, and NO-SQL, such as Firebase.</p>
                    </div>
                    <div className="cont-icons">
                        <i class="fas fa-database"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}