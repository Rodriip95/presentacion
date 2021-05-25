import React from 'react';
import Puntitos from './random/Puntitos';
import Subtitulo from './random/Subtitulo';

import "./project.css"

export default function Project(){
    return(
        <div className="container">
            <div className="d-flex container justify-content-start pb-4">
                <Puntitos/>
                <Subtitulo subTitulo={"Projects"}/>
            </div>

            <div className="row d-flex justify-content-around">
                <div id="astrid" className="cardimg col-12 col-lg-3">
                    <div className="resumen">
                        <h2>Astrid Toys</h2>
                        <p>Ecommerce de muñecos Funko. Proyecto didactivo realizado en la academia Soy Henry, el cual se trabajo en el stack PERN (Postgree, Express, React y NodeJs), trabajado sobre metodologia SCRUM, en este cumpli el rol de FullStack y Analista Funcional organizando al equipo y definiendo los objetivos de la aplicacion, fue deployado en Heroku.</p>
                    </div>
                </div>

                <div id="menu" className="cardimg col-12 col-lg-3">
                    <div className="resumen">
                        <h2>Astrid Toys</h2>
                        <p>gas hgasg  gasf af af asf asfasfghsgf ghf asdgfhasghf g h</p>
                    </div>
                </div>

                <div id="coment" className="cardimg col-12 col-lg-3">
                    <div className="resumen">
                        <h2>Astrid Toys</h2>
                        <p>gas hgasg  gasf af af asf asfasfghsgf ghf asdgfhasghf g h</p>
                    </div>
                </div>
            </div>
        </div>
    )
}