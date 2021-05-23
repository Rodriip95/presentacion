import React from 'react'
import Puntitos from './random/Puntitos'
import Subtitulo from './random/Subtitulo'
import logoFront from '../assets/Asset21.svg';
import logoBack from '../assets/Asset22.svg';
import logoDb from '../assets/Asset24.svg';
import "./skills.css";

export default function Skills() {
    return(
        <div className="container">
            <div className="d-flex container justify-content-start pb-4">
                <Puntitos/>
                <Subtitulo subTitulo={"Skills"}/>
            </div>

            <div className="row">
                <div className="cont-img col-4">
                    <img src={logoBack}/>
                </div>
                <div className="cont-img col-4">
                    <img src={logoFront}/>
                </div>
                <div className="cont-img col-4">
                    <img src={logoDb}/>
                </div>
            </div>
        </div>
    )
}