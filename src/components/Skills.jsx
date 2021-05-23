import React from 'react'
import Puntitos from './random/Puntitos'
import Subtitulo from './random/Subtitulo'
import logoFront from '../assets/Asset21.svg';
import logoDb from '../assets/Asset22.svg';
import logoBack from '../assets/Asset24.svg';
import "./skills.css";


export default function Skills() {
    return(
        <div className="container">
            <div className="d-flex container justify-content-start pb-4">
                <Puntitos/>
                <Subtitulo subTitulo={"Skills"}/>
            </div>
            <div className="row px-4 d-flex justify-content-center">
                <div className="cont-img col-3 mx-2">
                    <img src={logoBack}/>
                    <h2>Back-End</h2>
                    <p>Buen dominio de Javascript y conocimientos de Node js con Express.</p>
                    <div>
                        <i class="fab fa-node-js"></i>
                        <i class="fab fa-js-square"></i>
                    </div>
                </div>
                <div className="cont-img col-3 mx-2">
                    <img src={logoFront}/>
                    <h2>Front-End</h2>
                    <p>Buen manejo de React y React Native, solidas bases de HTML y CSS con dominio de Bootstrap</p>
                    <div>
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-react"></i>
                        <i class="fab fa-css3"></i>
                        <i class="fab fa-bootstrap"></i>
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                </div>
                <div className="cont-img col-3 mx-2">
                    <img src={logoDb}/>
                    <h2>Database</h2>
                    <p>Conocimientos en bases de datos SQL, como MySQL y PostgreeSQL, y NO-SQL, como Firebase.</p>
                    <div>
                        <i class="fas fa-database"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}